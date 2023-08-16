/* eslint-disable react/react-in-jsx-scope */
import "./styles/global.css";
import Layout from "../layout/Layout";
import Header from "../layout/Header";
import Main from "../layout/Main";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  return (
    <>
      <Layout>
        <Header />
        <Main></Main>
      </Layout>
    </>
  );
}

export default App;
