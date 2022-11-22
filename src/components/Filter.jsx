import { useContext, useEffect } from "react";
import { StoreContext } from "./StoreContext";
import TileStyled from "../ui/TileStyled";
import FilterElementStyled from "../ui/FilterElementStyled";
import ButtonStyled from "../ui/ButtonStyled";
import FlexboxStyled from "../ui/FlexboxStyled";
import data from "../../data.json";

const Filter = () => {
  const { filterList, setFilterList, setJobsList } = useContext(StoreContext);

  useEffect(() => {
    setJobsList(
      data.filter((job) =>
        filterList.every(
          (filter) =>
            job.languages.includes(filter) ||
            job.tools.includes(filter) ||
            job.role === filter ||
            job.level === filter
        )
      )
    );
  }, [filterList]);

  const handleDelete = (value) => {
    setFilterList((prev) => prev.filter((filter) => filter !== value));
    if (filterList.length < 2) {
      document.querySelector('#filter').classList.remove('filter--active');
    }
  };

  const handleClearAll = () => {
    setFilterList([]);
    document.querySelector('#filter').classList.remove('filter--active');
  };

  return (
    <TileStyled
      padding="filterTile"
      id='filter'
      css={{ marginTop: "-100px", overflow: 'hidden',  height: '0', transition: 'padding 0.3s ease', padding: '0', marginBottom: '92px', '@bp1': {marginBottom: '112px'} }}
    >
      <FlexboxStyled justify="between" align="center" css={{ gap: "15px" }}>
        <FlexboxStyled wrap css={{ gap: "16px" }}>
          {filterList.map((filter, index) => (
            <FilterElementStyled
              key={index}
            >
              {filter}
              <ButtonStyled onClick={() => handleDelete(filter)} />
            </FilterElementStyled>
          ))}
        </FlexboxStyled>
        <ButtonStyled color="grey" onClick={handleClearAll}>
          Clear
        </ButtonStyled>
      </FlexboxStyled>
    </TileStyled>
  );
};

export default Filter;
