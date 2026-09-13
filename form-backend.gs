var SHEET_ID = '1iGA2GVDJXDW3axGQ_lFQY8Jqnkeix9R-t4wjYVIk_iE';
var SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([
      new Date().toISOString(),
      data.email || '',
      data.intent || '',
      data.source || '',
      data.evidence_level || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
