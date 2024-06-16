const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a =  prompt('Один из последних просмотренных фильмов?', ''),
    b =  +prompt('Во сколько оцените его?', '');

personalMovieDB.movies[a] = b;


console.log(personalMovieDB);