function getContractAuthorizationData() {

  const formData = {"area": ""}
  const results = GetPendingContracts(formData)['data']

  return results

}