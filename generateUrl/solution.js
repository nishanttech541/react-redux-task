
function generateUrl(params) {
    let baseUrl = "http://testurl.bitfinx.com/?";
  const [newUrl] = Object.entries(params).sort().map(([key, value]) =>{
      if(value!== undefined && value !== null )
      return baseUrl += `${key}=${value}&`
  }
  ).slice(-1)
    return newUrl.slice(0, -1);
  }
  
  const params = {
    width: 360,
    height: 90,
    locale: "en",
    toolbar_bg: "",
    interval: "3h",
    pair: "BTC_USD",
  };
  
  const res = generateUrl(params);
  
  console.log(res);
  