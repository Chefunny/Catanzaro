function getAny(worksheetId, sheetName, ID) {
  try {
    const sheet = SpreadsheetApp.openById(worksheetId).getSheetByName(sheetName);
    const values = sheet.getDataRange().getValues();

    // Extract headers from the first row
    const headers = values.shift();

    // Loop through remaining rows (data)
    for (let i = 0; i < values.length; i++) {
      const row = values[i];
      const id = row[0]; // Assuming ID is in the first column (index 0)

      // Check if ID matches the search ID
      if (id == ID) {
        // Create an object for the matching row
        const jsonObj = {};
        for (let j = 0; j < headers.length; j++) {
          jsonObj[headers[j]] = row[j];
        }
        
        // Return the JSON object for the matching ID
        return jsonObj;
      }
    }
    console.log(`getAny not found ${ID}`);
    return false;
  } catch (error) {
    console.error("Error retrieving record: " + error);
    return false;
  }
}

function getAllEntries(worksheetId, sheetName) {
  try {
    const sheet = SpreadsheetApp.openById(worksheetId).getSheetByName(sheetName);
    const values = sheet.getDataRange().getValues();

    // Extract headers from the first row
    const headers = values.shift();

    // Array to hold all entries
    const entries = [];

    // Loop through remaining rows (data)
    for (let i = 0; i < values.length; i++) {
      const row = values[i];
      const jsonObj = {};
      
      for (let j = 0; j < headers.length; j++) {
        jsonObj[headers[j]] = row[j];
      }

      // Add the object to the entries array
      entries.push(jsonObj);
    }

    // Return the array of all entries
    return entries;
  } catch (error) {
    console.error("Error retrieving records: " + error);
    return false;
  }
}



function TestGet() {

  const result = getAllEntries("1oCdKUozjunj-E31A1KgW212-iU0WOtS5Ly6Ip6bngoM", "Contracts")
  console.log(result)

}