import axios from "axios";

const baseurl = 'https://todo-list-oiax.onrender.com/';

export const getAllTodos = async () => {
    try {
        const data = await axios.get(baseurl);
        return data
    } catch (error) {
        console.error(error)
    }
}
 
export async function deleteTodo(id) {
    console.log(baseurl + id);
    await axios.delete(baseurl + id);
}