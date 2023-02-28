export async function onClient(callback) {
    if(typeof window != "undefined") {
        callback();
    }
};