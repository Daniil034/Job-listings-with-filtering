import { styled } from "./stitches.config";

const TileStyled = styled("div", {
  position: "relative",
  backgroundColor: "#fff",
  boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
  borderRadius: "$2",
  transition: "all 0.3s ease-in-out",
  m0auto: "",
  variants: {
    padding: {
      jobTile: {
        padding: "32px 24px 24px 24px",
        "@bp1": {
          padding: "32px 40px",
        },
      },
      filterTile: {
        padding: "20px",
        "@bp1": {
          padding: "20px 40px",
        },
      },
    },
    featured: {
      true: {
        "&::before": {
          content: `''`,
          position: "absolute",
          left: "0",
          top: "0",
          width: "5px",
          height: "100%",
          backgroundColor: "$desaturatedDarkCyan",
          borderRadius: "100px 0px 0px 100px",
        },
      },
    },
  },
  defaultVariants: {
    padding: "jobTile",
  },
  "&.filter--active": {
    padding: "20px",
    marginBottom: "56px",
    height: "auto",
    "@bp1": {
      padding: "20px 40px",
      marginBottom: "40px",
    },
  },
});

export default TileStyled;
