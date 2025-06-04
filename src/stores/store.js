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
                date: null,
                temperature: null,
                condition: null
            }))
        }
    }),
    getters: {
        get() {
            return useWeatherStore
        }
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
                this.forecast.forecastday[i].date = formatForecastDate(data.forecast.forecastday[i].date_epoch, data.location.tz_id)
                this.forecast.forecastday[i].temperature = data.forecast.forecastday[i].day.avgtemp_c
            }
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