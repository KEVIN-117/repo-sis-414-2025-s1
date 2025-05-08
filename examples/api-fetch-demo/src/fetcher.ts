import { API_KEY, API_URL } from "./constants";

export async function getMovies(){
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`
        }
    })

    const data: Promise<ResponseType> = await response.json();    
    return data
}