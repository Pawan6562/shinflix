document.addEventListener("DOMContentLoaded", () => {
    // ==================================================
    // SHINCHAN MOVIE DATABASE
    // ==================================================
    const movies = [
        { 
            title: "Crayon Shin-chan the Movie: Our Dinosaur Diary", 
            poster: "https://iili.io/KdgRPhG.jpg",
            description: "A new, exciting, and hilarious adventure with Shinchan and a baby dinosaur!",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/5` 
        },
        { 
            title: "New Dimension! Crayon Shin-chan the Movie: Battle of Supernatural Powers", 
            poster: "https://iili.io/Kdg7CKl.jpg",
            description: "Shinchan gains supernatural powers and must face off against other espers in a hilarious and action-packed battle.",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/4` 
        },
        { 
            title: "Shinchan Movie The Mystery of Tenkasu Academy", 
            poster: "https://iili.io/Kdg7CKl.jpg", // Note: Same poster as above, as provided
            description: "Shinchan and his friends experience an elite boarding school, only to get caught up in a mystery involving a strange bite mark and a drop in student intelligence.",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/7` 
        },
        { 
            title: "Shinchan Movie The Legends of Ninja Mononoke", 
            poster: "https://iili.io/KdgRppe.jpg",
            description: "A woman from the Ninja clan claims to be Shinchan's real mother, leading to a wild adventure in a secret ninja village.",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/8` 
        },
        { 
            title: "Shin-chan Action Kamen vs Higure", 
            poster: "https://iili.io/Kdg52Cx.png",
            description: "Shinchan's hero, Action Kamen, faces his greatest challenge yet against the evil Higure! A classic action-comedy.",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/10` 
        },
        { 
            title: "Shin-chan the Movie: The Adult Empire Strikes Back", 
            poster: "https://iili.io/Kdg5MG4.jpg",
            description: "A nostalgic theme park for adults appears, causing all the grown-ups to abandon their children. It's up to Shinchan and his friends to save the future!",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/16` 
        },
        { 
            title: "sinchan the spy", 
            poster: "https://iili.io/Kdg5ewu.jpg",
            description: "Shinchan becomes a secret agent after a mysterious girl named Lemon appears. An action-packed spy adventure with a lot of laughs.",
            embed: ``, 
            download: ``,
            tgLink: `https://t.me/sinchanallmoviesandepisodes/18` 
        }
    ];

    // Isko global bana do taaki watch page isko use kar sake
    window.shinchan_movies = movies;

    const movieGrid = document.getElementById("movie-grid");
    const searchBar = document.getElementById("search-bar");
    const noResults = document.getElementById("no-results");

    function displayMovies(movieArray) {
        if (!movieGrid) return; // Agar movie-grid nahi hai to aage mat badho
        movieGrid.innerHTML = "";
        noResults.classList.toggle("hidden", movieArray.length === 0);

        movieArray.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";

            // Abhi saari movies sirf Telegram par hain
            const isAvailable = false; 
            const watchPageUrl = movie.tgLink; // Seedha Telegram ka link

            movieCard.innerHTML = `
                <a href="${watchPageUrl}" target="_blank">
                    <div class="poster-container">
                        <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                        <div class="play-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30" height="30"><path d="M8 5v14l11-7z"></path></svg>
                        </div>
                    </div>
                    <h3>${movie.title}</h3>
                </a>
            `;
            movieGrid.appendChild(movieCard);
        });
    }

    if (searchBar) {
        searchBar.addEventListener("keyup", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm)
            );
            displayMovies(filteredMovies);
        });
    }

    // Sirf index.html par hi movies display karo
    if (document.getElementById('movie-grid')) {
        displayMovies(movies);
    }
});
