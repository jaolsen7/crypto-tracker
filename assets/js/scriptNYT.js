var requestUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bitcoin&api-key=pwSjTOg5rhnaPpEuYF8qONwQlPcvBJbR";

fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data)
                console.log(data.response.docs[0].headline.main)
                console.log(data.response.docs[0].web_url)
        });