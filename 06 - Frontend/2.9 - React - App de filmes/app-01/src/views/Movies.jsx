import { useMovies } from "../hooks/useMovies";

export function Movies() {
    const movies = useMovies();

    return (
        <section>
            <h1>Filmes populares</h1>
            
            <ul style={{ listStyleType: 'none'}}>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </section>
    );
}