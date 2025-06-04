const getUserLocation = () => {
    const location = navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
    });
    return location
}

export default getUserLocation;
