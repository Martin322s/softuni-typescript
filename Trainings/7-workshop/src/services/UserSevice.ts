import { BASE_URL } from "../constants";

export class UserService<T> {
    async getAll(): Promise<T> {
        const res = await fetch(`${BASE_URL}/users`);
        return await res.json();
    }
}