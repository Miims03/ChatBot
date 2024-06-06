import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Friends from "./pages/Friends";
import News from "./pages/News";
import Archives from "./pages/Archives";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Logout from "./pages/Logout";
import Login from "./pages/Login";




export default function App() {
  return (
    <BrowserRouter>
      <main className=" bg-[#202022] h-screen w-screen flex justify-start items-center">
        <SideBar />
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/' element={<Navigate to="/chats" />} /> */}
          <Route path='/chats' element={<Chats />} />
          <Route path='/works' element={<Works />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/news' element={<News />} />
          <Route path='/archives' element={<Archives />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

