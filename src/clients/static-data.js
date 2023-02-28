import Axios from 'axios'
import Pusher from 'pusher-js' 
import Echo from 'laravel-echo'

export function setupStaticData() {
    _app.staticData = {};

    /**
     * Set up back-end's HTTP client
     */
    _app.staticData.http = Axios.create({
        baseURL: "/",
        withCredentials: true 
    });
}