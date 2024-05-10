import axios from "axios";

const ApiUrl = axios.create({
    baseUrl: "https://apibank.ikoodi.site/api/"
})

export default ApiUrl;