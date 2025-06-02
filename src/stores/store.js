import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        city: 'Biarritz, FR',
        day: 'Monday',
        date: '20 Jun 2022',
        temperature: '29',
        condition: 'Sunny',
        precipitation: '0%',
        humidity: '42%',
        wind: '3 km/h'
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