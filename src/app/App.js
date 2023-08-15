
import { DotRaiting } from '../ui/DotRating/DotRaiting';
import IncomingCall  from '../ui/TableComponents/IconCall/IncomingCall';
import OutgoingCall from '../ui/TableComponents/IconCall/OutgoingCall';
import './styles/global.css';

function App() {
  return (
    <div>
      <OutgoingCall />
      <IncomingCall />
      <DotRaiting />
    </div>
  );
}

export default App;
