import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../../shared/SectionTitle";
import EducationCard from "./EducationCard";
import { SlGraduation } from "react-icons/sl";
import useFetchJSONData from "../../../hooks/useFetchJSONData";
import Loader from "../../../shared/Loader";

const Educations = () => {
  const [educations, isLoading] = useFetchJSONData(
    "education.json",
    "education"
  );
  // console.log(educations);

  return (
    <div className="space-y-4">
      {isLoading && <Loader></Loader>}
      <SectionTitle sectionName={"Academic Journey"}></SectionTitle>
      <VerticalTimeline
        layout="1-column-left"
        animate={true}
        lineColor="rgb(39, 39, 42)"
      >
        {educations.map((education, idx) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(24, 24, 27)", color: "#ffff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(24, 24, 27)" }}
            iconStyle={{ background: "rgb(163, 230, 53)", color: "#fff" }}
            icon={<SlGraduation />}
            key={idx}
          >
            <EducationCard education={education}></EducationCard>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Educations;
