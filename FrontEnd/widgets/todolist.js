function getTodoList() {

  const user = getUser()

  const options = {
    "method": "POST",
    "payload": {
      "route": "todo/get",
      "user": user
    }
  }
  const list = RequestNew(options)
  return list
}

function addToList(todo_element) {

  const user = getUser()

  const options = {
    "method": "POST",
    "payload": {
      "route": "todo/get",
      "user": user,
      "todo": todo_element
    }
  }
  const list = RequestNew(options)
  return list
}

function removeFromList(todo_element_id) {

  const user = getUser()

  const options = {
    "method": "POST",
    "payload": {
      "route": "todo/get",
      "user": user,
      "element_id": todo_element_id
    }
  }
  RequestNew(options)
}
