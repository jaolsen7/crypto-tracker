var resultContentEl = document.querySelector('#api-container');
function getNYT(search) {    
        var requestUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +"&api-key=pwSjTOg5rhnaPpEuYF8qONwQlPcvBJbR";
        fetch(requestUrl)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data)
                //console.log(data.response.docs[0].headline.main)
                //console.log(data.response.docs[0].web_url)
                var resultCard = document.createElement('div');
                resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
              
                var resultBody = document.createElement('div');
                resultBody.classList.add('card-body');
                resultCard.append(resultBody);
              
                var titleEl = document.createElement('h3');
                titleEl.textContent = "News:  " + data.response.docs[0].headline.main;
              
                var bodyContentEl = document.createElement('a');
                bodyContentEl.textContent = "link";
                bodyContentEl.setAttribute("href", data.response.docs[0].web_url);
                //<link href="/media/examples/link-element-example.css" rel="stylesheet"></link>
                // "<link href=" + data.response.docs[0].web_url +">" + '<br/>';

                  resultBody.append(titleEl, bodyContentEl);
//resultCard.append(resultBody);
                  resultContentEl.append(resultCard);
        });
}
$("#search").click(function (event) {
        var select = document.getElementById("search-bar");
        var value = select.options[select.selectedIndex].textContent;
        var searchInput = value;
                event.preventDefault();
                getNYT(searchInput);
                });