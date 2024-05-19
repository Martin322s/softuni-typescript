import { Address } from "./Address"
import { Company } from "./Company"
import { Login } from "./Login"

export type User = {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    birthDate: string,
    login: Login,
    address: Address,
    phone: string,
    website: string,
    company: Company
}