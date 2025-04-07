import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";

export function MovieItem({ movie }) {
    return (
        <div className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <p>
                <Link class={styles.detailBtn} to={`movie/${movie.id}`}>Ver detalhes</Link>
            </p>
        </div>
    )
}