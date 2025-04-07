import { moviesApis } from "../config/http";

export function getPopularMovies() {
    return moviesApis.get("movie/popular");
}

export function getMovie(id){
    return moviesApis.get(`movie/${id}`);
}