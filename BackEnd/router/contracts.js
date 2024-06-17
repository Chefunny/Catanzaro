function RouterContracts(requestData) {

  const route = requestData['route']

  if (route == "contracts/modify") {
    return modifyContract(requestData);
  } else {

  }
}
