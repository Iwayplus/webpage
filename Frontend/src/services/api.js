import axios from 'axios'

let baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_REMOTE_URL

export const addNewTestRecord = async (payload) => {
    try {
        return await axios.post(`${baseUrl}/webapi/uat`, payload)
    }catch(error) {
        console.log("Error while adding the record ", error)
    }
}

export const getTestRecord = async (appName) => {
    try {
        return await axios.get(`${baseUrl}/webapi/uat/${appName}`)
    }catch(error) {
        console.log("Error while adding the record ", error)
    }
}