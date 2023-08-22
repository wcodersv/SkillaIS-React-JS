/* eslint-disable react/react-in-jsx-scope */
import "./styles/global.css";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import UserPanel from "../component/UserPanel";
import FilterPanel from "../component/FilterPanel";
import CallGrid from "../component/CallGrid";
import CallRow from "../component/CallRow";
import React, { useEffect, useState
 } from "react";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  const [data, setData] = useState([]);
  const token = "testtoken";
  useEffect(() => {
    // Отправка запроса к API с токеном
    fetch("https://api.skilla.ru/mango/getList", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Передача токена в заголовке
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Ошибка получения данных:", error));
  }, [token]);
  console.log(data);
  return (
    <>
      <Layout>
        <Main>
          <UserPanel />
          <FilterPanel />
          <CallGrid>
            <CallRow />
            <CallRow />
          </CallGrid>
        </Main>
      </Layout>
    </>
  );
}

export default App;
