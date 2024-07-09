function getContractData(formData) {

  formData['route'] = "contracts/get_latest"

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(formData),
    'muteHttpExceptions': true,
    "headers": {authorization: "Bearer " + ScriptApp.getOAuthToken()}
  };

  return RequestNew(options)

}

function getContractDataTest(){

  const user = getUser()
  const formData = {
    "user": user
  }

  console.log(getContractData(formData))
}