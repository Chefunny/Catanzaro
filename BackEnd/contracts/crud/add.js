function addContract(formData) {
  const spreadsheetId = SpreadsheetIDContracts();
  const sheetName = "Contracts";

  // Function to get the highest version number for a given contract number
  function getHighestVersion(contractNumber) {

    const contracts = getAllVersions(contractNumber).data;
    const versions = contracts.map(contract => contract.Version);
    return Math.max(...versions);
    
  }

  if (!formData.contractNumber) {

    // ADD CONTRACT NUMBER HERE

    contractNumber = null

    formData.Version = 1;
    createAny(spreadsheetId, sheetName, formData);

    return {
      data: {
          contractNumber: formData.contractNumber,
          Version: formData.Version
        },
      statusCode: 200
    };

  } else {

    const existance = getAny(spreadsheetId, sheetName, formData.contractNumber);
    if (!existance) {
      return {
        data: "error: invalid contractNumber",
        statusCode: 400
      };
    } else {
      formData.Version = getHighestVersion(formData.contractNumber) + 1
      createAny(spreadsheetId, sheetName, formData);
      return {
        data: {
          contractNumber: formData.contractNumber,
          Version: formData.Version
        },
        statusCode: 200
      };
    }
  }
}