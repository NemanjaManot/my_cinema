import { observable, runInAction, decorate } from "mobx";
import MovieService from "../services/movieService";

const initialState = {
    movies: [],
    singleMovie: {},
    isLoading: false,
    status: "initial"
};

class MovieStore {
    movies = initialState.movies;
    singleMovie = initialState.singleMovie;
    isLoading = initialState.isLoading;
    status = initialState.status;

    getNowPlayingMovies = async () => {
        try {
            this.isLoading = true;
            const data = await MovieService.getNowPlaying();
            runInAction(() => {
                this.movies = data.results;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
                this.isLoading = false;
            });
        }
    };

    getUpcomingMovies = async () => {
        try {
            this.isLoading = true;
            const data = await MovieService.getUpcoming();
            runInAction(() => {
                this.movies = data.results;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
                this.isLoading = false;
            });
        }
    };

    getSingleMovie = async id => {
        try {
            this.isLoading = true;
            const data = await MovieService.getSingle(id);
            runInAction(() => {
                this.singleMovie = data;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
                this.isLoading = false;
            });
        }
    };
}

decorate(MovieStore, {
    movies: observable,
    singleMovie: observable,
    isLoading: observable,
    status: observable
});

export default new MovieStore();
