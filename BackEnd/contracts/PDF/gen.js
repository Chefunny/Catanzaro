function generatePDFPO(contractNumber, version) {

  const allVersions = getAllVersions(contractNumber).data
  const contract = allVersions.find(contract => contract.Version == version)

  if (!contract) {
    return {
      "data": `Error: Contract ${contractNumber} and version ${version} not found`,
      "statusCode": 404
    }
  }

  if (validateContract(contract, "PO")) {

    const filename = `PO N°${contract.contractNumber}-V${contract.Version}`
    const prev_url = checkFileExistsInFolder(filename, "PO")

    if (prev_url) {
      return {
        'data': prev_url,
        "statusCode": 200
      }
    }

    fillSheetPO(contract)
    const url = GenerateBLOB(contract, "PO")

    return {
      'data': url,
      "statusCode": 200
    }
    
  } else {
    return {
      "data": "Invalid PO information, please contact the administrator",
      "statusCode": 505
    }
  }
}

function generatePDFPI(contractNumber, version) {

  const allVersions = getAllVersions(contractNumber).data
  const contract = allVersions.find(contract => contract.Version == version)

  if (!contract) {
    return {
      "data": `Error: Contract ${contractNumber} and version ${version} not found`,
      "statusCode": 404
    }
  }

  if (validatePI(contract)) {

    const filename = `PI N°${contract.contractNumber}-V${contract.Version}`
    const prev_url = checkFileExistsInFolder(filename, "PI")

    if (prev_url) {
      return {
        'data': prev_url,
        "statusCode": 200
      }
    }

    fillSheetPI(contract)
    const url = GenerateBLOB(contract, "PI")

    return {
      'data': url,
      "statusCode": 200
    }

  } else {
    return {
      "data": "Invalid PI information, please contact the administrator",
      "statusCode": 505
    }
  }
}

function pdfRequestManager(formData) {
  if (formData.type == "PO") {
    return generatePDFPO(formData.contractNumber, formData.Version)
  } else if (formData.type == "PI") {
    return generatePDFPI(formData.contractNumber, formData.Version)
  }
}

function testFillPO() {

  const contractNumber = "12345"
  response = generatePDFPO(contractNumber, 2)
  console.log(response)
}