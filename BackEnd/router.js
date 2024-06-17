function doPost(e) {

  const requestData = JSON.parse(e.postData.contents);
  const full_route = requestData['route']

  const range = SpreadsheetApp.openById("1oCdKUozjunj-E31A1KgW212-iU0WOtS5Ly6Ip6bngoM").getSheetByName("Contracts").getRange("A5")
  range.setValue("hello")
  
  const section = full_route.split("/")[0]

  if (section == "todo") {
    out_params = RouterTODO(requestData)
  } else if (section == "contracts") {
    out_params = RouterContracts(requestData)
  } 
  
  else {
    out_params = 502;
  }

  return ContentService.createTextOutput(out_params).setMimeType(ContentService.MimeType.JSON)
}
