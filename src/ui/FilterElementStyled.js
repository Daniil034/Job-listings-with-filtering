import { styled } from "./stitches.config";
import imgURL from '../assets/icon-remove.svg';

const FilterElementStyled = styled("div", {
  fontSize: "$4",
  fontWeight: "$bold",
  lineHeight: "$2",
  padding: "5px 7px 3px",
  overflow: "hidden",
  padding: "0 0 0 7px",
  borderRadius: "$1",
  color: "$desaturatedDarkCyan",
  display: "flex",
  gap: "7px",
  alignItems: "center",
  backgroundColor: "$lightGrayishCyanFilter",
  "&:hover": {
    color: "$desaturatedDarkCyan",
    backgroundColor: "$lightGrayishCyanFilter",
  },
  [`& > button`]: {
    backgroundColor: "$desaturatedDarkCyan",
    backgroundImage: `url('${imgURL}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "32px",
    height: "32px",
    outline: "0",
    border: "0",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "$veryDarkGrayishCyan",
    },
  },
});

export default FilterElementStyled;
