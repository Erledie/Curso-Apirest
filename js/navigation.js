function navigator(){
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage()
    }else if(location.hash.startsWith('#search=')){
        searchPage()
    }else if(location.hash.startsWith('#movie=')){
        moviesPage()
    }else if(location.hash.startsWith('#category=')){
        categoriesPage()
    }else{
        homePage()
    }
}
function homePage(){
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    getTendringMoviesPreviewAxios()
    getGeneMoviesPreviewAxios()
    console.log('Home!')
}
function trendsPage(){
    console.log('Trends')
}
function categoriesPage(){
    console.log('Categories')
}
function moviesPage(){
    console.log('Movies')
}
function searchPage(){
    console.log('Search')
}
window.addEventListener('hashchange', navigator, false)
window.addEventListener('DOMContentLoaded', navigator, false)