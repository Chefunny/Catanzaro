function SpreadsheetIDContracts() {
  return "1XuJC9taq2f6xJITFKS4X18fNLcgi0um0QBTcM_FeMlw"
}

function SpreadsheetIDPending() {
  return "1oCdKUozjunj-E31A1KgW212-iU0WOtS5Ly6Ip6bngoM"
}

function SpreadsheetIDPDFGen() {
  return "1l6vRcOJpvu3M-UNSVikoWD5YMTj5dLYbL1KNMR6UPyk"
}

/////////////////////// AREA DEPENDANT ////////////////////////

function getDataId(area) {

    var ids = {
  
      "js": "1MnzPcf82zFqFIDrGvaz4sd2DLuw5ECse0mNdqn-e06Q",
      "jc": "11rjGYQpqBkpbl-JfPPKCrs4hEfqj8jNJ8kM9EchdQ7c",
      "test": "11rjGYQpqBkpbl-JfPPKCrs4hEfqj8jNJ8kM9EchdQ7c"
  
    }
  
    if (!ids[area]) {
      return "Error"
    } else {
      return ids[area]
    }
}