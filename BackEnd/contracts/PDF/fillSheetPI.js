function fillSheetPI(contractData) {

  const spreadSheet = SpreadsheetApp.openById(SpreadsheetIDPDFGen())
  const sheet = spreadSheet.getSheetByName("PI")

  var product_data = [];
  var multiplier = contractData['weight-unit'] === "MT" ? 1000 : 1;

  // Collect product data
  for (let i = 1; i <= 5; i++) {
    const product = {
      name: contractData[`product${i}`],
      quantity: contractData[`quantity${i}`],
      packaging: contractData[`packaging${i}`],
      unit_price_po: contractData[`unit-price-pi${i}`],
    };

    if (product.name && product.quantity) {
      product_data.push([
        product.quantity / multiplier, 
        product.name, 
        "", // Placeholder for the empty column
        "", // Placeholder for the empty column
        product.packaging, 
        "", // Placeholder for the empty column
        product.unit_price_po * multiplier, 
      ]);
    }
  }

  // Clear content and validations for specified ranges
  sheet.getRange("A18:G22").clearContent().clearDataValidations();
  sheet.getRange("E32:F32").clearContent()

  // Grouped updates to minimize API calls
  const rangesAndValues = [
    { range: "D3:D4", values: [[`PI N°${contractData.contractNumber}`], [`ORDER DATE: ${getCreationDate(contractData.creationDate)}`]] },
    { range: "B7", values: [[contractData['seller-pi']]] },
    { range: "G14", values: [[contractData.client]] },
    { range: "B35", values: [[contractData["comments-pi"]]] },
    { range: "K4:K6", values: [[contractData['currency-pi']], [contractData['weight-unit']], [contractData['commission-type']]] },
    { range: `A18:G${17 + product_data.length}`, values: product_data },
    { range: "C25:C29", values: [
      [contractData['delivery-terms-pi']],
      [contractData.pol],
      [contractData.pod],
      [`From ${getMonthYear(contractData['shipment-from'].toString())} till ${getMonthYear(contractData['shipment-to'].toString())}`], // dates
      [parsePaymentConditions(contractData, "PI")],
    ]}
  ];

  sheet.getRange("F13:G13").clearContent()

  if (contractData["contract-include-producer"] == "include") {
    rangesAndValues.push({
      range: "F13:G13", values: [["PRODUCER", contractData["seller-po"]]]
    })
  }

  // Set all ranges and values
  rangesAndValues.forEach(function(entry) {
    sheet.getRange(entry.range).setValues(entry.values);
  });

  sheet.getRange("B8:B9")
    .setValues(AddressFinder("Buyer", contractData["seller-pi"], contractData["contractType"]))
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)

  sheet.getRange("G8:G9")
    .setValues(AddressFinder("Client", contractData["client"], contractData["contractType"]))
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)

  sheet.getRange("G9").clearContent()

  sheet.getRange("A1:I40")
    .setFontFamily("Arial")
    .setFontSize(8)

  sheet.getRange("D3:E3")
    .setFontSize(10)

}