import { UserService } from "./services/UserSevice";
import { User } from "./types/User";

const userService = new UserService<User[]>();

let users: User[] = await userService.getAll();
let userNames: string[] = users.map(x => `${x.firstname} ${x.lastname}`);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${userNames.join(', ')}
  </div>
`;