// var favorites = [];
// var

$("#search").click(function (event) {
  var select = document.getElementById("search-bar");
  var value = select.options[select.selectedIndex].textContent;
  var searchInput = value;
  //console.log($("input").val());
  event.preventDefault();

  getGecko(searchInput);
});

var geckoEl = document.querySelector("#api-container");

function getGecko(searchInput) {
  var requestUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    searchInput +
    "&vs_currencies=USD&include_last_updated_at=true";
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var price = data[searchInput].usd;
      var unix = data[searchInput].last_updated_at;

      var date = new Date(unix * 1000);
      var dateObject = "Date: " + date.toLocaleString().split(",")[0];
      var dateLi = document.createElement("li");
      dateLi.append(dateObject);
      geckoEl.append(dateLi);

      var priceLi = document.createElement("li");
      var priceObject = "Price: " + price + " USD";
      priceLi.append(priceObject);
      //priceLi.setAttribute("class", "list-group-item");
      geckoEl.append(priceLi);
    });
}
