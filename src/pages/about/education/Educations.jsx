import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionTitle from "../../../shared/SectionTitle";
import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import EducationCard from "./EducationCard";
import { SlGraduation } from "react-icons/sl";

const Educations = () => {
  const educationData = [
    {
      title: "Diploma of Computer Science in Engineering",
      institution: "Sherpur Polytechnic Institute",
      location: "Sherpur, Bangladesh",
      duration: "2019 - 2023",
      cgpa: "3.85/4.00",
      achievements: [
        "First Class First Position",
        "Dean’s List Award for Academic Excellence",
        "Best Project Award in Final Year",
      ],
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Artificial Intelligence",
      ],
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Ideal College",
      location: "Dhaka, Bangladesh",
      duration: "2016 - 2018",
      cgpa: "4.96/5.00",
      achievements: ["Board Merit List"],
    },
  ];
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
