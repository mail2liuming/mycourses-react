import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Course } from "../model/Course";

const CourseCard = ({ id, name, date }: Course) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
