import { useContext } from "react";
import { UserContext } from "../App";

function Header(props) {
  // console.log( props );

  let {
    user: { uName },
  } = useContext(UserContext);
  return (
    <header>
      <h1> Todo List {uName}</h1>
    </header>
  );
}

export default Header;
