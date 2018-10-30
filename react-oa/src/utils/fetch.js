import axios from "axios";

const networkTool = axios.create({
    // baseURL: 'http://ygoa.yong-gang.cn',
    timeout: 8000,
});

export const getFetch = async (url, params = {}) => {

    try {

        let response = await networkTool.get(url, {params})

        let json = await response.data

        return json

    } catch (error) {
        throw error
    }
}

export const postFetch = async (url, params = {}) => {

    try {

        let response = await networkTool.post(url, {params,headers:{'Content-Type':'application/x-www-form-urlencoded'}})

        let json = await response.data

        return json

    } catch (error) {
        throw error
    }
}