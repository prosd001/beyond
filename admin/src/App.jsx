import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminAuthState } from "./atoms/authAtom";
import Navbar from "./Components/Navbar";
import Articales from "./Pages/Articales";
import CreateArticale from "./Pages/CreateArticale";
import EditArticale from "./Pages/EditArticale";
import GuideList from "./Pages/GuideList";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Showcase from "./Pages/Showcase";
import Signin from "./Pages/Signin";
import UploadImage from "./Pages/UploadImage";
import UploadPdf from "./Pages/UploadPdf";
import UploadVideo from "./Pages/UploadVideo";
import WaitingList from "./Pages/WaitingList";

const App = () => {
  // Global states
  const [adminToken, setAdminToken] = useRecoilState(adminAuthState);

  // Check user is signed in
  useEffect(() => {
    const adminUser = JSON.parse(localStorage.getItem("ADT__BEYOND__WORLDZ"));
    setAdminToken(adminUser);
  }, [setAdminToken]);

  return (
    <>
      <BrowserRouter>
        {!adminToken && (
          <Routes>
            <Route path="/*" element={<Signin />} />
          </Routes>
        )}
        {adminToken && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload-pdf" element={<UploadPdf />} />
              <Route path="/upload-image" element={<UploadImage />} />
              <Route path="/upload-video" element={<UploadVideo />} />
              <Route path="/articles" element={<Articales />} />
              <Route path="/create-article" element={<CreateArticale />} />
              <Route path="/edit-article/:slug" element={<EditArticale />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/waiting-list" element={<WaitingList />} />
              <Route path="/download-list" element={<GuideList />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
