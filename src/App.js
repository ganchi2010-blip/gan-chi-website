import "./App.css";
import { useEffect, useState } from "react";
import { useContent } from "./databaseUtils/getContent.tsx";
import PageTemplate from "./components/PageTemplate/PageTemplate.tsx";
import Header from "./components/Header/Header.tsx";
import imageLogo from "./assets/logo.png";
import imageBanner from "./assets/banner-image-cropped.jpeg";
import { Box } from "@mui/material";

function App() {
  const mainPageCntnt = useContent("pages", "main-page", "en");
  const menuItemsCntnt = useContent("header", "menu-items", "en");

  console.log(mainPageCntnt);
  console.log(menuItemsCntnt);

  const menuItems = [
    { label: "OUR MENU", onClick: () => console.log("1") },
    { label: "DOWNLOAD APP", onClick: () => console.log("2") },
    { label: "BLOG", onClick: () => console.log("3") },
    { label: "OUR STORY", onClick: () => console.log("4") },
  ];

  const logo = (
    <Box display="flex" alignItems="center" sx={{ width: "100px" }}>
      <img src={imageLogo} alt="logo" style={{ width: "100%" }}></img>
    </Box>
  );

  // console.log(useContent());
  useContent();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PageTemplate
        header={<Header logo={logo} menuItems={menuItemsCntnt} />}
        mainImage={
          <img
            src={imageBanner}
            alt={"banner-image"}
            style={{ width: "100%" }}
          />
        }
        content={mainPageCntnt}
      ></PageTemplate>
    </div>
  );
}

export default App;
