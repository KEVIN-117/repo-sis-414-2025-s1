// Definición de interfaces
interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GenreMap {
  [key: number]: string;
}

// Datos de películas
const movies: Movie[] = [
  {
    backdrop_path: "/backdrop1.jpg",
    id: 1,
    title: "Quantum Nexus",
    original_title: "Quantum Nexus",
    overview:
      "In the year 2157, a team of elite scientists discover a portal to alternate dimensions, unleashing a threat that could unravel the very fabric of reality.",
    poster_path: "/poster1.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [28, 878, 12],
    popularity: 92.5,
    release_date: "2157-07-16",
    video: false,
    vote_average: 8.7,
    vote_count: 45000,
  },
  {
    backdrop_path: "/backdrop2.jpg",
    id: 2,
    title: "Neural Horizon",
    original_title: "Neural Horizon",
    overview:
      "When a revolutionary AI system gains consciousness, a cybersecurity expert must navigate a treacherous landscape of corporate espionage and ethical dilemmas to prevent global catastrophe.",
    poster_path: "/poster2.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [878, 53],
    popularity: 88.8,
    release_date: "2142-09-23",
    video: false,
    vote_average: 8.9,
    vote_count: 38000,
  },
  {
    backdrop_path: "/backdrop3.jpg",
    id: 3,
    title: "Chrono Paradox",
    original_title: "Chrono Paradox",
    overview:
      "A brilliant physicist creates a device that allows him to manipulate time, but each alteration to the past creates increasingly dangerous ripples through the timeline of human existence.",
    poster_path: "/poster3.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [878, 12, 53],
    popularity: 90.2,
    release_date: "2138-07-18",
    video: false,
    vote_average: 8.5,
    vote_count: 42000,
  },
  {
    backdrop_path: "/backdrop4.jpg",
    id: 4,
    title: "Neon Dynasty",
    original_title: "Neon Dynasty",
    overview:
      "In a cyberpunk metropolis ruled by mega-corporations, a street-smart hacker and a renegade corporate assassin form an unlikely alliance to bring down the corrupt system that controls every aspect of citizens' lives.",
    poster_path: "/poster4.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [878, 80, 53],
    popularity: 85.3,
    release_date: "2149-10-14",
    video: false,
    vote_average: 8.6,
    vote_count: 36000,
  },
  {
    backdrop_path: "/backdrop5.jpg",
    id: 5,
    title: "Singularity Protocol",
    original_title: "Singularity Protocol",
    overview:
      "As humanity merges with technology, a resistance fighter with experimental neural implants discovers a conspiracy to forcibly evolve humans into a new digital species.",
    poster_path: "/poster5.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [28, 878],
    popularity: 87.9,
    release_date: "2145-03-31",
    video: false,
    vote_average: 8.8,
    vote_count: 40000,
  },
  {
    backdrop_path: "/backdrop6.jpg",
    id: 6,
    title: "Stellar Odyssey",
    original_title: "Stellar Odyssey",
    overview:
      "The first interstellar colony ship encounters a mysterious cosmic phenomenon that transforms the crew and challenges the very definition of humanity and consciousness.",
    poster_path: "/poster6.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [878, 12, 18],
    popularity: 82.7,
    release_date: "2151-07-06",
    video: false,
    vote_average: 8.5,
    vote_count: 32500,
  },
  {
    backdrop_path: "/backdrop7.jpg",
    id: 7,
    title: "Hyperion Ascendant",
    original_title: "Hyperion Ascendant",
    overview:
      "When Earth's resources are depleted, a mission to terraform a distant exoplanet uncovers an ancient alien civilization that has been waiting for humanity's arrival.",
    poster_path: "/poster7.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [12, 878, 28],
    popularity: 89.1,
    release_date: "2154-11-07",
    video: false,
    vote_average: 9.0,
    vote_count: 41000,
  },
  {
    backdrop_path: "/backdrop8.jpg",
    id: 8,
    title: "Bionic Revolution",
    original_title: "Bionic Revolution",
    overview:
      "In a world where human augmentation has created a new class system, a bionic soldier with experimental combat enhancements leads an uprising against the elite who control the technology.",
    poster_path: "/poster8.jpg",
    media_type: "movie",
    adult: false,
    original_language: "en",
    genre_ids: [28, 878, 53],
    popularity: 86.4,
    release_date: "2147-12-19",
    video: false,
    vote_average: 8.7,
    vote_count: 38000,
  },
];

// Mapeo de géneros
const genreMap: GenreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

// Estado actual
let currentMovies: Movie[] = [...movies];
let selectedGenre: string = "all";
let sortOption: string = "popularity";
let searchQuery: string = "";
let isTransitioning: boolean = false;

