import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=d4bf1f8ca756421d90c173350241011&q=London&days=4&aqi=no&alerts=no'
})

export default api