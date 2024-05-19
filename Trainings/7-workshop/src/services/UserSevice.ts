import { BASE_URL } from "../constants";

export class UserService<T> {
    async getAll(): Promise<T> {
        const res = await fetch(`${BASE_URL}/users`);
        return await res.json();
    }

    async createUser(firstName: string, lastName: string) {
        const res = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName })
        });

        return await res.json();
    }
}