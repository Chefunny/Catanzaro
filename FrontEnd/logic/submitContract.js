function CreateContractHandler(form) {

  const todayDate = Utilities.formatDate(new Date, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const requester = getUser()['name']

  form["requestDate"] = todayDate;
  form['requester'] = requester

  const { valid_po, errors_po } = FLIB.validateFormDataPO(form);
  const { valid_pi, errors_pi } = FLIB.validateFormDataPI(form);

  if (valid_po || valid_pi) {
    FLIB.ModifyContract(form)
    console.log("submitting contract")
  }

  return { valid_po, valid_pi, errors_po, errors_pi };
}

function AuthorizeContractHandler(form) {

  const todayDate = Utilities.formatDate(new Date, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  const authorizer = getUser()['name']

  form["requestDate"] = todayDate;
  form['authorizer'] = authorizer

  const { valid_po, errors_po } = FLIB.validateFormDataPO(form);
  const { valid_pi, errors_pi } = FLIB.validateFormDataPI(form);

  form["poValid"] = false
  form["piValid"] = false

  if (valid_po) {
    form["poValid"] = true
  } 

  if (valid_pi) {
    form["piValid"] = true
  }

  if (valid_po || valid_pi) {
    FLIB.approveAuth(form)
    console.log("authorizing contract")
  }

  return { valid_po, valid_pi, errors_po, errors_pi };

}


// CHANGE THE ERROR LOGIC, THE VALIDATION SHOULD BE RETURNED ONLY IF THE CONTRACT IS INVALID
// MAKE THE USER GET INFO BASED ON THE ACTUAL BACKEND API REQUEST