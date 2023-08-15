import { Call } from "../ui/tableComponent/icon/Call";
import { Rating } from "../ui/tableComponent/rating/Rating";
import { ButtonBalanceIcon } from "../ui/ButtonBalanceIcon/ButtonBalanceIcon";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Call />
      <Rating state="default" />
      <ButtonBalanceIcon />
    </div>
  );
}

export default App;
