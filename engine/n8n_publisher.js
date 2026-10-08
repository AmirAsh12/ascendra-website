import { workflow, node, trigger, ifElse, expr } from '@n8n/workflow-sdk';

const TABLE = { __rl: true, mode: 'id', value: 'fwpTVRDtWarAcAs2', cachedResultName: 'ascendra_daily_queue' };
const SMTP = { smtp: { id: 'doMaAkqBUFYeFIgU', name: 'SMTP account' } };
const YT = { youTubeOAuth2Api: { id: 'LPWHCt40JWutUzLE', name: 'YouTube account' } };
const ROW = "$('Get Today\\'s Post').item.json";
const html = (h) => ({ respondWith: 'text', responseBody: h, options: { responseCode: 200, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] } } });
const page = (t, p) => `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="font-family:system-ui,sans-serif;max-width:640px;margin:40px auto;padding:0 16px;color:#0B1F3A"><h2>${t}</h2><p>${p}</p></body></html>`;

const daily = trigger({ type: 'n8n-nodes-base.scheduleTrigger', version: 1.4, config: { name: 'Every Day 10am UK', parameters: { rule: { interval: [{ field: 'days', daysInterval: 1, triggerAtHour: 10, triggerAtMinute: 0 }] }, misfirePolicy: 'coalesce' } } });

const getToday = node({ type: 'n8n-nodes-base.dataTable', version: 1.1, config: { name: "Get Today's Post", parameters: {
  resource: 'row', operation: 'get', dataTableId: TABLE, matchType: 'allConditions',
  filters: { conditions: [
    { keyName: 'publishDate', condition: 'eq', keyValue: expr("{{ $now.setZone('Europe/London').toFormat('yyyy-MM-dd') }}") },
    { keyName: 'status', condition: 'eq', keyValue: 'ready' }] },
  returnAll: false, limit: 1 } } });

const postLinkedIn = node({ type: 'n8n-nodes-base.httpRequest', version: 4.2, config: { name: 'Post To LinkedIn', onError: 'continueRegularOutput', parameters: {
  method: 'POST', url: 'http://localhost:5678/webhook/linkedin-post', sendHeaders: true, specifyHeaders: 'keypair',
  headerParameters: { parameters: [{ name: 'x-post-key', value: 'BRVAz09NwPy-5igPbmvDwuhuX4dj55ch' }] },
  sendBody: true, contentType: 'json', specifyBody: 'json',
  jsonBody: expr("{{ JSON.stringify({ text: $json.linkedinText, imageUrl: $json.imageUrl, altText: $json.altText }) }}"),
  options: { timeout: 120000 } } } });

const downloadVideo = node({ type: 'n8n-nodes-base.httpRequest', version: 4.2, config: { name: 'Download Video', onError: 'continueRegularOutput', parameters: {
  url: expr(`{{ ${ROW}.videoUrl }}`), options: { response: { response: { responseFormat: 'file' } } } } } });

const uploadYT = node({ type: 'n8n-nodes-base.youTube', version: 1, config: { name: 'Upload To YouTube', onError: 'continueRegularOutput', credentials: YT, parameters: {
  resource: 'video', operation: 'upload', title: expr(`{{ ${ROW}.ytTitle }}`), regionCode: 'GB', categoryId: '27', binaryProperty: 'data',
  options: { defaultLanguage: 'en', description: expr(`{{ ${ROW}.ytDescription }}`), embeddable: true, notifySubscribers: true, privacyStatus: 'public', selfDeclaredMadeForKids: false, tags: expr(`{{ ${ROW}.ytTags }}`) } } } });

const markPosted = node({ type: 'n8n-nodes-base.dataTable', version: 1.1, config: { name: 'Mark Posted', parameters: {
  resource: 'row', operation: 'update', dataTableId: TABLE, matchType: 'allConditions',
  filters: { conditions: [{ keyName: 'id', condition: 'eq', keyValue: expr(`{{ ${ROW}.id }}`) }] },
  columns: { mappingMode: 'defineBelow', value: {
    status: 'posted',
    linkedinUrl: expr("{{ $('Post To LinkedIn').item.json.postUrl || 'failed' }}"),
    youtubeUrl: expr("{{ $('Upload To YouTube').item.json.uploadId ? 'https://youtube.com/shorts/' + $('Upload To YouTube').item.json.uploadId : 'failed' }}") },
    matchingColumns: [], schema: [
      { id: 'status', displayName: 'status', required: false, defaultMatch: false, display: true, type: 'string', canBeUsedToMatch: true },
      { id: 'linkedinUrl', displayName: 'linkedinUrl', required: false, defaultMatch: false, display: true, type: 'string', canBeUsedToMatch: true },
      { id: 'youtubeUrl', displayName: 'youtubeUrl', required: false, defaultMatch: false, display: true, type: 'string', canBeUsedToMatch: true }] } } } });

