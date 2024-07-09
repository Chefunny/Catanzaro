function getContractAuthorizationData() {
  return FLIB.getContractAuthorizationData()
}

function ApproveContractAuth(contractData) {
  return FLIB.approveAuth(contractData)
}

function RejectContractAuth(contractData) {
  return FLIB.rejectAuth(contractData)
}
