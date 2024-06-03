function StatusHandler(response) {

  var ui = SpreadsheetApp.getUi()
  ui.alert(response)
  var status_code = response.getContentText()

  if (status_code == "200") {
    SpreadsheetApp.getUi().alert("Success!")
  } else if (status_code == "405") {
    SpreadsheetApp.getUi().alert("Error! Check Notifications")
  } else if (status_code == "502") {
    SpreadsheetApp.getUi().alert("Bad request")
  } else if (status_code == "404") {
    SpreadsheetApp.getUi().alert("Incorrect PO number")
  } else {
    SpreadsheetApp.getUi().alert("Unexpected system error")
  }
}
