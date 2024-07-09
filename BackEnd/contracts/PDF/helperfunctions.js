function getCreationDate(fullDateString) {

  const date = new Date(fullDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${day}-${month}-${year}`;
}

function getMonthYear(dateString) {

  const date = new Date(dateString);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

function parsePaymentConditions(contractData, type) {
  var payment = "";
  var first = true;

  var prepaymentKey = `prepayment-${type.toLowerCase()}`;
  var cadKey = `cad-${type.toLowerCase()}`;
  var creditKey = `credit-${type.toLowerCase()}`;
  var daysCreditKey = `credit-days-${type.toLowerCase()}`;
  var creditTypeKey = `credit-days-type-${type.toLowerCase()}`;

  if (contractData[prepaymentKey] > 0) {
    payment = payment.concat(`${contractData[prepaymentKey]}% Prepayment`);
    first = false;
  }

  if (contractData[cadKey] > 0) {
    if (first) {
      payment = payment.concat(`${contractData[cadKey]}% CAD`);
      first = false;
    } else {
      payment = payment.concat(`, ${contractData[cadKey]}% CAD`);
    }
  }

  if (contractData[creditKey] > 0) {
    if (first) {
      payment = payment.concat(`${contractData[creditKey]}% Credit, ${contractData[daysCreditKey]} ${contractData[creditTypeKey]}`);
      first = false;
    } else {
      payment = payment.concat(`, ${contractData[creditKey]}% Credit, ${contractData[daysCreditKey]} days after ${contractData[creditTypeKey].toLowerCase()}`);
    }
  }

  return payment;
}

function AddressFinder(agent_type, Name, area) {

  const code = getDataId(area)

  if (code == "Error") {return [["ERROR"],["Error"]]}

  const data_from = SpreadsheetApp.openById(code)

  if (agent_type == "Seller") {

    var data = data_from.getSheetByName("Sellers").getDataRange().getValues()

    for (i = 1; i < data.length; i++){
      if (data[i][1] == Name) {
        return [[data[i][2]],[data[i][3]]]
      }
    }
  } else if (agent_type == 'Buyer') {

    var data = data_from.getSheetByName("Buyers").getDataRange().getValues()

    for (i = 1; i < data.length; i++){
      if (data[i][0] == Name) {
        return [[data[i][1]],[data[i][2]]]
      }
    }
  } else if (agent_type == "Client") {

    var data = data_from.getSheetByName("Clients").getDataRange().getValues()

    for (i = 1; i < data.length; i++){
      if (data[i][0] == Name) {
        return [[data[i][1]],[data[i][2]]]
      }
    }
  }

  return [["ERROR"],["Error"]]
}
