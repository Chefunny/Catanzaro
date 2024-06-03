function getUser(extended = false) {
  if (extended) {
    null
  } else {
    return Session.getActiveUser().getEmail()
  }
}