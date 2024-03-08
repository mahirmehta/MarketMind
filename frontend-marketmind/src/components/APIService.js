export default class APISerive {

    static async LoginUser(body){
        const resp = await fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }

    static async RegisterUser(body){
        const resp = await fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }    
}