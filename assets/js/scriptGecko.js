//var search = input;
//function getGecko(search) {

var requestUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD&include_last_updated_at=true";

fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data);
                console.log(data.bitcoin.usd);
                //console.log(data.search.usd)
        });  
//}
