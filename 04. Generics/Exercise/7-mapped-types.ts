interface User {
    id: number;
    name: string;
}

type ReadOnlyOptionalUser = {
    [P in keyof User]?: User[P];
}

const user: ReadOnlyOptionalUser = {};
user.id = 1;
