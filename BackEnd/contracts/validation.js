function validateContract(contractData, type) {
  if (type == "PO") {
    return validatePO(contractData)
  } else if (type == "PI") {
    return validatePI(contractData)
  }
}

function validatePO(contractData) {
  return true
}

function validatePI(contractData) {
  return true
}