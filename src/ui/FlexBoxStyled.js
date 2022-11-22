import { styled } from "./stitches.config";

const FlexboxStyled = styled("div", {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    justify: {
      between: {
        justifyContent: "space-between",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
    underlined: {
      true: {
        paddingBottom: "16px",
        marginBottom: "16px",
        borderBottom: "1px solid $halfDarkGrayishCyan",
        "@bp1": {
          paddingBottom: "0",
          marginBottom: "0",
          borderBottom: "none",
        },
      },
    },
  },
});

export default FlexboxStyled;
