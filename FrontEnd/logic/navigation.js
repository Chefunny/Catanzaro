function createUrl(page) {

  var script_url = "https://script.google.com/a/macros/catanzaro.cl/s/AKfycby0aWr6nefM1TM50laCfqV4O-B__MmqjiHgsxvDQDFM/dev" + `?page=${page}`
  return script_url

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}