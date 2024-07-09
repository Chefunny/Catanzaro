function GetPending(requestData) {
  const result = getAllEntries(SpreadsheetIDPending(), "Contracts")

  const response = {
    'data': result,
    'statusCode' : 200
  }

  console.log(response)

  return response
}
