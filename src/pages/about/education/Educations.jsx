import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../../shared/SectionTitle";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import EducationCard from "./EducationCard";
import { SlGraduation } from "react-icons/sl";
import useFetchData from "../../../hooks/useFetchData";

const Educations = () => {
  const [educations, isLoading] = useFetchData("education.json", "education");
  console.log(educations);
  return (
    <div className="space-y-4">
      <SectionTitle sectionName={"Eduaction & Qualifications"}></SectionTitle>
      <VerticalTimeline
        layout="1-column-left"
        animate={true}
        lineColor="rgb(39, 39, 42)"
      >
        {/* Vertical Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(163, 230, 53)", color: "#fff" }}
          icon={<WorkflowIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        {/* Vertical Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(24, 24, 27)", color: "#ffff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(24, 24, 27)" }}
          iconStyle={{ background: "rgb(163, 230, 53)", color: "#fff" }}
          icon={<SlGraduation />}
        >
          <EducationCard></EducationCard>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Educations;
