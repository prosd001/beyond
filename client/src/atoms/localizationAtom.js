import { atom } from "recoil";

const localizationState = atom({
    key: "localizationState",
    default: false,
});

export { localizationState };