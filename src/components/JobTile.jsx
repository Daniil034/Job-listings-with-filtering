import Logo from "../ui/LogoStyled";
import TileStyled from "../ui/TileStyled";
import FlexboxStyled from "../ui/FlexBoxStyled";
import TextStyled from "../ui/TextStyled";
import DecorationDot from "../ui/DecorationDot";
import ButtonStyled from "../ui/ButtonStyled";

const JobTile = ({ job, setFilterList }) => {
  const {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const handleClick = (props) => {
    setFilterList((prev) => {
      if (prev.indexOf(props) === -1) return [...prev, props];
      else return [...prev];
    });
    document.querySelector("#filter").classList.add('filter--active')
  };

  return (
    <TileStyled
      css={{ marginBottom: "40px", "@bp1": { marginBottom: "24px" } }}
      featured={featured}
    >
      <FlexboxStyled
        direction={{ "@initial": "column", "@bp1": "row" }}
        align={{ "@bp1": "center" }}
        justify={{ "@bp1": "between" }}
        css={{ gap: "25px" }}
      >
        <FlexboxStyled align="center" css={{ gap: "24px", flexShrink: "0" }}>
          <Logo src={`../src/assets/${logo.slice(9)}`} alt="logo" />
          <FlexboxStyled
            direction="column"
            underlined
            css={{ gap: "8px", width: "100%" }}
          >
            <FlexboxStyled direction="row" align="center" css={{ gap: "33px" }}>
              <TextStyled
                color="cyan"
                size={{ "@initial": "13", "@bp1": "18" }}
                weight="bold"
              >
                {company}
              </TextStyled>
              <FlexboxStyled direction="row" css={{ gap: "8px" }}>
                {isNew && (
                  <TextStyled
                    color="white"
                    size="14"
                    weight="bold"
                    outline="cyan"
                    radius="12"
                    transform="uppercase"
                    css={{ padding: "7px 8px 3px" }}
                  >
                    New
                  </TextStyled>
                )}
                {featured && (
                  <TextStyled
                    color="white"
                    size="14"
                    weight="bold"
                    outline="darkCyan"
                    radius="12"
                    transform="uppercase"
                    css={{ padding: "7px 8px 3px" }}
                  >
                    Featured
                  </TextStyled>
                )}
              </FlexboxStyled>
            </FlexboxStyled>
            <TextStyled
              color="veryDarkGrayishCyan"
              height="2"
              size={{ "@initial": "15", "@bp1": "22" }}
              weight="bold"
              transform="capitalize"
            >
              {position}
            </TextStyled>
            <FlexboxStyled align="center" css={{ gap: "10px" }}>
              <TextStyled
                color="darkGrayish"
                size={{ "@initial": "16", "@bp1": "18" }}
                weight="medium"
                height="2"
                decoration="dot"
              >
                {postedAt}
              </TextStyled>
              <DecorationDot />
              <TextStyled
                color="darkGrayish"
                size={{ "@initial": "16", "@bp1": "18" }}
                weight="medium"
                height="2"
                decoration="dot"
              >
                {contract}
              </TextStyled>
              <DecorationDot />
              <TextStyled
                color="darkGrayish"
                size={{ "@initial": "16", "@bp1": "18" }}
                weight="medium"
                height="2"
                decoration="dot"
              >
                {location}
              </TextStyled>
            </FlexboxStyled>
          </FlexboxStyled>
        </FlexboxStyled>
        <FlexboxStyled wrap justify={{ "@bp1": "end" }} css={{ gap: "16px" }}>
          <ButtonStyled
            backgroundColor="lightGrayishCyan"
            onClick={() => handleClick(role)}
          >
            {role}
          </ButtonStyled>
          <ButtonStyled
            backgroundColor="lightGrayishCyan"
            onClick={() => handleClick(level)}
          >
            {level}
          </ButtonStyled>
          {languages.map((language, index) => (
            <ButtonStyled
              backgroundColor="lightGrayishCyan"
              onClick={() => handleClick(language)}
              key={index}
            >
              {language}
            </ButtonStyled>
          ))}{" "}
          {tools.map((tool, index) => (
            <ButtonStyled
              backgroundColor="lightGrayishCyan"
              onClick={() => handleClick(tool)}
              key={index}
            >
              {tool}
            </ButtonStyled>
          ))}{" "}
        </FlexboxStyled>
      </FlexboxStyled>
    </TileStyled>
  );
};

export default JobTile;
