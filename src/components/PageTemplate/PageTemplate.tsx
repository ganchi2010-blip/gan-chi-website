import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { composeContent } from "../../utils/composeContent.tsx";
import bg from "../../assets/background.png";
import FadeUp from "../FadeUp/FadeUp.js";

const PageTemplate = (props: {
  mainImage: any;
  header: any;
  content: any;
  footer: any;
}) => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const contentWidth = isMobileOrTablet ? "90vw" : "55vw";

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        minHeight: "calc(100vh - 110px)",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundColor: "#58b6f5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        paddingTop: "110px",
      }}
    >
      {/* Header placeholder */}
      <Container
        sx={{
          mt: "2vh",
          mb: "2vh",
          width: contentWidth,
          borderRadius: 2,
          padding: "0 !important",
        }}
      >
        <Box textAlign="center" color="white">
          {props.header}
        </Box>
      </Container>

      {/* Scrollable white container */}
      <Container
        sx={{
          width: contentWidth,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          overflowY: "auto",
          maxHeight: "calc(100vh - 10vh - 80px)", // Leaves room for header & footer
          padding: "0 !important",
          scrollbarWidth: "none",
          msOverflowStyle: "",
        }}
      >
        {/* Top section (5vh height inside container) */}
        <FadeUp translateY={false}>
          <Box
            sx={{
              borderRadius: 1,
              marginBottom: 0,
            }}
          >
            {props.mainImage}
          </Box>
        </FadeUp>

        {/* Main content area */}
        <Box
          sx={{
            minHeight: "15vh",
            padding: isMobileOrTablet
              ? "0px 25px 25px 25px"
              : "0px 50px 50px 50px",
          }}
        >
          {composeContent(props.content, isMobileOrTablet)}
        </Box>
      </Container>

      {/* Fixed bottom div */}
      {/* <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: contentWidth,
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: "12px 12px 0 0",
          p: 2,
          textAlign: "center",
        }}
      >
        {props.footer}
      </Box> */}
    </Box>
  );
};

export default PageTemplate;
