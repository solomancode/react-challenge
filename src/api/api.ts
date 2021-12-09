export class JSONBody {
    public body = '';
    public headers = {
        'Content-Type': 'application/json'
    }
    constructor(_body: object) {
        this.body = JSON.stringify(_body);
    }
}

export class API {

    constructor(private baseURL: string) { }

    async get() {
        return fetch(this.baseURL);
    }

    async post(body: JSONBody) {
        return fetch(this.baseURL, {
            method: 'POST',
            ...body,
        });
    }

    async patch(id: number | string, body: JSONBody) {
        return fetch(this.baseURL + id, {
            method: 'PATCH',
            ...body,
        });
    }
}