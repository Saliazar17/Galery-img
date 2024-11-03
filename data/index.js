import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/index.html':
            pageObject = getHeroData();
            pageObject = {
                ...pageObject,
            }
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}