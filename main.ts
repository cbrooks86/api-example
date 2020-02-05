document.getElementById("get").addEventListener("click", function () {
    let search: string = document.getElementById("search")["value"]
    let year: number = document.getElementById("year")["value"]
    if (search.length > 2) {
        fetch(`http://www.omdbapi.com/?apikey=22931130&s=${search}&y=${year}&type=movie`)
            .then(function (response) {
                if (!response.ok) {
                }
                return response.json();
            })
            .then(function (res) {
                let results = document.getElementById("results")
                results.innerText = `${res.totalResults} Results`;
                if(res.Error !== "Movie not found!"){
                    res.Search.forEach(element => {
                        let movieDiv = document.createElement("div");
                        let movieTitle = document.createElement("h2");
                        let moviePoster = document.createElement("img");
                        let movieLink = `https://www.imdb.com/title/${element.imdbID}/`;
                        movieTitle.innerHTML = `<a href="${movieLink}" target=_blank">${element.Title}</a> | ${element.Year}`;
                        moviePoster.src = element.Poster;
                        document.getElementById("movies").append(movieDiv);
                        movieDiv.append(movieTitle);
                        movieDiv.append(moviePoster);
                        moviePoster.classList.add("movie-poster");
                    });}
                   else{
                       document.getElementById("movies").innerHTML = `<p class="alert">No Movies Found</p>`
                   } 
            })
    } else {
        alert("Your search term must be more than 2 characters");
    }
})