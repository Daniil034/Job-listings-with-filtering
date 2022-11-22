import { styled } from "./stitches.config";

const TextStyled = styled("p", {
  variants: {
    color: {
      cyan: {
        color: "$desaturatedDarkCyan",
      },
      white: {
        color: "#fff",
      },
      darkGrayish: {
        color: "$darkGrayishCyan",
      },
      veryDarkGrayishCyan: {
        color: "$veryDarkGrayishCyan",
      },
    },
    size: {
      13: {
        fontSize: "$1",
      },
      14: {
        fontSize: "$2",
      },
      15: {
        fontSize: "$3",
      },
      16: {
        fontSize: "$4",
      },
      18: {
        fontSize: "$5",
      },
      22: {
        fontSize: "$6",
      },
    },
    weight: {
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    transform: {
      uppercase: {
        textTransform: "uppercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
    height: {
      1: {
        lineHeight: "$1",
      },
      2: {
        lineHeight: "$2",
      },
    },
    outline: {
      cyan: {
        borderRadius: "$3",
        backgroundColor: "$desaturatedDarkCyan",
      },
      darkCyan: {
        borderRadius: "$3",
        backgroundColor: "$veryDarkGrayishCyan",
      },
    },
  },
});

export default TextStyled;
