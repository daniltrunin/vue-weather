import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/forecast.json',
    method: 'post',
    params: {
        key: 'd4bf1f8ca756421d90c173350241011',
        days: '4',
        aqi: 'no',
        alerts: 'no'
    }
})

export default api