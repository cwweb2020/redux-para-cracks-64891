import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";
import CounterScreen from "../screens/Counter";
import Users from "../screens/Users";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<CounterScreen />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
