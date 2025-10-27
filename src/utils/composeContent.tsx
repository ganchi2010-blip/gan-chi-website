import { Box, Button } from "@mui/material";
import { JSX } from "react";
import spicyKoreanIllustration from "../assets/spicy-korean.jpeg";
import honeyGarlicIllustration from "../assets/honey-garlic.jpeg";
import mapleGingerIllustration from "../assets/maple-ginger.jpeg";

export function composeContent(obj: Record<string, any>) {
  let composedContent: JSX.Element[] = [];
  let foodMenuIllComposed = false;
  Object.entries(obj).map(([key, value]) => {
    ///
    /// Button Component
    if (key.indexOf("-button") > -1) {
      composedContent.push(composeButton(value));
      composedContent.push(composeSpaceBox());
    }

    /// Title Component
    if (key.indexOf("-title") > -1) {
      composedContent.push(composeTitle(value));
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
        foodMenuContent.push(composeFoodMenuIllItem(itemKey, itemValue))
      );
      composedContent.push(composeFoodMenuIllRow(foodMenuContent));
      foodMenuIllComposed = true;
    }
  });
  return composedContent;
}

function composeButton(buttonText: string) {
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
      }}
    >
      {buttonText}
    </Button>
  );
}

function composeTitle(titleText: string) {
  return (
    <Box>
      <h6 className={"gan-chi-title"} style={{}}>
        {titleText}
      </h6>
    </Box>
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

function composeFoodMenuIllRow(content: JSX.Element[]) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      {content}
    </Box>
  );
}

function composeFoodMenuIllItem(
  foodMenuIllKey: string,
  foodMenuIllObj: Record<string, string>
) {
  const illustration = (id: string) => {
    if (id?.indexOf("korean-spicy") > -1) return spicyKoreanIllustration;
    if (id?.indexOf("honey-garlic") > -1) return honeyGarlicIllustration;
    if (id?.indexOf("maple-ginger") > -1) return mapleGingerIllustration;
  };
  return (
    <Box>
      <img
        style={{
          height: "9vw",
          width: "9vw",
          borderRadius: "500px",
          marginBottom: "10px",
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
