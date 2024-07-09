function modifyContract(formData) {
  const existence = updateAny(SpreadsheetIDPending(), "Contracts", formData, formData['sessionId'])

  if (!existence) {
    createAny(SpreadsheetIDPending(), "Contracts", formData)
  }

  return existence

}