import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovies";
import styles from "./MovieDetail.module.css";

export function MovieDetail() {
    const { id } = useParams();
    const movie = useMovie(id);

    return (
        <div className={styles.movieContainer}>
            <section className={styles.movie}>
                <h1>{movie.title}</h1>
                <figure className={styles.imgContainer}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
                </figure>
                <p>{movie.overview}</p>
            </section>
        </div>
    )
}