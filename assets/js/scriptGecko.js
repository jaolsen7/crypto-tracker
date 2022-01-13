// var favorites = [];
// var

// $("#search-bar").click(function (event) {
//   var searchInput = $("input").val().trim();
//   event.preventDefault();
//   getGecko(searchInput);

//   function getGecko(searchInput) {
//     var requestUrl =
//       "https://api.coingecko.com/api/v3/simple/price?ids=" +
//       searchInput +
//       "&vs_currencies=USD&include_last_updated_at=true";

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         console.log(data.bitcoin.usd);
//         //console.log(data.searchInput.usd);
//       });
//   }
// });
