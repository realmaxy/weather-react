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

    async ip() {
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json()
        return data
    }
}

export default UserInfo