import { defineStore } from 'pinia'
/* Вывести динамически данные с API */
export const useWeatherStore = defineStore('weather', {
    state: () => ({
        location: {
            city: 'Biarritz, FR',
        },
        current: {
            date: '20 Jun 2022',
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
                    temperature: '29',
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
                },
                {
                    date: "23 Jun 2022",
                    temperature: '24',
                    condition: 'Sunny',
                }
            ]
        }
    }),
    getters: {
    },
    actions: {
    }
})