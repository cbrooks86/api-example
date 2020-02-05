document.getElementById("get").addEventListener("click", function () {
    let search: string = document.getElementById("search")["value"]
    let year: number = document.getElementById("year")["value"]
    if (search.length > 2) {
        console.log("search")
        fetch(`http://www.omdbapi.com/?apikey=22931130&s=${search}&y=${year}&type=movie`)
            .then(function (response) {
                console.log(response);
                if (!response.ok) {
                    console.log(response.status);
                }
                return response.json();
            })
            .then(function (res) {
                console.log(res);
            })
    } else {
        alert("Your search term must be more than 2 characters");
    }
})