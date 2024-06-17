function validateFormDataPO(formData) {
  let errors = [];
  errors = checkExistencePO(formData, errors);

  // Ensure credit, cad, and prepayment sum to 100
  const paymentSum = Number(formData['prepayment-po']) + Number(formData['cad-po']) + Number(formData['credit-po']);
  if (paymentSum !== 100) {
    errors.push('Prepayment, CAD, and Credit percentages (PO) must sum to 100.');
  }

  // Ensure 'shipment-from' is before 'shipment-to'
  const shipmentFromDate = new Date(formData['shipment-from']);
  const shipmentToDate = new Date(formData['shipment-to']);
  if (shipmentFromDate >= shipmentToDate) {
    errors.push('Shipment "from" date must be before "to" date.');
  }

  // Ensure at least one product is filled out correctly
  let hasValidProduct = false;
  for (let i = 1; i <= 5; i++) {
    const quantity = formData[`quantity${i}`];
    const product = formData[`product${i}`];
    const packaging = formData[`packaging${i}`];
    const unitPrice = formData[`unit-price-po${i}`];
    const commission = formData[`commission${i}`];

    if (product !== 'None') {
      if (!quantity || !packaging || !unitPrice || !commission) {
        errors.push(`All fields for Product ${i} (PO) must be filled out.`);
      } else {
        hasValidProduct = true;
      }
    }
  }
  if (!hasValidProduct) {
    errors.push('At least one product (PO) must be filled out completely.');
  }

  const valid = errors.length === 0;
  return { valid_po: valid, errors_po: errors};
}

function validateFormDataPI(formData) {
  let errors = [];
  errors = checkExistencePI(formData, errors);

  // Ensure credit, cad, and prepayment sum to 100
  const paymentSum = Number(formData['prepayment-pi']) + Number(formData['cad-pi']) + Number(formData['credit-pi']);
  if (paymentSum !== 100) {
    errors.push('Prepayment, CAD, and Credit percentages (PI) must sum to 100.');
  }

  // Ensure 'shipment-from' is before 'shipment-to'
  const shipmentFromDate = new Date(formData['shipment-from']);
  const shipmentToDate = new Date(formData['shipment-to']);
  if (shipmentFromDate >= shipmentToDate) {
    errors.push('Shipment "from" date must be before "to" date.');
  }

  // Ensure at least one product is filled out correctly
  let hasValidProduct = false;
  for (let i = 1; i <= 5; i++) {
    const quantity = formData[`quantity${i}`];
    const product = formData[`product${i}`];
    const packaging = formData[`packaging${i}`];
    const unitPrice = formData[`unit-price-pi${i}`];
    const commission = formData[`commission${i}`];

    if (product !== 'None') {
      if (!quantity || !packaging || !unitPrice || !commission) {
        errors.push(`All fields for Product ${i} (PI) must be filled out.`);
      } else {
        hasValidProduct = true;
      }
    }
  }
  if (!hasValidProduct) {
    errors.push('At least one product (PI) must be filled out completely.');
  }

  const valid = errors.length === 0;
    return { valid_pi: valid, errors_pi: errors};
}

function checkExistencePO(formData, errors) {
  const requiredFields = [
    'seller-po', 'currency-po',
    'agent-buyer',
    'client', 'commission-type', 'delivery-terms-po',
    'pol', 'pod', 'quality-requirement',
    'shipment-from', 'shipment-to'
  ];

  // Check the required fields
  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors.push(`The field ${field} (PO) is required.`);
    }
  });

  // Check if 'credit-po' exists, then 'credit-days-po' and 'credit-days-type-po' must also exist
  if (formData['credit-po']) {
    if (!formData['credit-days-po']) {
      errors.push('The field credit-days-po is required when credit-po is provided.');
    }
    if (!formData['credit-days-type-po']) {
      errors.push('The field credit-days-type-po is required when credit-po is provided.');
    }
  }

  // Check that at least one of 'prepayment-po', 'cad-po', or 'credit-po' exists
  if (!formData['prepayment-po'] && !formData['cad-po'] && !formData['credit-po']) {
    errors.push('At least one of prepayment-po, CAD-po, or credit-po must be provided.');
  }

  return errors;
}

function checkExistencePI(formData, errors) {
  const requiredFields = [
    'seller-pi', 'seller-po', 'currency-pi',
    'agent-buyer',
    'client', 'commission-type', 'delivery-terms-pi',
    'pol', 'pod', 'quality-requirement',
    'shipment-from', 'shipment-to'
  ];

  // Check the required fields
  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors.push(`The field ${field} (PI) is required.`);
    }
  });

  // Check if 'credit-pi' exists, then 'credit-days-pi' and 'credit-days-type-pi' must also exist
  if (formData['credit-pi']) {
    if (!formData['credit-days-pi']) {
      errors.push('The field credit-days-pi is required when credit-pi is provided.');
    }
    if (!formData['credit-days-type-pi']) {
      errors.push('The field credit-days-type-pi is required when credit-pi is provided.');
    }
  }

  // Check that at least one of 'prepayment-pi', 'cad-pi', or 'credit-pi' exists
  if (!formData['prepayment-pi'] && !formData['cad-pi'] && !formData['credit-pi']) {
    errors.push('At least one of prepayment-pi, CAD-pi, or credit-pi must be provided.');
  }

  return errors;
}