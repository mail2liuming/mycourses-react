import { makeStyles } from "@material-ui/core";
import React from "react";
import CourseCard from "../components/CourseCard";
import { useAppSelector } from "../hooks";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flex: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const courses = useAppSelector((state) => state.courses);
  return (
    <div className={classes.page}>
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default HomePage;
