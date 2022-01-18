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

var localStorageBitcoin = localStorage.getItem("bitcoin");
var localStorageEthereum = localStorage.getItem("ethereum");
var localStorageDoge = localStorage.getItem("dogecoin");
var localStorageLitecoin = localStorage.getItem("litecoin");
var localStorageKava = localStorage.getItem("kava");
var apiEl = document.querySelector("#api-container");
var star = "";

if (localStorageBitcoin === "favorite") {
  star = "true";
  searchInput = "bitcoin";
  makeCard();
}
if (localStorageEthereum === "favorite") {
  star = "true";
  searchInput = "ethereum";
  makeCard();
}
if (localStorageDoge === "favorite") {
  star = "true";
  searchInput = "dogecoin";
  makeCard();
}
if (localStorageLitecoin === "favorite") {
  star = "true";
  searchInput = "litecoin";
  makeCard();
}
if (localStorageKava === "favorite") {
  star = "true";
  searchInput = "kava";
  makeCard();
}


function makeCard() {
  var cardEl = document.createElement("div");
  cardEl.classList.add(
    "w3-col",
    "m6",
    "l6",
    "w3-card-2",
    "w3-margin-top",
    "w3-margin-bottom",
    "custom"
  );
  cardEl.innerHTML =
    "<header class='w3-container w3-purple'><h3></h3><button class='star-btn w3-button w3-circle w3-teal w3-margin-bottom w3-right'></button><button class='trash'></button></header> <div class='w3-container'><p></p><a></a></div> <footer class='w3-container w3-purple custom2'><h5></h5><h6></h6></footer>";
  apiEl.append(cardEl);
  getNYT(searchInput, cardEl);
  getGecko(searchInput, cardEl);

  $(".star-btn").on("click", function () {
    if ($(this).siblings().text() === "bitcoinX") {
      localStorage.setItem("bitcoin", "favorite");
    }
  });
  $(".star-btn").on("click", function () {
    if ($(this).siblings().text() === "ethereumX") {
      localStorage.setItem("ethereum", "favorite");
    }
  });
  $(".star-btn").on("click", function () {
    if ($(this).siblings().text() === "dogecoinX") {
      localStorage.setItem("dogecoin", "favorite");
    }
  });
  $(".star-btn").on("click", function () {
    if ($(this).siblings().text() === "litecoinX") {
      localStorage.setItem("litecoin", "favorite");
    }
  });
  $(".star-btn").on("click", function () {
    if ($(this).siblings().text() === "kavaX") {
      localStorage.setItem("kava", "favorite");
    }
  });
  $(".trash").on("click", function () {
    if ($(this).siblings().text() === "bitcoin☆") {
      localStorage.removeItem("bitcoin");
      console.log($(this));
      $(this).parent().parent().addClass("hide");
    }
  });
  $(".trash").on("click", function () {
    if ($(this).siblings().text() === "ethereum☆") {
      localStorage.removeItem("ethereum");
      $(this).parent().parent().addClass("hide");
    }
  });
  $(".trash").on("click", function () {
    if ($(this).siblings().text() === "dogecoin☆") {
      localStorage.removeItem("dogecoin");
      $(this).parent().parent().addClass("hide");
    }
  });
  $(".trash").on("click", function () {
    if ($(this).siblings().text() === "litecoin☆") {
      localStorage.removeItem("litecoin");
      $(this).parent().parent().addClass("hide");
    }
  });
  $(".trash").on("click", function () {
    if ($(this).siblings().text() === "kava☆") {
      localStorage.removeItem("kava");
      $(this).parent().parent().addClass("hide");
    }
  });


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
      $(".trash").text("X");
      cardEl.querySelector("h3").textContent = searchInput;

      // Sets up NYT info
      cardEl.querySelector("p").textContent =
        data.response.docs[0].headline.main;
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

