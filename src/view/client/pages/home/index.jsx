import React from "react";
import HomepageBanner from "../../../../components/Banner/HomepageBanner";
import Courses from "../../components/Courses/CourseCard";
import Instructors from "../../components/Instructor/InstructorCard";
import Stats from "../../components/Stats/Stats";


export default function HomeScreen() {
    return (
        <>
            <HomepageBanner />
            <Stats />
            <Courses />
            <Instructors />
        </>
    );
}
  