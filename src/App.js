import "./App.css";
import { useEffect, useState } from "react";
import { useContent } from "./databaseUtils/getContent.tsx";
import PageTemplate from "./components/PageTemplate/PageTemplate.tsx";
import Header from "./components/Header/Header.tsx";
import imageLogo from "./assets/logo.png";
import imageBanner from "./assets/banner-image-cropped.jpeg";
import { Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const mainPageCntnt = useContent("pages", "main-page", "en");
  const storyPageCntnt = useContent("pages", "story-page", "en");
  const menuItemsCntnt = useContent("header", "menu-items", "en");

  console.log(mainPageCntnt);
  console.log(menuItemsCntnt);

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

  useContent();

  return (
    <div className="App">
      {/* Same header appears on all pages */}
      <Header logo={logo} menuItems={menuItemsCntnt} />

      {/* Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={mainPageCntnt}
            />
          }
        />

        <Route
          path="/our-menu"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={{}}
            />
          }
        />
        <Route
          path="/download-app"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={{}}
            />
          }
        />
        <Route
          path="/our-social-media"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={{}}
            />
          }
        />
        <Route
          path="/our-blog"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={{}}
            />
          }
        />
        <Route
          path="/our-story"
          element={
            <PageTemplate
              header={null}
              mainImage={
                <img src={imageBanner} alt="banner" style={{ width: "100%" }} />
              }
              content={storyPageCntnt}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
