import "./App.css";
import { useEffect, useState } from "react";
import { useContent } from "./databaseUtils/getContent.tsx";
import PageTemplate from "./components/PageTemplate/PageTemplate.tsx";
import Header from "./components/Header/Header.tsx";
import imageLogo from "./assets/logo.png";
import socialMediaImg from "./assets/social-media.png";
import imageBanner from "./assets/banner-image-cropped.jpeg";
import loaderBg from "./assets/loader-bg.jpg";
import { Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const mainPageCntnt = useContent("pages", "main-page", "en");
  const menuPageCntnt = useContent("pages", "menu-page", "en");
  const storyPageCntnt = useContent("pages", "story-page", "en");
  const menuItemsCntnt = useContent("header", "menu-items", "en");
  const appPageCntnt = useContent("pages", "app-page", "en");

  const [loading, setLoading] = useState(true);

  // console.log(mainPageCntnt);
  // console.log(menuPageCntnt);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  const navigate = useNavigate();

  const logo = (
    <Box
      display="flex"
      alignItems="center"
      sx={{ width: "100px", cursor: "pointer" }}
      onClick={() => navigate("/")}
    >
      <img src={imageLogo} alt="logo" style={{ width: "100%" }}></img>
    </Box>
  );

  // useContent();

  const mainImage = (
    <Box
      sx={{
        height: "40vh",
        backgroundImage: "url(" + imageBanner + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></Box>
  );
  return (
    <div className="App">
      {/* Same header appears on all pages */}
      {loading ? (
        <div
          className="loader-bg"
          style={{
            backgroundImage: "url(" + loaderBg + ")",
            height: "100vh",
            width: "100vw",
          }}
        >
          <img
            src={imageLogo}
            alt="logo"
            style={{ height: "150px", marginTop: "calc(50vh - 100px)" }}
          ></img>
        </div>
      ) : (
        <>
          <Header logo={logo} menuItems={menuItemsCntnt} />

          {/* Routing */}
          <Routes>
            <Route
              path="/"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={mainPageCntnt}
                />
              }
            />

            <Route
              path="/home"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={mainPageCntnt}
                />
              }
            />

            <Route
              path="/our-menu"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={menuPageCntnt}
                />
              }
            />
            <Route
              path="/download-app"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={appPageCntnt}
                />
              }
            />
            <Route
              path="/our-social-media"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={{
                    "asset-image": {
                      src: socialMediaImg,
                      alt: "social-media-image",
                    },
                  }}
                />
              }
            />
            <Route
              path="/our-blog"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={{}}
                />
              }
            />
            <Route
              path="/our-story"
              element={
                <PageTemplate
                  header={null}
                  mainImage={mainImage}
                  content={storyPageCntnt}
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
