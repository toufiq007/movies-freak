import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=8859f1b42d3d86df63f61c8950af64b4&language=en-US`
        )
            .then((res) => res.json())
            .then((data) => setMovie(data));
    };

    return (
        <div className="movie">
            <div className="movie__intro">
                <img
                    className="movie__backdrop"
                    src={`https://image.tmdb.org/t/p/original${
                        movie ? movie.backdrop_path : ""
                    }`}
                />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img
                            className="movie__poster"
                            src={`https://image.tmdb.org/t/p/original${
                                movie ? movie.poster_path : ""
                            }`}
                        />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">
                            {movie ? movie.original_title : ""}
                        </div>
                        <div className="movie__tagline">
                            {movie ? movie.tagline : ""}
                        </div>
                        <div className="movie__rating">
                            {movie ? movie.vote_average : ""}{" "}
                            <i class="fas fa-star" />
                            <span className="movie__voteCount">
                                {movie
                                    ? "(" + movie.vote_count + ") votes"
                                    : ""}
                            </span>
                        </div>
                        <div className="movie__runtime">
                            {movie ? movie.runtime + " mins" : ""}
                        </div>
                        <div className="movie__releaseDate">
                            {movie ? "Release date: " + movie.release_date : ""}
                        </div>
                        <div className="movie__genres">
                            {movie && movie.genres
                                ? movie.genres.map((genre) => (
                                      <>
                                          <span
                                              className="movie__genre"
                                              id={genre.id}
                                          >
                                              {genre.name}
                                          </span>
                                      </>
                                  ))
                                : ""}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie ? movie.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {movie && movie.homepage && (
                    <a
                        href={movie.homepage}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <p>
                            <span className="movie__homeButton movie__Button">
                                Homepage{" "}
                                <i className="newTab fas fa-external-link-alt"></i>
                            </span>
                        </p>
                    </a>
                )}
                {movie && movie.imdb_id && (
                    <a
                        href={"https://www.imdb.com/title/" + movie.imdb_id}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <p>
                            <span className="movie__imdbButton movie__Button">
                                IMDb
                                <i className="newTab fas fa-external-link-alt"></i>
                            </span>
                        </p>
                    </a>
                )}
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {movie &&
                    movie.production_companies &&
                    movie.production_companies.map((company) => (
                        <>
                            {company.logo_path && (
                                <span className="productionCompanyImage">
                                    <img
                                        className="movie__productionComapany"
                                        src={
                                            "https://image.tmdb.org/t/p/original" +
                                            company.logo_path
                                        }
                                    />
                                    <span>{company.name}</span>
                                </span>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Movie;
