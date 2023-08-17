import React from "react";
import "./styles/global.css";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menuSlice";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  const dispatch = useDispatch();
  dispatch(fetchMenu());

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
