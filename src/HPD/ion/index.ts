import axios from "axios"

const ion = axios.create({
  baseURL: process.env.HOST_API,
})

export default ion