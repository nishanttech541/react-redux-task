var volumeSetup = function () {
    // Setup volume unit interface
    setupVolumeUnitInterface();
  
    // Override currencies list
    var result = window.APP.util.initCurrenciesList();
  
    return result;
  };
  
  
  function setupVolumeUnitInterface() {
    var volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    const element = getElementByVolumeUnit(volumeUnit);
  
    if (element) {
      element.prop('checked', true);
    }
  }
  
  function getElementByVolumeUnit(volumeUnit) {
    const elementSelectors = {
      FIRSTCCY: '#tickervolccy_0',
      USD: '#tickervolccy_USD',
      BTC: '#tickervolccy_BTC',
      ETH: '#tickervolccy_ETH',
    };
  
    return $(elementSelectors[volumeUnit]);
  }
  
  console.log(volumeSetup());