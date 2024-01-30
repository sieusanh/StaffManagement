
type Account = {
    name: string,
    age: number,
    gender: string,
    phone: string,
    email: string,
    username: string,
    password: string,
    role: string,
    createdAt: number
};

type AccessInfo = {
    name: string,
    email: string,
    username: string,
    role: string
}

export { Account, AccessInfo };
