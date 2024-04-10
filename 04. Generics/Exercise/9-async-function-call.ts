interface User {
    id: number;
    name: string;
}

async function fetchUserData(userId: number): Promise<User> {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData: User = await response.json();
    console.log(userData);
    return userData;
}

fetchUserData(1);