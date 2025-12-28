interface User {
    id: number;
    name?: string;
    email?: string;
    age?: number;
}

let user: User = {
    id: 1,
    name: "Phuong",
    email: "phuong@gmail.com",
    age: 30
}

console.log(user)
console.log(user.name)

let listUsers: User[] = [
    {
        id: 1,
        name: "Duy",
    },
    {
        id: 2,
        name: "Nam"
    }
]

for (let user of listUsers){
    console.log(user)
}