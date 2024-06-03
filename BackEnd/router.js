function doPost(e) {

  var full_route = e.parameters.route.toString()
  var section = full_route.split("/")[0]

  if (section == "todo") {
    out_params = RouterTODO(e)
  } else {
    out_params = 502;
  }

  return ContentService.createTextOutput(out_params).setMimeType(ContentService.MimeType.JSON)
}
