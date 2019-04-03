const getData = (url, data) => {
  const opts = {
    method: "GET"
  };
  const queryStr = data
    ? `?${Object.entries(data)
        .map(e => e.join("="))
        .join("&")}`
    : "";
  const fetchUrl = url + queryStr;
  return fetch(fetchUrl, opts).then(res => res.json());
};

window.onload = () => {
  const button = document.querySelector("#convert");
  const address = document.querySelector("#address");
  const result = document.querySelector("#result");
  button.addEventListener("click", async () => {
    const data = await getData("https://restapi.amap.com/v3/geocode/geo", {
      key: "26c5de63eb69ffaa1bb31496c621205e",
      address: address.value
    });
    const location = data.geocodes[0].location.split(",");
    result.textContent = `经度：${location[0]}，纬度：${location[1]}`;
  });
};
