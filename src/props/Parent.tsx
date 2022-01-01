import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <ChildAsFC color="red" onClick={() => console.log("clicked")}>
        some text as children
      </ChildAsFC>
    </>
  );
};

export default Parent;
