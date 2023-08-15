import { ButtonBalanceIcon } from '../ui/ButtonBalanceIcon/ButtonBalanceIcon';
import './styles/global.css';
import StatusAssessment from "../ui/StatusAssessment";
import CallSearch from "../ui/CallSearch"

function App() {
  return (
    <div>
      <StatusAssessment />
      <ButtonBalanceIcon />
      <CallSearch />
    </div>
  );
}

export default App;