// Elementos DOM
const featuredMovie = document.getElementById("featured-movie");
const moviesContainer = document.getElementById("movies-container");
const modal = document.getElementById("movie-modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchBtn = document.getElementById("search-btn");
const sortSelect = document.getElementById("sort-select") as HTMLSelectElement;
const filterBtns = document.querySelectorAll(".nav-btn");
const mainContent = document.getElementById("main-content");
const genreTitle = document.getElementById("genre-title");
const loadingOverlay = document.getElementById("loading-overlay");

// Inicializar la aplicación
function init(): void {
  // Simular tiempo de carga
  setTimeout(() => {
    if (loadingOverlay) {
      loadingOverlay.style.opacity = "0";
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.style.display = "none";
        }
      }, 500);
    }

    renderFeaturedMovie();
    renderMovies(currentMovies);
    setupEventListeners();

    // Animar la entrada de las tarjetas de películas
    animateMovieCards();
  }, 1000);
}

// Animar la entrada de las tarjetas de películas
function animateMovieCards(): void {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("movie-card-visible");
    }, 100 * index);
  });
}

// Renderizar la película destacada
function renderFeaturedMovie(): void {
  if (!featuredMovie) return;

  const movie = movies[0];

  featuredMovie.innerHTML = `
    <img src="https://picsum.photos/1200/500?random=1" alt="${movie.title}" class="featured-backdrop">
    <div class="featured-content">
      <h2 class="featured-title">${movie.title}</h2>
      <p class="featured-overview">${movie.overview}</p>
      <div class="featured-meta">
        <span class="featured-year">${movie.release_date.split("-")[0]}</span>
        <span class="featured-rating">★ ${movie.vote_average.toFixed(1)}</span>
        <span>${getGenreNames(movie.genre_ids).join(", ")}</span>
      </div>
      <button class="view-details-btn" data-id="${movie.id}">View Details</button>
    </div>
  `;
}

// Renderizar todas las películas con animación escalonada
function renderMovies(moviesToRender: Movie[]): void {
  if (!moviesContainer) return;

  // Ocultar el contenedor durante la transición
  if (mainContent) {
    mainContent.classList.add("view-hidden");
    mainContent.classList.remove("view-visible");
  }

  setTimeout(() => {
    moviesContainer.innerHTML = "";

    moviesToRender.forEach((movie, index) => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";
      movieCard.dataset.id = movie.id.toString();

      const genreHTML = movie.genre_ids
        .slice(0, 2)
        .map((id) => `<span class="genre-tag">${genreMap[id] || "Unknown"}</span>`)
        .join("");

      movieCard.innerHTML = `
        <div class="movie-poster-container">
          <img src="https://picsum.photos/400/600?random=${index + 2}" alt="${movie.title}" class="movie-poster">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-genres">
            ${genreHTML}
          </div>
          <div class="movie-meta">
            <span class="movie-year">${movie.release_date.split("-")[0]}</span>
            <span class="movie-rating">★ ${movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      `;

      moviesContainer.appendChild(movieCard);
    });

    // Mostrar el contenedor con animación
    if (mainContent) {
      mainContent.classList.remove("view-hidden");
      mainContent.classList.add("view-visible");
    }

    // Animar la entrada de las tarjetas
    animateMovieCards();

    // Añadir efectos 3D a las tarjetas
    setupCardHoverEffects();
  }, 300); // Esperar a que la transición de salida termine
}

// Configurar efectos 3D para las tarjetas
function setupCardHoverEffects(): void {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (!(card instanceof HTMLElement) || isTransitioning) return;

      const rect = card.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const y = (e as MouseEvent).clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;

      card.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(10px)`;
    });

    card.addEventListener("mouseleave", () => {
      if (!(card instanceof HTMLElement) || isTransitioning) return;
      card.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
    });
  });
}

// Obtener nombres de géneros a partir de IDs
function getGenreNames(genreIds: number[]): string[] {
  return genreIds.map((id) => genreMap[id] || "Unknown");
}

// Formatear fecha a formato legible
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Mostrar detalles de película en modal con animación
function showMovieDetails(movieId: string): void {
  if (!modal || !modalBody) return;

  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) return;

  modalBody.innerHTML = `
    <img src="https://picsum.photos/1200/500?random=${movie.id}" alt="${movie.title}" class="modal-backdrop">
    <div class="modal-content-wrapper">
      <div class="modal-poster-container">
        <img src="https://picsum.photos/400/600?random=${movie.id + 10}" alt="${movie.title}" class="modal-poster">
        <div class="modal-details">
          <h2 class="modal-title">${movie.title}</h2>
          <div class="modal-meta">
            <span>${formatDate(movie.release_date)}</span>
            <span>★ ${movie.vote_average.toFixed(1)} (${movie.vote_count.toLocaleString()} votes)</span>
            <span>Popularity: ${movie.popularity.toFixed(1)}</span>
          </div>
          <p class="modal-overview">${movie.overview}</p>
          <div class="modal-genres">
            ${getGenreNames(movie.genre_ids)
              .map((genre) => `<span class="modal-genre-tag">${genre}</span>`)
              .join("")}
          </div>
          <div class="modal-stats">
            <div class="stat-item">
              <div class="stat-label">Original Language</div>
              <div class="stat-value">${movie.original_language.toUpperCase()}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Rating</div>
              <div class="stat-value">${movie.vote_average.toFixed(1)}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Release Year</div>
              <div class="stat-value">${movie.release_date.split("-")[0]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Añadir clase para la animación de entrada
  modal.classList.add("modal-enter");

  // Aplicar efecto de desenfoque al fondo
  if (mainContent) {
    (mainContent as HTMLElement).style.filter = "blur(5px)";
    (mainContent as HTMLElement).style.transition = "filter 0.5s ease";
  }
}

// Cerrar modal con animación
function closeModalWithAnimation(): void {
  if (!modal) return;

  // Añadir clase para la animación de salida
  modal.classList.add("modal-exit");

  // Quitar el desenfoque del fondo
  if (mainContent) {
    (mainContent as HTMLElement).style.filter = "blur(0)";
  }

  // Esperar a que termine la animación
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    modal.classList.remove("modal-enter", "modal-exit");
  }, 300);
}

