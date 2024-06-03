function getDashboardHTML() {
  return HtmlService.createHtmlOutputFromFile("html/dashboard.html")
}

function getContractsHTML() {
  return HtmlService.createHtmlOutputFromFile("html/contracts.html")
}

function getForecastsHTML() {
  return HtmlService.createHtmlOutputFromFile("html/contracts.html")
}

function getOperationsHTML() {
  return HtmlService.createHtmlOutputFromFile("html/contracts.html")
}


function createUrl(page) {

  var script_url = "https://script.google.com/a/macros/catanzaro.cl/s/AKfycby0aWr6nefM1TM50laCfqV4O-B__MmqjiHgsxvDQDFM/dev" + `?page=${page}`
  return script_url

}