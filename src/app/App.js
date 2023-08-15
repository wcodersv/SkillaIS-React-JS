import ButtonBalanceIcon from "../ui/ButtonBalanceIcon";
import CloseButton from "../ui/CloseButton";
import { ExpandLessButton } from "../ui/ExpandLess/ExpandLessButton";
import ExpandMoreButton from "../ui/ExpandMore";
import { HelpButtonIcon } from "../ui/HelpButton/HelpButtonIcon";
import LogoutButton from "../ui/LogoutButton";
import "./styles/global.css";

function App() {
  return (
    <div>
      <ButtonBalanceIcon/>
      <HelpButtonIcon/>
      <ExpandLessButton/>
      <ExpandMoreButton/>
      <CloseButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
