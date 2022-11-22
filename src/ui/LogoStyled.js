import { styled } from "./stitches.config";

const Logo = styled("img", {
  display: "block",
  position: "absolute",
  width: "48px",
  top: "-24px",
  "@bp1": {
    position: "relative",
    width: "88px",
    top: "0",
  },
});

export default Logo;
