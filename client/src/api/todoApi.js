import axios from "axios";

const baseurl = 'http://localhost:4000/';

export const getAllTodos = async () => {
    try {
        const data = await axios.get(baseurl);
        return data
    } catch (error) {
        console.error(error)
    }
}
 