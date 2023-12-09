import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";
import CounterScreen from "../screens/Counter";
import Users from "../screens/Users";
import Posts from '../screens/Posts'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<CounterScreen />} />
          <Route path="users" element={<Users />} />
          <Route path="posts/:id" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
