import { Grid, Typography } from "@material-ui/core";
import React from "react";

interface MyCourseConfirmProps {
  courseName: string;
  cost: number;
  date: string;
  repeatable: boolean;
}

const MyCourseConfirm = ({
  courseName,
  cost,
  date,
  repeatable,
}: MyCourseConfirmProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Name: {courseName}
            Cost: {cost}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Date: {date}
            Repeatable: {repeatable}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseConfirm;
