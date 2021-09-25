import axios from 'axios';


export async function getAPIResource (path: string) {
    const res = await axios.get(`${APIHostname}${path}?${APILimit}&ts=1&apikey=${APIKey}&hash=${APIHash}`)
    try {
        return res;
    } catch (error) {
        throw new Error('Error');
    }
}


export function getAllHeroes(){
    return getAPIResource('characters');
}

export function getHeroeByID(heroID: any){
    return getAPIResource(`characters/${heroID}`);
}

export function getAllComicsOfHero(heroID: any){
    return getAPIResource(`characters/${heroID}/comics`);
}

export async function getSearchedfHeroes (path: string, wantedHeroName: string){
    const res = await axios.get(`${APIHostname}${path}?nameStartsWith=${wantedHeroName}&${APILimit}&ts=1&apikey=${APIKey}&hash=${APIHash}`)
    try {
        return res;
    } catch (error) {
        throw new Error('Error');
    }
}

