function CreateContractHandler(form) {

  const { valid_po, errors_po } = FLIB.validateFormDataPO(form);
  const { valid_pi, errors_pi } = FLIB.validateFormDataPI(form);

  if (valid_po || valid_pi) {
    FLIB.ModifyContract(form)
  }

  return { valid_po, valid_pi, errors_po, errors_pi };
}


function TestHandler() {

  const form = {
    "seller-po": "Empresas Lourdes SA",
    "seller-pi": "EXPORTACIONES CATANZARO SPA",
    "client": "AGRANA FRUIT SERVICES GMBH",
    "agent-buyer": "EXPORTACIONES CATANZARO SPA",
    "quantity1": "10",
    "product1": "Prune puree concentrate brix 30-32",
    "packaging1": "Drum",
    "quantity2": "",
    "product2": "None",
    "quantity3": "",
    "product3": "None",
    "quantity4": "",
    "product4": "None",
    "quantity5": "",
    "product5": "None",
    "commission-type": "CIF",
    "unit-price-po1": "5",
    "unit-price-pi1": "",
    "commission1": "2",
    "total-po1": "50.00",
    "total-pi1": "0.00",
    "total-weight": "10.00",
    "grand-total-po": "50.00",
    "grand-total-pi": "0.00",
    "pol": "Coronel, Chile",
    "pod": "Kotka, Finland",
    "quality-requirement": "Specification according to comment",
    "delivery-terms-po": "CFR",
    "delivery-terms-pi": "CFR",
    "prepayment-po": "30",
    "cad-po": "30",
    "credit-po": "40",
    "credit-days-po": "90",
    "credit-days-type-po": "departure",
    "prepayment-pi": "",
    "cad-pi": "",
    "credit-pi": "",
    "credit-days-pi": "",
    "credit-days-type-pi": "departure",
    "shipment-from": "2024-06-14",
    "shipment-to": "2024-06-29",
    "comments-po": "",
    "comments-pi": "",
    "contract-include-producer": "include",
    "producer-pi-number": "",
    "client-pi-number": "",
    "weight-unit": "KG",
    "currency-po": "USD",
    "currency-pi": "USD"
}
  CreateContractHandler(form)
}