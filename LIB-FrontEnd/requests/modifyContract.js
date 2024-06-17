function ModifyContract(formData) {

  // send data to temporal spreadsheet
  // send sheet name to api 

  formData['route'] = "contracts/modify"

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(formData),
    'muteHttpExceptions': true,
    "headers": {authorization: "Bearer " + ScriptApp.getOAuthToken()}
  };

  return RequestNew(options)

}