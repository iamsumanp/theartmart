// import { useRecoilState } from "recoil";
// import { nameState } from "../../recoil/atoms/name";

// import "react"
function InputComponent() {
  // const [name, setName] = useRecoilState(nameState);
  return (
    <div>
      <input
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        placeholder="enter string"
      ></input>
      Booyah
    </div>
  );
}

export default InputComponent;
