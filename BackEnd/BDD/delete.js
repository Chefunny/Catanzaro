function deleteAny(worksheetId, sheetName, ID) {
  try {
    const sheet = SpreadsheetApp.openById(worksheetId).getSheetByName(sheetName);
    const values = sheet.getDataRange().getValues();

    // Loop through the rows (data)
    for (let i = 1; i < values.length; i++) { // Start from 1 to skip the header row
      const row = values[i];
      const id = row[0]; // Assuming ID is in the first column (index 0)

      // Check if ID matches the search ID
      if (id == ID) {
        sheet.deleteRow(i + 1); // +1 because sheet rows are 1-indexed
        return {
          'data': `Row with ID ${ID} deleted successfully.`,
          'statusCode': 200
        };
      }
    }
    console.log(`deleteAny not found ${ID}`);
    return {
      'data': `Error: Row with ID ${ID} not found.`,
      'statusCode': 404
    };
  } catch (error) {
    console.error("Error deleting record: " + error);
    return {
      'data': `Error deleting record: ${error.message}`,
      'statusCode': 500
    };
  }
}
