function doPost(e) {

  const requestData = JSON.parse(e.postData.contents);
  const full_route = requestData['route']
  
  const section = full_route.split("/")[0]

  if (section == "todo") {
    out_params = RouterTODO(requestData)
  } else if (section == "contracts") {
    out_params = RouterContracts(requestData)
  } 
  
  else {
    out_params = {
      'data': "Routing Error",
      "statusCode": 404
    }
  }

  return ContentService.createTextOutput(JSON.stringify(out_params)).setMimeType(ContentService.MimeType.JSON);
}