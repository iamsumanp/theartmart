import { nameState } from "../atoms/name";
import { selector } from "recoil";

export const lengthState = selector({
  key: "lengthState",
  get: ({ get }) => {
    const name = get(nameState);
    const lengthOfName = name.length;
    return lengthOfName;
  },
});
