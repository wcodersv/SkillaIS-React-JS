import './styles/global.css';
import Layout from '../layout/Layout';
import Header from '../layout/Header';
import Main from '../layout/Main';
import { CallGrid } from '../component/CallGrid/CallGrid';
import { CallRow } from '../component/CallRow/CallRow';



function App() {
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <CallGrid><CallRow /></CallGrid>
        </Main>

      </Layout>
    </>
  );
}

export default App;
