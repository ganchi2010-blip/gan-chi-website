import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { JSX } from "react";
import spicyKoreanIllustration from "../assets/spicy-korean.jpeg";
import honeyGarlicIllustration from "../assets/honey-garlic.jpeg";
import mapleGingerIllustration from "../assets/maple-ginger.jpeg";
import spicyKoreanImg from "../assets/spicy-korean-img.jpg";
import honeyGarlicImg from "../assets/honey-garlic-img.jpg";
import mapleGingerImg from "../assets/maple-ginger-img.jpg";
import FadeUp from "../components/FadeUp/FadeUp";

export function composeContent(
  obj: Record<string, any>,
  isMobileOrTablet: boolean
) {
  let composedContent: JSX.Element[] = [];
  let foodMenuIllComposed = false;
  let foodMenuImgComposed = false;

  Object.entries(obj).map(([key, value]) => {
    ///
    /// Asset Image
    if (key.indexOf("asset-image") > -1) {
      composedContent.push(
        <FadeUp>
          <img
            src={value.src}
            alt={value.alt}
            style={{ width: isMobileOrTablet ? "100%" : "40%" }}
          ></img>
        </FadeUp>
      );
    }

    /// Button Component
    if (key.indexOf("-button") > -1) {
      composedContent.push(composeButton(value, isMobileOrTablet));
      composedContent.push(composeSpaceBox());
    }

    /// Title Component
    if (key.indexOf("-title") > -1) {
      composedContent.push(composeTitle(value));
    }

    /// Story section Component
    if (key.indexOf("-section") > -1) {
      composedContent.push(composeTextSection(value));
    }

    /// Food Menu Illustrated Component
    if (key.indexOf("-food-menu-illustrated") > -1 && !foodMenuIllComposed) {
      let foodMenuContent: JSX.Element[] = [];
      const foodMenuIllItems = Object.fromEntries(
        Object.entries(obj).filter(
          ([k]) => k.indexOf("-food-menu-illustrated") > -1
        )
      );
      Object.entries(foodMenuIllItems).map(([itemKey, itemValue]) =>
        foodMenuContent.push(
          composeFoodMenuIllItem(itemKey, itemValue, isMobileOrTablet)
        )
      );
      composedContent.push(
        composeFoodMenuIllRow(foodMenuContent, isMobileOrTablet)
      );
      foodMenuIllComposed = true;
    }

    /// Food Menu Image Component
    if (key.indexOf("-food-menu-image") > -1 && !foodMenuImgComposed) {
      let foodMenuContent: JSX.Element[] = [];
      const foodMenuIllItems = Object.fromEntries(
        Object.entries(obj).filter(([k]) => k.indexOf("-food-menu-image") > -1)
      );
      Object.entries(foodMenuIllItems).map(([itemKey, itemValue]) =>
        foodMenuContent.push(
          composeFoodMenuImgItem(itemKey, itemValue, isMobileOrTablet)
        )
      );
      composedContent.push(
        composeFoodMenuIllRow(foodMenuContent, isMobileOrTablet)
      );

      foodMenuImgComposed = true;
    }
  });
  return composedContent;
}

function composeButton(buttonText: string, isMobileOrTablet: boolean) {
  return (
    <Button
      sx={{
        marginTop: "-30px",
        height: "43px",
        backgroundColor: "#E00933",
        borderRadius: "100px",
        boxShadow: 2,
        color: "white",
        "&:hover": {
          backgroundColor: "#b9082b",
        },
        padding: "0 23px 0 23px",
        fontSize: isMobileOrTablet ? "11px" : "13px",
        fontWeight: "600",
        letterSpacing: "1px",
      }}
    >
      {buttonText}
    </Button>
  );
}

function composeTitle(titleText: string) {
  return (
    <FadeUp>
      <Box>
        <h6 className={"gan-chi-title"} style={{}}>
          {titleText}
        </h6>
      </Box>
    </FadeUp>
  );
}

function composeSpaceBox() {
  return (
    <Box
      sx={{
        height: "2vh",
        width: "100%",
      }}
    ></Box>
  );
}

function composeFoodMenuIllRow(
  content: JSX.Element[],
  isMobileOrTablet: boolean
) {
  return (
    <FadeUp>
      <Box
        display={isMobileOrTablet ? "block" : "flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
        marginBottom={"30px"}
      >
        {content}
      </Box>
    </FadeUp>
  );
}

function composeFoodMenuIllItem(
  foodMenuIllKey: string,
  foodMenuIllObj: Record<string, string>,
  isMobileOrTablet: boolean
) {
  const illustration = (id: string) => {
    if (id?.indexOf("korean-spicy") > -1) return spicyKoreanIllustration;
    if (id?.indexOf("honey-garlic") > -1) return honeyGarlicIllustration;
    if (id?.indexOf("maple-ginger") > -1) return mapleGingerIllustration;
  };
  return (
    <Box sx={{ marginBottom: isMobileOrTablet ? "30px" : "0" }}>
      <img
        style={{
          height: isMobileOrTablet ? "auto" : "9vw",
          width: isMobileOrTablet ? "130px" : "9vw",
          borderRadius: "500px",
          marginBottom: isMobileOrTablet ? "5px" : "10px",
        }}
        src={illustration(foodMenuIllKey)}
        alt={foodMenuIllKey}
      />
      <Box>
        <span style={{ color: "gray", fontSize: "0.9rem" }}>
          {foodMenuIllObj["b-text"]}
        </span>
      </Box>
    </Box>
  );
}

function composeFoodMenuImgItem(
  foodMenuIllKey: string,
  foodMenuIllObj: Record<string, string>,
  isMobileOrTablet: boolean
) {
  const image = (id: string) => {
    if (id?.indexOf("korean-spicy") > -1) return spicyKoreanImg;
    if (id?.indexOf("honey-garlic") > -1) return honeyGarlicImg;
    if (id?.indexOf("maple-ginger") > -1) return mapleGingerImg;
  };
  return (
    <Box
      style={{
        marginBottom: "20px",
      }}
    >
      <Box
        style={{
          height: isMobileOrTablet ? "130px" : "11vw",
          width: isMobileOrTablet ? "130px" : "11vw",
          borderRadius: "50px",
          margin: "auto",

          marginBottom: isMobileOrTablet ? "15px" : "10px",
          backgroundImage: "url(" + image(foodMenuIllKey) + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // src={illustration(foodMenuIllKey)}
        // alt={foodMenuIllKey}
      />
      <Box>
        <span style={{ color: "gray", fontSize: "0.9rem" }}>
          {foodMenuIllObj["b-text"]}
        </span>
      </Box>
    </Box>
  );
}

function composeTextSection(obj: any) {
  console.log(obj);
  return (
    <Box sx={{ paddingBottom: "15px" }}>
      {Object.keys(obj).map(function (key, index) {
        if (key.indexOf("-paragraph") > -1)
          return (
            <FadeUp>
              <div>{obj[key]}</div>
            </FadeUp>
          );
      })}
    </Box>
  );
}
