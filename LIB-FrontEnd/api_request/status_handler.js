function StatusHandler(response) {

  const answer = JSON.parse(response.getContentText())
  //console.log(answer)

  const status_code = answer['statusCode']
  //console.log(status_code)

  if (status_code == "200") {
    return answer
  } else if (status_code == "405") {
    return "Error! Check Notifications"
  } else if (status_code == "502") {
    return "Bad request"
  } else if (status_code == "404") {
    return "Incorrect PO number"
  } else {
    return "Unexpected system error"
  }
}
