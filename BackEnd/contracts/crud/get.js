function getContract(contractNumber) {

  const allVersions = getAllVersions(contractNumber).data;
  const lastVersion = allVersions[allVersions.length - 1];

  const response = {
      data: lastVersion,
      statusCode: 200
  };

  return response;
}

function getAllContracts() {

  const contracts = getAllEntries(SpreadsheetIDContracts(), "Contracts")

  const response = {
    'data': contracts,
    'statusCode' : 200
  }

  return response
  
}

function getAllVersions(contractNumber) {

  const contracts = getAllContracts()['data']
  const filteredContracts = contracts.filter(contract => contract.contractNumber == contractNumber);

  const response = {
    'data': filteredContracts,
    'statusCode' : 200
  }

  return response

}

function getLatestContracts() {
  
  const spreadsheetId = SpreadsheetIDContracts();
  const sheetName = "Contracts";

  const contracts = getAllEntries(spreadsheetId, sheetName);

  // Group contracts by contractNumber and find the latest version for each
  const latestContracts = contracts.reduce((acc, contract) => {
    const contractNumber = contract.contractNumber;

    if (!acc[contractNumber] || acc[contractNumber].Version < contract.Version) {
      acc[contractNumber] = contract;
    }

    return acc;
  }, {});

  const response = {
    data: Object.values(latestContracts),
    statusCode: 200
  };

  return response;
}

function GETTEST() {
  console.log(getLatestContracts())
  
}
