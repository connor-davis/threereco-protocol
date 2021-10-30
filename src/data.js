import Gun from "gun";
import "gun/sea";

const gun = Gun({ axe: false });

const user = gun.user().recall({ sessionStorage: true });

export { gun, user };
