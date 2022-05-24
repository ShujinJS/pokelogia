import axios from "axios";
// This await returns a Promise that takes a parameter <T> which ends up as resolve. Most of the elements start with <t>
// We probably know what we will get from the fetched data since we pass a url to the getData, thus we can define it as "generic"
// getData takes a parameter called <T> and this <T> is what going to be received inside of Promise

// export const getData = async <T>(url: string): Promise<T> => {
//     const response = await fetch(url);
//     return await response.json();
// }


// This fn is going to get a generic as T and this T is going to return a Promise in type of T
export const getData = async <T>(url: string): Promise<T> => {
    const response = await axios.get(url)
    return response.data;
}