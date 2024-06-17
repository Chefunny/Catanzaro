function StatusHandler(response) {

  console.log(response)

  const responseCode = response.getResponseCode();
  const responseText = response.getContentText();
  const responseHeaders = response.getAllHeaders();

  Logger.log('Response Code: ' + responseCode);
  Logger.log('Response Text: ' + responseText);
  Logger.log('Response Headers: ' + JSON.stringify(responseHeaders));



  var status_code = response.getContentText()

  if (status_code == "200") {
    return "Success!"
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
