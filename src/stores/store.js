import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        location: {
            city: 'Biarritz, FR',
        },
        current: {
            date: '20 Jun 2022',
            day: 'Monday',
            temperature: '29',
            condition: 'Sunny',
            precipitation: '0%',
            humidity: '42%',
            wind: '3 km/h'
        },
        forecast: {
            forecastday: [
                {
                    date: '20 Jun 2022',
                    temperature: '30',
                    condition: 'Sunny'
                },
                {
                    date: '21 Jun 2022',
                    temperature: '35',
                    condition: 'Rainy'
                },
                {
                    date: '22 Jun 2022',
                    temperature: '17',
                    condition: 'Cloudy'
                }
            ]
        }
    }),
    getters: {
        fullDate: (state) => `${state.day}, ${state.date}`,
    },
    actions: {
        setWeather(data) {
            this.city = data.city
            this.day = data.day
            this.date = data.date
            this.temperature = data.temperature
            this.condition = data.condition
        }
    }
})