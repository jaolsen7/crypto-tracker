// Starts function on click of submit button
var searchInput = "";
$("#search").click(function (event) {
  var select = document.getElementById("search-bar");
  var value = select.value;

  searchInput = value;
  event.preventDefault();

  makeCard();

  var stars = $(".star-btn");
  stars.click(function(event) {
    if ($(this).attr("class").includes("w3-teal")) {
      $(this).removeClass("w3-teal");
      $(this).addClass("w3-yellow");
    };
  });
});

var apiEl = document.querySelector("#api-container");

function makeCard() {
  var cardEl = document.createElement("div");
  cardEl.classList.add(
    "w3-col",
    "m6",
    "l6",
    "w3-card-2",
    "w3-margin-top",
    "w3-margin-bottom"
  );
  cardEl.innerHTML =
    "<header class='w3-container w3-blue'><h3></h3><button class='star-btn w3-button w3-circle w3-teal w3-right w3-margin-bottom'></button></header> <div class='w3-container'><p></p><a></a></div> <footer class='w3-container w3-blue'><h5></h5><h6></h6></footer>";
  apiEl.append(cardEl);
  getNYT(searchInput, cardEl);
  getGecko(searchInput, cardEl);
}

function getNYT(searchInput, cardEl) {
  var requestUrl =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchInput +
    "&api-key=pwSjTOg5rhnaPpEuYF8qONwQlPcvBJbR";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // Sets up header
        $(".star-btn").text("☆");
        cardEl.querySelector("h3").textContent = searchInput;

        // Sets up NYT info
        cardEl.querySelector("p").textContent = data.response.docs[0].headline.main;
        var url = data.response.docs[0].web_url;
        var urlText = "Link to Article";
        var linkEl = cardEl.querySelector("a");
        linkEl.append(urlText);
        linkEl.setAttribute("href", url);
    });
}
// Gecko Function that retrieves price and date last updated, creates a card with elements
function getGecko(searchInput, cardEl) {
  var requestUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    searchInput +
    "&vs_currencies=USD&include_last_updated_at=true";


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var price = data[searchInput].usd;
        var unix = data[searchInput].last_updated_at;
        var date = new Date(unix * 1000);
        var dateObject = "Last Updated: " + date.toLocaleString().split(",")[0];
        cardEl.querySelector("h5").textContent = "Price: " + price + " USD";
        $("h6").text(dateObject);

    });
}

// Star/Favorite Click Function, with star buttons on each search result shown.
// need to add in get Gecko a createElement(star-button)

//                 //localStorage.setItem("fave", JSON.stringify?(event.target???));
