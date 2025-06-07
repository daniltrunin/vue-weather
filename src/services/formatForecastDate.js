export const formatMainCardDate = (data, tzId) => {
    const date = new Date(data * 1000);
    const formattedDate = Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        day: 'numeric',
        month: 'long',
        weekday: 'long'
    }).format(date)
    return formattedDate
}

export const formatForecastDate = (data, tzId) => {
    const forecast = new Date(data * 1000)
    const formatted = Intl.DateTimeFormat('en-US', {
        timeZone: tzId,
        weekday: 'long',
    }).format(forecast).slice(0, 3)
    return formatted
}

