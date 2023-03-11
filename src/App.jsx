import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="movie/:id" element={<MovieDetails/>} />
                <Route path="movies/:type" element={<MoviesList/>} />
                <Route path="*" element={<h2>not found</h2>} />
            </Routes>
        </>
    );
}

export default App;
