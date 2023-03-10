import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {

    return (
        <>
        <Header/>
            <Routes>
              <Route index element={<h1>hello world</h1>}/>
              <Route path="movie/:id" element={<h2>movies details</h2>}/>
              <Route path="movies/:type" element={<h2>movies list</h2>}/>
              <Route path="*" element={<h2>not found</h2>}/>
            </Routes>
            
        </>
    );
}

export default App;
