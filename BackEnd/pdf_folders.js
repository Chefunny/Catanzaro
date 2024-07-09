function getPDFFolderPO() {
  return "1VRzMqQxdE1laspsawICFmDyxZtwJ3hsx"
}

function getPDFFolderPI() {
  return "10SUJPoLhOT5_JuULXWYGeNV6z-04h16p"
}

function checkFileExistsInFolder(fileName, type) {

  var folderId;

  if (type == "PO") {
    folderId = getPDFFolderPO()
  } else if (type == "PI") {
    folderId = getPDFFolderPI()
  }

  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByName(fileName);

  if (files.hasNext()) {
      var file = files.next();
      return file.getUrl(); // Return the URL of the file
    } else {
      return null; // File does not exist
    }
}