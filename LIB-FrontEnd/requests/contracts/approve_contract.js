function approveAuth(formData) {

  formData['route'] = "contracts/accept"

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(formData),
    'muteHttpExceptions': true,
    "headers": {authorization: "Bearer " + ScriptApp.getOAuthToken()}
  };

  return RequestNew(options)

}
