import { styled } from "./stitches.config";

const ButtonStyled = styled("button", {
  fontSize: "$4",
  fontWeight: "$bold",
  lineHeight: "$2",
  padding: "5px 7px 3px",
  border: "0",
  borderRadius: "$1",
  cursor: "pointer",
  variants: {
    backgroundColor: {
      cyan: {
        backgroundColor: "$desaturatedDarkCyan",
      },
      lightGrayishCyan: {
        backgroundColor: "$lightGrayishCyanFilter",
        "&:hover": {
          background: "$desaturatedDarkCyan",
        },
      },
      unset: {
        backgroundColor: "unset",
      },
    },
    color: {
      cyan: {
        color: "$desaturatedDarkCyan",
        "&:hover": {
          color: "white",
        },
      },
      grey: {
        color: "$darkGrayishCyan",
        "&:hover": {
          color: "$desaturatedDarkCyan",
          textDecoration: "underline",
        },
      },
    },
  },
  defaultVariants: {
    backgroundColor: "unset",
    color: "cyan",
  },
});

export default ButtonStyled;
