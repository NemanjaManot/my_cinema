import axios from "axios";
import { config } from "../utils/config";

const { apiKey, baseUrl } = config;

class MovieService {
    async getNowPlaying() {
        try {
            const response = await axios.get(
                `${ baseUrl }/now_playing?${ apiKey }`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getUpcoming() {
        try {
            const response = await axios.get(`${ baseUrl }/upcoming?${ apiKey }`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getSingle(id) {
        try {
            const response = await axios.get(`${ baseUrl }/${ id }?${ apiKey }&append_to_response=videos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default new MovieService();
