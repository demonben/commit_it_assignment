import { User } from "./userSlice";
export function fetchUser(user: User) {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: user }), 500)
  );
}
