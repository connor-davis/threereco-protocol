import Gun from "gun";

const gun = Gun({ axe: false });

const user = gun.user().recall({ sessionStorage: true });

export { gun, user };
