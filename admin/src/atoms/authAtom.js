import { atom } from "recoil";

const adminAuthState = atom({
    key: "adminAuthState",
    default: null,
});

export { adminAuthState };
