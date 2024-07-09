
function getUser() {

  const email = Session.getActiveUser().getEmail()

  const data = SpreadsheetApp.openById("1Z41WrdfPq4bEQG6SFsz3KvBM9fUQEPvfGtw4_uwTp-M").getSheetByName("People").getDataRange().getValues()
  let UserJSON;

  data.forEach(function(value) {
    if (value[1] == email) {
      UserJSON = {
        "email" : email,
        "name": value[0],
        'jc' : value[2],
        'fs': value[3],
        'ff': value[4],
        'test': value[5]
      }
    }
  })

  return UserJSON
}

function GETUSERTEST() {
  console.log(getUser())
}