function modifyContract(formData) {
  
  const contractType = formData['contractType']

  const range = SpreadsheetApp.openById("1oCdKUozjunj-E31A1KgW212-iU0WOtS5Ly6Ip6bngoM").getSheetByName("Contracts").getRange("A5")
  range.setValue(formData)
}
