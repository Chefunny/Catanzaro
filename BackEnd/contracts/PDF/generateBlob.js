function GenerateBLOB(contractData, type) {

  SpreadsheetApp.flush()
  Utilities.sleep(500)

  const spreadSheet = SpreadsheetApp.openById(SpreadsheetIDPDFGen())
  const url = spreadSheet.getUrl()
  var sheet;

  if (type == "PO") {
    sheet = spreadSheet.getSheetByName("PO")
  } else if (type == "PI") {
    sheet = spreadSheet.getSheetByName("PI")
  } else {return} 

  const blob = getAsBlob(url, sheet)
  var folder_id;

  if (type == "PO") {
    blob.setName(`PO N°${contractData.contractNumber}-V${contractData.Version}`)
    folder_id = "1VRzMqQxdE1laspsawICFmDyxZtwJ3hsx"
  } else if (type == "PI") {
    blob.setName(`PI N°${contractData.contractNumber}-V${contractData.Version}`)
    folder_id = "10SUJPoLhOT5_JuULXWYGeNV6z-04h16p"
  }

  const folder = DriveApp.getFolderById(folder_id)
  const file = folder.createFile(blob)

  return file.getUrl()

}

function getAsBlob(url, sheet) {

  var range = sheet.getRange("A1:I40")

  var rangeParam = ''
  var sheetParam = ''
  if (range) {
    rangeParam =
      '&r1=' + (range.getRow() - 1)
      + '&r2=' + range.getLastRow()
      + '&c1=' + (range.getColumn() - 1)
      + '&c2=' + range.getLastColumn()
  }
  if (sheet) {
    sheetParam = '&gid=' + sheet.getSheetId()
  }
  
  var exportUrl = url.replace(/\/edit.*$/, '')
      + '/export?exportFormat=pdf&format=pdf'
      + '&size=LETTER'
      + '&portrait=true'
      + '&fitw=true'       
      + '&top_margin=0.75'              
      + '&bottom_margin=0.75'          
      + '&left_margin=0.7'             
      + '&right_margin=0.7'           
      + '&sheetnames=false&printtitle=false'
      + '&pagenum=UNDEFINED'
      + '&gridlines=false'
      + '&fzr=FALSE'      
      + sheetParam
      + rangeParam
    
  var response = UrlFetchApp.fetch(exportUrl, {
    muteHttpExceptions: true,
    headers: { 
      Authorization: 'Bearer ' +  ScriptApp.getOAuthToken(),
    },
  })
  
  return response.getBlob()
}
