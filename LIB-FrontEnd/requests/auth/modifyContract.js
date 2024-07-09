function ModifyContract(formData) {

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