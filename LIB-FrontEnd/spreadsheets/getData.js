function getContractCreationData() {

  const sheet = SpreadsheetApp.openById("1i6SQQLMH9hbf1aNcFtTeUAaROCcZzeFFKD0l99anICM")

  const fs_sheet = sheet.getSheetByName("F&SF Data")
  const jc_sheet = sheet.getSheetByName("JC Data")

  var data = {
    'jc' : parseDataToJson(jc_sheet.getRange("A:P").getValues()),
    'fs': parseDataToJson(fs_sheet.getRange("A:P").getValues())
  }

  const prettyJson = JSON.stringify(data['fs'], null, 2); // 2 is the number of spaces for indentation
  console.log(prettyJson);
  return data
}

function parseDataToJson(data) {
  var jsonObject = {};
  var headers = data[0];

  headers.forEach((header, index) => {
    if (header === 'Products') {
      jsonObject[header] = data.slice(1).filter(row => row[index]).map((row, rowIndex) => {
        return {
          name: row[index],
          latinName: row[data[0].indexOf('Latin Name')],
          packages: [
            row[data[0].indexOf('Package 1')],
            row[data[0].indexOf('Package 2')],
            row[data[0].indexOf('Package 3')],
            row[data[0].indexOf('Package 4')],
            row[data[0].indexOf('Package 5')]
          ].filter(pkg => pkg)
        };
      }).filter(product => product.name);
    } else if (!['Latin Name', 'Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5'].includes(header)) {
      jsonObject[header] = data.slice(1).map(row => row[index]).filter(value => value);
    }
  });

  return jsonObject;
}




