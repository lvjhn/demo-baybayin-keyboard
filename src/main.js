import { onClient } from '@/helpers/on-client'
import { setupStaticData } from './clients/static-data';

console.log("Hello! - from main.js")

onClient(() => {
    const handleWheel = function(e) {
        if(e.ctrlKey || e.metaKey)
            e.preventDefault();
    };
    window.addEventListener("wheel", handleWheel, {passive: false});
});


onClient(() => {
    if(window._app == undefined)
        window._app = {}; 

    setupStaticData();
});