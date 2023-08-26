chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.windows.getCurrent({ populate: true }, function (currentWindow) {
    var currentTab = currentWindow.tabs.find(function (tab) {
      return tab.active === true;
    });
    var url = currentTab.url;

    chrome.tabs.executeScript(currentTab.id, {
      code: `
        var body = document.querySelector('body');
        var pdfExport = document.createElement('div');
        pdfExport.innerHTML = '<button id="pdfExportButton" style="position: fixed; top: 0; right: 0; z-index: 9999; padding: 1px; font-size: 16px; background-color: #4CAF50; color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">Export PDF</button>';
        body.appendChild(pdfExport);
        var pdfExportButton = document.querySelector('#pdfExportButton');
        pdfExportButton.addEventListener('click', function() {
          var pdfExportComponent = document.createElement('div');
          pdfExportComponent.innerHTML = '<pdf-export paperSize="A4" fileName="page.pdf" scale="2" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"><div style="max-width: 800px; padding: 40px; background-color: #fff; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">' + document.querySelector('html').innerHTML + '</div></pdf-export>';
          body.appendChild(pdfExportComponent);
          var pdfExport = document.querySelector('pdf-export');
          pdfExport.save();
          body.removeChild(pdfExportComponent);
        });
      `,
    });
  });
});

/*
browser.browserAction.onClicked.addListener(function (tab) {
  browser.tabs.executeScript(tab.id, {
    code: `
      var body = document.querySelector('body');
      var pdfExport = document.createElement('div');
      pdfExport.innerHTML = '<button id="pdfExportButton" style="position: fixed; top: 0; right: 0; z-index: 9999; padding: 10px; font-size: 16px; background-color: #4CAF50; color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">Export PDF</button>';
      body.appendChild(pdfExport);
      var pdfExportButton = document.querySelector('#pdfExportButton');
      pdfExportButton.addEventListener('click', function() {
        var pdfExportComponent = document.createElement('div');
        pdfExportComponent.innerHTML = '<pdf-export paperSize="A4" fileName="page.pdf" scale="2" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"><div style="max-width: 800px; padding: 40px; background-color: #fff; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">' + document.querySelector('html').innerHTML + '</div></pdf-export>';
        body.appendChild(pdfExportComponent);
        var pdfExport = document.querySelector('pdf-export');
        pdfExport.save();
        body.removeChild(pdfExportComponent);
      });
    `,
  });
});


*/
