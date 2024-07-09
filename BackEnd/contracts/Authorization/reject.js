function RejectAuth(formData) {

  const sessionId = formData['sessionId']

  const requester = formData['requester']
  const reject_messaage = formData['reject-message'] || null;

  deleteAny(SpreadsheetIDPending(), "Contracts", sessionId)

  rejectAuthMail(requester, reject_messaage)

  return {
    'data': "Success!",
    'statusCode': 200
  }
}