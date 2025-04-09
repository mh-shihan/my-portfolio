import useFetchData from "./useFetchData";

const useFetchResume = () => {
  const [resume, isLoading, refetch] = useFetchData("/resume", "resume");
  const resume_url = resume.resume_url;
  return { resume_url, isLoading, refetch };
};

export default useFetchResume;
