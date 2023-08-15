import { ButtonBalanceIcon } from '../ui/ButtonBalanceIcon/ButtonBalanceIcon';
import { IncomingCall } from '../ui/TableComponents/IconCall/IncomingCall/table component/icon/IncomingCall';
import { OutgoingCall } from '../ui/TableComponents/IconCall/OutgoingCall/OutgoingCall';
import './styles/global.css';

function App() {
  return (
    <div>
      <ButtonBalanceIcon />
      <IncomingCall />
      <OutgoingCall/>
    </div>
  );
}

export default App;
