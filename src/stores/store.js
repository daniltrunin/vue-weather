import { defineStore } from 'pinia'
import { formatForecastDate, formatMainCardDate } from '@/services/formatForecastDate';
/* Вывести динамически данные с API */
export const useWeatherStore = defineStore('weather', {
    state: () => ({
        location: {
            city: null,
        },
        current: {
            date: null,
            temperature: null,
            condition: null,
            precipitation: null,
            humidity: null,
            wind: null
        },
        forecast: {
            forecastday: Array(3).fill().map(() => ({
                fullDate: null,
                date: null,
                temperature: null,
                condition: null,
                precipitation: null,
                humidity: null,
                wind: null,
            }))
        }
    }),
    getters: {
        get() {
            return useWeatherStore
        },
    },
    actions: {
        set(data) {
            this.$patch({
                location: {
                    city: data.location.name
                },
                current: {
                    date: formatMainCardDate(
                        data.location.localtime_epoch,
                        data.location.tz_id
                    ),
                    temperature: data.current.temp_c,
                    condition: data.current.condition.text,
                    precipitation: data.current.precip_mm,
                    humidity: data.current.humidity,
                    wind: data.current.wind_kph
                }
            })

            for (let i = 0; i < this.forecast.forecastday.length; i++) {
                this.forecast.forecastday[i].fullDate = formatMainCardDate(data.forecast.forecastday[i].date_epoch, data.location.tz_id)
                this.forecast.forecastday[i].date = formatForecastDate(data.forecast.forecastday[i].date_epoch, data.location.tz_id)
                this.forecast.forecastday[i].temperature = data.forecast.forecastday[i].day.avgtemp_c
                this.forecast.forecastday[i].condition = data.forecast.forecastday[i].day.condition.text
                this.forecast.forecastday[i].precipitation = data.forecast.forecastday[i].day.totalprecip_mm
                this.forecast.forecastday[i].humidity = data.forecast.forecastday[i].day.avghumidity
                this.forecast.forecastday[i].wind = data.forecast.forecastday[i].day.maxwind_kph
            }
        },
        changeCurrentForecast(index) {
            this.$patch({
                location: {
                    city: this.location.city
                },
                current: {
                    date: this.forecast.forecastday[index].fullDate,
                    temperature: this.forecast.forecastday[index].temperature,
                    condition: this.forecast.forecastday[index].condition,
                    precipitation: this.forecast.forecastday[index].precipitation,
                    humidity: this.forecast.forecastday[index].humidity,
                    wind: this.forecast.forecastday[index].wind
                }
            })
        }
    }
})

export const useForecastStore = defineStore('forecast', {
    state: () => ({
        activeForecast: 0
    }),
    getters: {
        get() {
            return useForecastStore
        }
    },
    actions: {
        setActive(index) {
            this.$patch({
                activeForecast: index
            })
        }
    }
})