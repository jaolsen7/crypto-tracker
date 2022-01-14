// var favorites = [];
// var

// Starts function on click of submit button
$("#search").click(function (event) {
  var select = document.getElementById("search-bar");
  var value = select.value;
  //var value = select.options[select.selectedIndex].textContent;
  var searchInput = value;
  //console.log($("input").val());
  event.preventDefault();

  getGecko(searchInput);
});

// Gecko Function that retrieves price and date last updated
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
      var cardEl = document.createElement("div");
      cardEl.classList.add(
        "w3-col",
        "m6",
        "l6",
        "w3-card-2",
        "w3-margin-top",
        "w3-margin-bottom"
      );

      var headerEl = document.createElement("header");
      headerEl.classList.add("w3-container", "w3-blue");
      var titleEl = document.createElement("h3");
      titleEl.textContent = searchInput;
      var starBtn = document.createElement("button");
      starBtn.textContent = "☆";
      starBtn.classList.add(
        "w3-button",
        "w3-circle",
        "w3-teal",
        "w3-right",
        "w3-margin-bottom"
      );
      titleEl.append(starBtn);
      headerEl.append(titleEl);
      cardEl.append(headerEl);

      var newsEl = document.createElement("div");
      newsEl.classList.add("w3-container");
      var articleEl = document.createElement("p");
      articleEl.textContent = "how do i get tyler's stuff from fetch?";
      //var linkEl = document.createElement("a");
      newsEl.append(articleEl);
      cardEl.append(newsEl);

      var price = data[searchInput].usd;

      var unix = data[searchInput].last_updated_at;
      var date = new Date(unix * 1000);

      var dateObject = "Last Updated: " + date.toLocaleString().split(",")[0];

      var footerEl = document.createElement("footer");
      footerEl.classList.add("w3-container", "w3-blue");
      var priceEl = document.createElement("h5");
      priceEl.textContent = "Price: " + price + " USD";
      var dateEl = document.createElement("h6");
      dateEl.textContent = dateObject;
      footerEl.append(priceEl);
      footerEl.append(dateEl);
      cardEl.append(footerEl);

      geckoEl.append(cardEl);

    });
}

// Star/Favorite Click Function, with star buttons on each search result shown.
// need to add in get Gecko a createElement(star-button)

// var starContainer = document.querySelector("#fav-star");

// starContainer.addEventListener("click", function(event) {
//         event.target.classList.toggle("fave-no");
//         event.target.classList.toggle("fave-yes");
//         if (event.target.classList.contains("fave-yes")) {
//                 getGecko(event.target.parent???);
//                 localStorage.setItem("fave", JSON.stringify?(event.target???));
//         }
// })
