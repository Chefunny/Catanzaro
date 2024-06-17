function RequestNew(options) {

  var response = UrlFetchApp.fetch(`https://script.google.com/macros/s/AKfycbxwmrI_w1gnmbrMGWkxzmHVhp4FE5BaiSahf6TVuYMHPOzzaPgGXRxtmsRfcfAK_IzYTw/exec`, options)

  return StatusHandler(response)

}

