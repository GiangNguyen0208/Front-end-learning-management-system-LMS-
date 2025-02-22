import React from "react";
import Header from "../../../../components/Header/Header";
import HomepageBanner from "../../../../components/Banner/HomepageBanner";
import Courses from "../../components/Courses/CourseCard";
import Instructors from "../../components/Instructor/InstructorCard";
import Footer from "../../../../components/Footer/Footer";


export default function HomeScreen() {
    return (
        <>
            <Header />
            <HomepageBanner />
            <Courses/>
            <Instructors />
            <Footer />
        </>
    );
}
  