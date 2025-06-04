import { defineStore } from 'pinia'
import { formatForecastDate, formatMainCardDate } from '@/services/formatForecastDate';
/* Вывести динамически данные с API */
export const useWeatherStore = defineStore('weather', {
    state: () => ({
        location: {
            city: '',
        },
        current: {
            date: '',
            temperature: '',
            condition: '',
            precipitation: '',
            humidity: '',
            wind: ''
        },
        forecast: {
            forecastday: [
                {
                    date: '',
                    temperature: '',
                    condition: ''
                },
                {
                    date: '',
                    temperature: '',
                    condition: ''
                },
                {
                    date: '',
                    temperature: '',
                    condition: ''
                },
            ]
        }
    }),
    getters: {
        get() {
            return useWeatherStore
        }
    },
    actions: {
        set(data) {
            /* Вывести динамически картинку погоды в Forecast */
            this.location.city = data.location.name;

            this.current.date = formatMainCardDate(data.location.localtime_epoch, data.location.tz_id);

            this.current.temperature = data.current.temp_c
            this.current.condition = data.current.condition.text
            this.current.precipitation = data.current.precip_mm
            this.current.humidity = data.current.humidity
            this.current.wind = data.current.wind_kph

            for (let i = 0; i < this.forecast.forecastday.length; i++) {
                const forecast = formatForecastDate(data.forecast.forecastday[i].date_epoch, data.location.tz_id);
                this.forecast.forecastday[i].date = forecast
                this.forecast.forecastday[i].temperature = data.forecast.forecastday[i].day.avgtemp_c
            }
        }
    }
})