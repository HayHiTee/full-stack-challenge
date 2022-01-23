import axios from "axios";

const apiRequest = async (url)=>{
    const response = await axios.get(url);
    return response;
}

export default apiRequest