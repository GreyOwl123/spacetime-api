const title = document.getElementsByTagName("title");

let fetchRes = fetch('http://api/v1/object/:id', {
    mode: 'cors',
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
       }
    }).then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response.data.title);
        })
    .catch(function(err) {
        return err.json();
    });