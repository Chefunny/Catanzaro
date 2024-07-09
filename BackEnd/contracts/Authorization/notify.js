function acceptAuthMail(requester, authorizer, contractNumber) {

  requester = getUserFromName(requester)
  authorizer = getUserFromName(authorizer)

  MailApp.sendEmail({
    to: requester.email,
    subject: "[CatanzaroWebTEST] Contract Authorization Approved",
    body: `Your Contract Authorization request was approved, and was assigned the following Contract Number: ${contractNumber}`
  })
}

function rejectAuthMail(requester, message) {

  requester = getUserFromName(requester)

  MailApp.sendEmail({
      to: requester.email,
      subject: "[CatanzaroWebTEST] Contract Authorization Rejected",
      body: `Your Contract Authorization request was rejected`
    })
}

function createAuthMail(requester, area) {

  requester = getUserFromName(requester)
  const responsibles = getResponsibles(area, email)

  const link = "https://script.google.com/a/macros/catanzaro.cl/s/AKfycby0aWr6nefM1TM50laCfqV4O-B__MmqjiHgsxvDQDFM/dev?page=authorizations"

  responsibles.forEach(function(email_auth){
    MailApp.sendEmail({
      to: email_auth,
      subject: "[CatanzaroWebTEST] Contract Authorization Request",
      body: `You have recieved a Contract Authorization Request from ${requester}. Please review this authorization request in ${link}`
    })
  })

  return name
}