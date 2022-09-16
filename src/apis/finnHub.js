import axios from "axios"

const TOKEN = "cchuoviad3ibcn4bcn70"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
