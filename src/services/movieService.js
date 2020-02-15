import axios from "axios";

const API_KEY = "api_key=42599a966bcf1e9b59d33cce12b02ec8";
const BASE_URL = "https://api.themoviedb.org/3/movie";

class MovieService {
    async getNowPlaying() {
        try {
            const response = await axios.get(
                `${ BASE_URL }/now_playing?${ API_KEY }`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getUpcoming() {
        try {
            const response = await axios.get(`${ BASE_URL }/upcoming?${ API_KEY }`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getSingle(id) {
        try {
            const response = await axios.get(`${ BASE_URL }/${ id }?${ API_KEY }`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default new MovieService();
