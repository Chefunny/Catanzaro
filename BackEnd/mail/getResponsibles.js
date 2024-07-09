function getResponsibles(area_code) {

  var data = SpreadsheetApp.openById("1Z41WrdfPq4bEQG6SFsz3KvBM9fUQEPvfGtw4_uwTp-M").getSheetByName("People").getDataRange().getValues()

  var responsibles = new Array()
  var column_index = data[0].indexOf(area_code)
  
  data.forEach(function(value) {
    if (value[column_index] > 1) {
      responsibles.push(value[1])
    }
  })

  return responsibles
}