function parseGetLatest(user) {

  const response = getLatestContracts()

  if (response.statusCode == 200) {

    var userTypes = []

    if (user.jc > 0) userTypes.push('jc');
    if (user.fs > 0) userTypes.push('fs');
    if (user.ff > 0) userTypes.push('ff');
    if (user.test > 0) userTypes.push('test');

    var accessibleContracts = response.data.filter(contract => userTypes.includes(contract.contractType));

    return {
      "data": accessibleContracts,
      "statusCode": 200
    }
    
  }

  return response
}