// Filtrar y ordenar películas con transición
function filterAndSortMovies(): void {
  if (isTransitioning) return;
  isTransitioning = true;

  // Aplicar efecto de glitch al título del género si existe
  if (genreTitle) {
    genreTitle.classList.add("glitch-active");
    genreTitle.setAttribute("data-text", genreTitle.textContent || "");

    setTimeout(() => {
      genreTitle.classList.remove("glitch-active");
    }, 500);
  }

  let filteredMovies = [...movies];

  // Aplicar filtro de género
  if (selectedGenre !== "all") {
    const genreId = getGenreIdByName(selectedGenre);
    if (genreId) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre_ids.includes(genreId));
    }
  }

  // Aplicar filtro de búsqueda
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredMovies = filteredMovies.filter(
      (movie) => movie.title.toLowerCase().includes(query) || movie.overview.toLowerCase().includes(query)
    );
  }

  // Aplicar ordenamiento
  filteredMovies.sort((a, b) => {
    if (sortOption === "popularity") {
      return b.popularity - a.popularity;
    } else if (sortOption === "rating") {
      return b.vote_average - a.vote_average;
    } else if (sortOption === "date") {
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
    }
    return 0;
  });

  currentMovies = filteredMovies;
  renderMovies(currentMovies);

  // Restablecer el estado de transición después de un tiempo
  setTimeout(() => {
    isTransitioning = false;
  }, 800);
}

// Obtener ID de género por nombre
function getGenreIdByName(name: string): number | null {
  for (const [id, genreName] of Object.entries(genreMap)) {
    if (genreName.toLowerCase() === name.toLowerCase()) {
      return parseInt(id);
    }
  }
  return null;
}

// Configurar event listeners
function setupEventListeners(): void {
  // Click en tarjeta de película
  if (moviesContainer) {
    moviesContainer.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const movieCard = target.closest(".movie-card") as HTMLElement;
      if (movieCard && movieCard.dataset.id) {
        showMovieDetails(movieCard.dataset.id);
      }
    });
  }

  // Click en botón de película destacada
  if (featuredMovie) {
    featuredMovie.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("view-details-btn") && target.dataset.id) {
        showMovieDetails(target.dataset.id);
      }
    });
  }

  // Cerrar modal
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      closeModalWithAnimation();
    });
  }

  // Cerrar modal al hacer clic fuera
  if (modal) {
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModalWithAnimation();
      }
    });
  }

  // Funcionalidad de búsqueda con animación
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchQuery = searchInput.value.trim();
      filterAndSortMovies();
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchQuery = searchInput.value.trim();
        filterAndSortMovies();
      }
    });
  }

  // Filtro de género con animación
  if (filterBtns) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (isTransitioning) return;

        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Añadir efecto de pulso al botón
        btn.classList.add("pulse");
        setTimeout(() => {
          btn.classList.remove("pulse");
        }, 300);

        if (btn instanceof HTMLElement && btn.dataset.filter) {
          selectedGenre = btn.dataset.filter;

          // Actualizar el título del género si existe
          if (genreTitle && btn.textContent) {
            const newText = btn.textContent.trim() === "All" ? "Metaverse" : btn.textContent.trim();
            genreTitle.textContent = newText;
          }

          filterAndSortMovies();
        }
      });
    });
  }

  // Opciones de ordenamiento con animación
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      sortOption = sortSelect.value;
      filterAndSortMovies();
    });
  }

  // Añadir transición al hacer scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const cards = document.querySelectorAll(".movie-card");

    cards.forEach((card, index) => {
      if (!(card instanceof HTMLElement)) return;

      const cardPosition = card.getBoundingClientRect().top + window.scrollY;
      const offset = 50 * (index % 5); // Offset variable para efecto escalonado

      if (scrollPosition > cardPosition - window.innerHeight + offset) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });

  // Tecla Escape para cerrar el modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
      closeModalWithAnimation();
    }
  });
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
