class UserInfo {
    async position() {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition
            (resolve, reject);
        });

        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
        }
    }
}

export default UserInfo