const emailSummary = node({ type: 'n8n-nodes-base.emailSend', version: 2.1, config: { name: 'Email Summary', credentials: SMTP, parameters: {
  resource: 'email', operation: 'send', fromEmail: 'Ascendra <hello@ascendra-academy.co.uk>', toEmail: 'aashtiani2019@gmail.com',
  subject: expr(`{{ 'Ascendra lesson ' + ${ROW}.day + ' published' }}`), emailFormat: 'html',
  html: expr(`{{ '<p>Lesson ' + ${ROW}.day + ' of LinkedIn from Zero went out at 10am.</p><ul><li>LinkedIn: ' + ($('Post To LinkedIn').item.json.postUrl ? '<a href="' + $('Post To LinkedIn').item.json.postUrl + '">view post</a>' : 'FAILED (check the LinkedIn Personal Poster executions; the token may need reconnecting)') + '</li><li>YouTube: ' + ($('Upload To YouTube').item.json.uploadId ? '<a href="https://youtube.com/shorts/' + $('Upload To YouTube').item.json.uploadId + '">view Short</a>' : 'FAILED (check the YouTube credential in n8n)') + '</li></ul>' }}`),
  options: { appendAttribution: false } } } });

// Cancel link
const cancelHook = trigger({ type: 'n8n-nodes-base.webhook', version: 2.1, config: { name: 'Cancel Link Opened', parameters: { httpMethod: 'GET', path: 'ascendra-daily-cancel', responseMode: 'responseNode', options: {} } } });
const findRow = node({ type: 'n8n-nodes-base.dataTable', version: 1.1, config: { name: 'Find Post To Cancel', alwaysOutputData: true, parameters: {
  resource: 'row', operation: 'get', dataTableId: TABLE, matchType: 'allConditions',
  filters: { conditions: [{ keyName: 'token', condition: 'eq', keyValue: expr("{{ $json.query?.t || 'none' }}") }] }, returnAll: false, limit: 1 } } });
const canCancel = ifElse({ version: 2.2, config: { name: 'Still Pending?', parameters: { conditions: {
  options: { caseSensitive: true, leftValue: '', typeValidation: 'loose' },
  conditions: [{ leftValue: expr('{{ $json.status }}'), operator: { type: 'string', operation: 'equals' }, rightValue: 'ready' }], combinator: 'and' } } } });
const markCancelled = node({ type: 'n8n-nodes-base.dataTable', version: 1.1, config: { name: 'Mark Cancelled', parameters: {
  resource: 'row', operation: 'update', dataTableId: TABLE, matchType: 'allConditions',
  filters: { conditions: [{ keyName: 'id', condition: 'eq', keyValue: expr('{{ $json.id }}') }] },
  columns: { mappingMode: 'defineBelow', value: { status: 'cancelled' }, matchingColumns: [], schema: [{ id: 'status', displayName: 'status', required: false, defaultMatch: false, display: true, type: 'string', canBeUsedToMatch: true }] } } } });
const showCancelled = node({ type: 'n8n-nodes-base.respondToWebhook', version: 1.5, config: { name: 'Show Cancelled', parameters: html(page("Today's post is cancelled", 'Nothing will be published at 10am for this lesson.')) } });
const showNotPending = node({ type: 'n8n-nodes-base.respondToWebhook', version: 1.5, config: { name: 'Show Not Pending', parameters: html(page('Nothing to cancel', 'This lesson has already been published or cancelled, or the link is not valid.')) } });

export default workflow('ascendra-daily-publisher', 'Ascendra Daily Publisher')
  .add(daily).to(getToday).to(postLinkedIn).to(downloadVideo).to(uploadYT).to(markPosted).to(emailSummary)
  .add(cancelHook).to(findRow).to(canCancel.onTrue(markCancelled.to(showCancelled)).onFalse(showNotPending));
