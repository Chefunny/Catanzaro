function getTodoList(user) {
  
  const sheet = SpreadsheetApp.openById("1ddy55oSWan31sGcC-5yCn8L9knCJ2DKquZxTGan8iOY").getSheetByName("Todo")
  const data = sheet.getRange("A2:C").getValues()

  var to_return = new Array()
  for (var i = 0; i < data.length; i++) {
    if(data[i][0] == "") {
      break;
    } else if (data[i][1] == user) {
      to_return.push([data[i][0], data[i][2]])
    }
  }

  return to_return
}

function addTodoListElement(user, element) {

  const sheet = SpreadsheetApp.openById("1ddy55oSWan31sGcC-5yCn8L9knCJ2DKquZxTGan8iOY").getSheetByName("Todo")
  const id = 5
}

function TestgetTodoList(){
  const user = "cfazio@catanzaro.cl"
  getTodoList(user)
}
