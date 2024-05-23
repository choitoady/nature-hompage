import { Outlet, Route, Routes } from "react-router-dom";
import { TopNav } from "./component/topnav";
import Main from "./main";
const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
