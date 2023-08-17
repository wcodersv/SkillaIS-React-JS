/* eslint-disable react/react-in-jsx-scope */
import "./styles/global.css";
import Layout from "../layout/Layout";
import Header from "../layout/Header";
import Main from "../layout/Main";
import UserPanel from "../component/UserPanel";
import FilterPanel from "../component/FilterPanel";
import CallGrid from "../component/CallGrid";
import { CallRow } from "../component/CallRow/CallRow";
// import CallRow from "../component/CallRow";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  return (
    <>
      <Layout>
        <Header />
        <Main>
          <UserPanel />

          <FilterPanel />
          <CallGrid>
            <CallRow />
          </CallGrid>
        </Main>
      </Layout>
    </>
  );
}

export default App;
