function doGet(e) {

  var param = e.parameter.page
  var name = "html/" + param + ".html"

  if (name == "html/undefined.html") {
    name = "html/dashboard.html"
    param = "dashboard"
  }

  return HtmlService.createTemplateFromFile(name)
    .evaluate()
    .setTitle(param.charAt(0).toUpperCase() + param.slice(1));

}

function doGetTest() {

    return HtmlService.createTemplateFromFile("html/contracts.html")
    .evaluate()
}

function Main() {
  return FLIB.getUser()
}