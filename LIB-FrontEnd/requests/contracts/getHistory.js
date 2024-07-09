function getContractHistory(contractNumber) {

  var formData = {
    "route": "contracts/gethistory",
    "contractNumber": contractNumber
  }

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(formData),
    'muteHttpExceptions': true,
    "headers": {authorization: "Bearer " + ScriptApp.getOAuthToken()}
  };

  return RequestNew(options)

}

function testGETCONTRACTHISTORY() {
  const number = 12345
  console.log(getContractHistory(number))
}