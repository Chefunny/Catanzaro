function updateAny(worksheetId, sheetName, newJSON, ID) {
  try {
    const sheet = SpreadsheetApp.openById(worksheetId).getSheetByName(sheetName);
    const columnIndex = 0; // Assuming index is in the first column
    const range = sheet.getRange(2, columnIndex + 1, sheet.getLastRow() - 1, 1);
    const values = range.getValues();

    for (let i = 0; i < values.length; i++) {
      if (values[i][0] == ID) {
        const rowToUpdate = i + 2;
        const existingData = getAny(worksheetId, sheetName, ID);

        Object.keys(newJSON).forEach((key) => {
          if (existingData.hasOwnProperty(key) && newJSON[key] != null) {
            existingData[key] = newJSON[key];
          }
        });

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const updatedRow = headers.map(header => existingData[header] || '');

        sheet.getRange(rowToUpdate, 1, 1, sheet.getLastColumn()).setValues([updatedRow]);
        return true;
      }
    }

    console.log("Record not found for ID: " + ID);
    return false;
  } catch (error) {
    console.error("Error updating record: " + error);
    return false;
  }
}
