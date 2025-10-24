import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

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
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url('https://i.postimg.cc/h4H5D2RT/clouds-subtle-gradient-blue-sky-background-stock-vector-189483-490.avif')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* Header placeholder */}
      <Container
        sx={{
          mt: "3vh",
          mb: "3vh",
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
        }}
      >
        {/* Top section (5vh height inside container) */}
        <Box
          sx={{
            height: "5vh",
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
            mb: 2,
          }}
        >
          {props.mainImage}
        </Box>

        {/* Main content area */}
        <Box
          sx={{
            minHeight: "50vh",
            padding: "24px",
          }}
        >
          {" "}
          {props.content}
        </Box>
      </Container>

      {/* Fixed bottom div */}
      <Box
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
      </Box>
    </Box>
  );
};

export default PageTemplate;
