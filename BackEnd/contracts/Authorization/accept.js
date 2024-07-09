function AcceptAuth(formData) {
  const sessionId = formData['sessionId']

  const response = addContract(formData)
  deleteAny(SpreadsheetIDPending(), "Contracts", sessionId)

  const requester = formData['requester']
  const authorizer = formData['authorizer']
  const fullContractNumber = `N°${response.data.contractNumber}-V${response.data.Version}`

  acceptAuthMail(requester, authorizer, fullContractNumber)

  return {
    'data': "Success!",
    'statusCode': 200
  }
}