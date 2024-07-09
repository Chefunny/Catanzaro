function RouterContracts(requestData) {

  const route = requestData['route']

  if (route == "contracts/modify") {
    return modifyContract(requestData);
  } else if (route == "contracts/get_all_pending") {
    return GetPending(requestData)
  } else if (route == "contracts/get_all") {
    return getAllContracts()
  } else if (route == "contracts/get_latest") {
    return parseGetLatest(requestData.user)
  } else if (route == "contracts/accept") {
    return AcceptAuth(requestData)
  } else if (route == "contracts/reject") {
    return RejectAuth(requestData)
  } else if (route == "contracts/pdf") {
    return pdfRequestManager(requestData)
  } else if (route == "contracts/gethistory") {
    return getAllVersions(requestData.contractNumber)
  }
  
  else {
    null
  }
}
