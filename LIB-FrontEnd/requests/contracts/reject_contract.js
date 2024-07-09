function rejectAuth(formData) {

  const sentData = {
    'sessionId': formData['sessionId'],
    'route': "contracts/reject"
  }

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(sentData),
    'muteHttpExceptions': true,
    "headers": {authorization: "Bearer " + ScriptApp.getOAuthToken()}
  };

  return RequestNew(options)

}
