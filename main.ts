document.getElementById('get').addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('done.');
        }
        if (xhr.status === 404) {
            console.log("Something went wrong");
        }
    };
    xhr.send();
})

document.getElementById('getF').addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                console.log(response.status)
            }
            return response.json();
        })
        .then(function (res) {
            console.log(res);
        })
});

document.getElementById('post').addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts/', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.response);
        }
    };
    var me = {
        first: "John",
        last: "Smith"
    };
    console.log(JSON.stringify(me));
    xhr.send(JSON.stringify(me));
    console.log(xhr.readyState);
})

document.getElementById('postF').addEventListener("click", function () {
    var me = {
        first: "John",
        last: "Smith"
    };
    var headers = new Headers();
    headers.append("Content-Type", "application/json")
    fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify(me),
            headers: headers
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)
        });
});