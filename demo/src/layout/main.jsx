import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=9c83559b&s=one piece")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true});
        fetch(
            `https://www.omdbapi.com/?apikey=9c83559b&s=${str}${
                type !== "all" ? `&type=${type}` : ""
        }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    };

    render() {
        const { loading } = this.state;

        return ( 
            <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader/> : <Movies movies={this.state.movies} />}
        </main>
        );
    }
}

export { Main };