function generateUrl(params) {
    let baseUrl = "http://testurl.bitfinx.com/?";
  newUrl = Object.entries(params).map(([key, value]) => baseUrl += `${key}=${value}&`).slice(-1)?.[0]
  
    return newUrl.slice(0, -1);
  }
  
  const params = {
    width: 360,
    height: 300,
    locale: "en",
    toolbar_bg: "",
    interval: "3h",
    pair: "BTC_USD",
  };
  
  const res = generateUrl(params);
  
  console.log(res);