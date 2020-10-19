
export class WeatherService {

    static getWeather() {
        return user;
    }

    static get(city) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=6dde92ab6f479ce1339a6af893ceafea`);
            xhr.onload = xhr.onerror = () => {
                if (200 === xhr.status) {
                    return resolve(JSON.parse(xhr.response));
                }
                reject(xhr);
            };
            xhr.send();
        });
    }

    // static post() {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest;
    //         xhr.open("POST", "http://localhost:8000/users");
    //         xhr.setRequestHeader("Content-Type", "application/json");
    //         xhr.onload = xhr.onerror = () => {
    //             if (201 === xhr.status) {
    //                 return resolve(JSON.parse(xhr.response));
    //             }
    //             reject(xhr);
    //         };
    //         xhr.send(JSON.stringify(user));
    //     });
    // }

}