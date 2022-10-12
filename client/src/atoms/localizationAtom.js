import { atom } from "recoil";

const localizationState = atom({
    key: "localizationState",
    default: 'en',
});

export { localizationState };