document.getElementById("get").addEventListener("click", function () {
    let search: string = document.getElementById("search")["value"]
    let year: number = document.getElementById("year")["value"]
    if (search.length > 2) {
        document.getElementById
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ae0ceb1eea00f5ae3235218c36add3b8&language=en-US&query=${search}&page=1&include_adult=false&year&primary_release_year=${year}`)
            .then(function (response) {
                if (!response.ok) {
                }
                return response.json();
            })
            .then(function (res) {
                let results = document.getElementById("results")
                results.innerText = `${res.total_results} Results`;

                if(res.Error !== "Movie not found!"){
                    res.results.forEach(element => {
                        let movieDiv: any = document.createElement("div");
                        let movieTitle: any = document.createElement("h2");
                        let movieSummary: any = document.createElement("p");
                        let moviePoster: any = document.createElement("img");
                        movieTitle.innerHTML = `<a class="movielink" href="https://www.themoviedb.org/movie/${element.id}" target=_blank">${element.original_title}, ${element.release_date.substring(0, 4)}</a>`;
                        movieSummary.innerText = `${element.overview}`
                        moviePoster.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`
                        // moviePoster.alt = `${element.original_title}` -- Should work, but doesn't
                        document.getElementById("movies").append(movieDiv);
                        movieDiv.append(movieTitle);
                        movieDiv.append(movieSummary)
                        movieDiv.append(moviePoster);
                        moviePoster.classList.add("movie-poster"); //Adding a class
                    });}
                   else{
                       document.getElementById("movies").innerHTML = `<p class="alert">No Movies Found</p>`
                   } 
            })
    } else {
        alert("Your search term must be more than 2 characters");
    }
})