
// var favorites = [];
// var
var gtn = "";
// Starts function on click of submit button
$("#search").click(function (event) {
var select = document.getElementById("search-bar");
var value = select.options[select.selectedIndex].textContent;
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
var price = data[searchInput].usd;
var unix = data[searchInput].last_updated_at;

console.log(searchInput);

// var date = new Date(unix * 1000);
// var dateObject = "Date: " + date.toLocaleString().split(",")[0];
// var dateLi = document.createElement("li");
// dateLi.append(dateObject);
// geckoEl.append(dateLi);

var priceLi = document.createElement("li");
var priceObject = "Price: " + price + " USD";
priceLi.append(priceObject);
//priceLi.setAttribute("class", "list-group-item");
//geckoEl.append(priceLi);
gtn = priceObject;
console.log(gtn);
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
var resultContentEl = document.querySelector('#api-container');
function getNYT(search) {    
        var requestUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +"&api-key=pwSjTOg5rhnaPpEuYF8qONwQlPcvBJbR";
        fetch(requestUrl)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
                var resultCard = document.createElement('div');
                resultCard.classList.add('w3-col', 'm6', 'l6', 'w3-card-2', 'w3-margin-top', 'w3-margin-bottom');
                resultContentEl.append(resultCard);
                var resultBody = document.createElement('header');
                resultBody.classList.add('w3-container', 'w3-blue', 'w3-col', 'm6', 'l6');
                resultBody.textContent = search;
                resultContentEl.append(resultBody);
                var titleEl = document.createElement('div');
                titleEl.classList.add('w3-container', 'w3-white', 'w3-col', 'm6', 'l6');
                titleEl.innerHTML = '<strong>' + search + " News:  " + '</strong>' + data.response.docs[0].headline.main;
                resultContentEl.append(titleEl);
                var bodyContentEl = document.createElement('a');
                bodyContentEl.classList.add('w3-container', 'w3-white', 'w3-col', 'm6', 'l6');
                bodyContentEl.textContent = data.response.docs[0].web_url;
                bodyContentEl.setAttribute("href", data.response.docs[0].web_url);
                resultContentEl.append(bodyContentEl);
                var footerContentEl = document.createElement('footer');
                footerContentEl.classList.add('w3-container', 'w3-blue', 'w3-col', 'm6', 'l6');
                footerContentEl.textContent = gtn;
                resultContentEl.append(footerContentEl);
                console.log(gtn);
                console.log(footerContentEl);
                //resultBody.append(titleEl, bodyContentEl);
        });
}
$("#search").click(function (event) {
        var select = document.getElementById("search-bar");
        var value = select.options[select.selectedIndex].textContent;
        var searchInput = value;
                event.preventDefault();
                getNYT(searchInput);
                });



