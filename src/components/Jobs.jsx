import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import JobTile from "./JobTile";

const Jobs = () => {
  const { jobsList, setJobsList, setFilterList } = useContext(StoreContext);

  return (
    <>
      {jobsList.map((job) => (
        <JobTile
          job={job}
          setJobsList={setJobsList}
          setFilterList={setFilterList}
          key={job.id}
        />
      ))}
    </>
  );
};

export default Jobs;
