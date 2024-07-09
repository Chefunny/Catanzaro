function fillSheetPO(contractData) {

  const spreadSheet = SpreadsheetApp.openById(SpreadsheetIDPDFGen())
  const sheet = spreadSheet.getSheetByName("PO")

  var product_data = [];
  var multiplier = contractData['weight-unit'] === "MT" ? 1000 : 1;

  // Collect product data
  for (let i = 1; i <= 5; i++) {
    const product = {
      name: contractData[`product${i}`],
      quantity: contractData[`quantity${i}`],
      packaging: contractData[`packaging${i}`],
      unit_price_po: contractData[`unit-price-po${i}`],
      commission: contractData[`commission${i}`] / 100, // to percent
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
        product.commission
      ]);
    }
  }

  // Clear content and validations for specified ranges
  sheet.getRange("A18:G22").clearContent().clearDataValidations();
  sheet.getRange("E32:F32").clearContent()

  // Grouped updates to minimize API calls
  const rangesAndValues = [
    { range: "D3:D4", values: [[`PO N°${contractData.contractNumber}`], [`ORDER DATE: ${getCreationDate(contractData.creationDate)}`]] },
    { range: "B7", values: [[contractData['seller-po']]] },
    { range: "G7", values: [[contractData['agent-buyer']]] },
    { range: "G14", values: [[contractData.client]] },
    { range: "B35", values: [[contractData["comments-po"]]] },
    { range: "K4:K6", values: [[contractData['currency-po']], [contractData['weight-unit']], [contractData['commission-type']]] },
    { range: `A18:H${17 + product_data.length}`, values: product_data },
    { range: "C25:C30", values: [
      [contractData['delivery-terms-po']],
      [contractData.pol],
      [contractData.pod],
      [`From ${getMonthYear(contractData['shipment-from'].toString())} till ${getMonthYear(contractData['shipment-to'].toString())}`], // dates
      [contractData["quality-requirement"]],
      [parsePaymentConditions(contractData, "PO")],
    ]}
  ];

  // Set all ranges and values
  rangesAndValues.forEach(function(entry) {
    sheet.getRange(entry.range).setValues(entry.values);
  });

  sheet.getRange("B8:B9")
    .setValues(AddressFinder("Seller", contractData["seller-po"], contractData["contractType"]))
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)

  sheet.getRange("G8:G9")
    .setValues(AddressFinder("Buyer", contractData["agent-buyer"], contractData["contractType"]))
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)

  sheet.getRange("A1:I40")
    .setFontFamily("Arial")
    .setFontSize(8)

  sheet.getRange("D3:E3")
    .setFontSize(10)

}