import { atom } from "recoil";

const localizationState = atom({
    key: "localizationState",
    default: true,
});

export { localizationState };