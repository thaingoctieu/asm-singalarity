const host = 'http://localhost:3000/'
import axios from 'axios'

export const login = async (data) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/login`,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

export const signup = async (data) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/signup`,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

export const getUser = async (token) => {
    try {
        // create axios get request
        const res = await axios({
            method: 'get',
            url: `${host}/userInfo`,
            data: data,
            headers: { authorization: token },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

