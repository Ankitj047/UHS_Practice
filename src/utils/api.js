import axios from axios
const baseUrl = process.env.REACT_APP_BASE_URL  // http://localhost:4000

export const postApi = async (path, body, auth = false) => {
    let headers = {
        "content-type": "application/json",
    }

    if(auth) headers = { ...headers, "auth": auth }

    const options = {
        url: `${baseUrl}${path}`,
        method: "POST",
        headers,
        data: body
    }

    try {
        const api = await axios(options)
        return api.data
    } catch (err) {
        console.error(err)
    }
}

await postApi("/api", { data: "1" }, "hwehhwh")