import axios from 'axios'

const host = 'http://localhost:8080'

export const login = async (data) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/api/login`,
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

export const signup = async (dt) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/api/signup`,
            data: dt,
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
            url: `${host}/api/userInfo`,
            headers: { authorization: token },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

