function createAny(worksheetId, sheetName, JSONData) {

  const sheet = SpreadsheetApp.openById(worksheetId).getSheetByName(sheetName);

  // Get the header row to determine the column indices
  const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  // Initialize an array to store values
  const valuesToAppend = [];

  headerRow.forEach(columnHeader => {
    const jsonValue = JSONData[columnHeader];

    // Add the value from JSONData for the corresponding header, or null if not found
    valuesToAppend.push(jsonValue !== undefined ? jsonValue : null);
  });

  // Append a new row with the specified data
  sheet.appendRow(valuesToAppend);
  console.log("Created");
}