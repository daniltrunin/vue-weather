import { defineStore } from 'pinia'
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
                {
                    date: '',
                    temperature: '',
                    condition: '',
                }
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
            this.location.city = data.location.name;

            const date = new Date(data.location.localtime_epoch * 1000);
            const formattedDate = Intl.DateTimeFormat('en-US', {
                timeZone: data.location.tz_id,
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                weekday: 'long'
            }).format(date)
            this.current.date = formattedDate

            this.current.temperature = data.current.temp_c
            this.current.condition = data.current.condition.text
            this.current.precipitation = data.current.precip_mm
            this.current.humidity = data.current.humidity
            this.current.wind = data.current.wind_kph
        }
    }
})