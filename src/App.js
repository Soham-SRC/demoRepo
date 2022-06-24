import React from "react";
import { useEffect } from 'react';

const App = () => {
    const API_URL = "http://www.omdbapi.com/?apikey=a670ae3c&"

    const searchMovies = async (title) => {
        const response = await(`${API_URL}&s=${title}`);
        const data = await response.jason();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('spiderman');

    },[])
    return(

        <h1>app</h1>
    );
}

export default App;