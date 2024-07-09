function getContractCreationData() {
  return FLIB.getContractCreationData()
}

function getContractData() {

  const user = FLIB.getUser()
  const formData = {
    "user": user
  }

  return FLIB.getContractData(formData)
}

function getPDF(contractNumber, type, Version) {
  
  const formData = {
    "contractNumber": contractNumber,
    "type": type,
    "Version": Version
  }

  const response = FLIB.generatePDF(formData)
  
  if (response.statusCode != 200) {
    return null
  } else {
    return response.data
  }
}