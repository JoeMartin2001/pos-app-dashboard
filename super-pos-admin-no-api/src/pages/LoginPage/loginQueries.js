import { base_url } from "../../common/variables"

export const attemptLogin = async(body) => {
    const response = await fetch(base_url + '/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.msg)
    }

    return data
}