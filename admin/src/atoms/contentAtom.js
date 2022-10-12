import { atom } from "recoil";

const contentState = atom({
    key: "contentState",
    default: '',
});

export { contentState };
