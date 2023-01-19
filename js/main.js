const api = axios.create({
    baseURL : urlApi,
    headers: {
        'Content-Type': 'aplication/json;charset=utf-8'
    },
    params: {
        'api_key' : API
    }
})
//Usando Fetch
/* async function getTendringMoviesPreview(){
    let sPag = `${urlApi}/trending/movie/day?api_key=${API}`
    const res = await fetch(sPag)
    const data = await res.json()
    const aMovies = data.results
    const tradingMovies = document.getElementById('tradingMovies')
    aMovies.forEach(aMovie => {
        const movieContainer = document.createElement('div')
        const movieImg = document.createElement('img')
        movieContainer.classList.add('movie-container')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${aMovie.poster_path}`)
        movieImg.setAttribute('alt',`${aMovie.original_title}`)
        movieContainer.appendChild(movieImg)
        tradingMovies.appendChild(movieContainer)
    });
    console.log(aMovies)
}

async function getGeneMoviesPreview(){
    let sPag = `${urlApi}/genre/movie/list?api_key=${API}`
    const res = await fetch(sPag)
    const data = await res.json()
    const aGeneros = data.genres
    const categoriesPreviewList = document.getElementById('categoriesPreviewList')
    aGeneros.forEach(genero => {
        const categoriesMovies = document.createElement('div')
        categoriesMovies.classList.add('category-container')
        const titleCategories = document.createElement('h3')
        titleCategories.classList.add('category-title')
        titleCategories.innerHTML = genero.name
        titleCategories.id = genero.id
        categoriesMovies.appendChild(titleCategories)
        categoriesPreviewList.appendChild(categoriesMovies)
    });
    console.log(aGeneros)
}

getTendringMoviesPreview()
getGeneMoviesPreview() */
//Fin
//Usando Axios
async function getTendringMoviesPreviewAxios(){
    let sPag = `/trending/movie/day`
    const { data } = await api(sPag)
    const aMovies = data.results
    tradingMovies.innerHTML = ''
    aMovies.forEach(aMovie => {
        const movieContainer = document.createElement('div')
        const movieImg = document.createElement('img')
        movieContainer.classList.add('movie-container')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${aMovie.poster_path}`)
        movieImg.setAttribute('alt',`${aMovie.original_title}`)
        movieContainer.appendChild(movieImg)
        tradingMovies.appendChild(movieContainer)
    });
}

async function getGeneMoviesPreviewAxios(){
    let sPag = `/genre/movie/list`
    const {data} = await api(sPag)
    const aGeneros = data.genres
    
    categoriesPreviewList.innerHTML = ''
    aGeneros.forEach(genero => {
        const categoriesMovies = document.createElement('div')
        categoriesMovies.classList.add('category-container')
        const titleCategories = document.createElement('h3')
        titleCategories.classList.add('category-title')
        titleCategories.innerHTML = genero.name
        titleCategories.id = genero.id
        categoriesMovies.appendChild(titleCategories)
        categoriesPreviewList.appendChild(categoriesMovies)
    });
}