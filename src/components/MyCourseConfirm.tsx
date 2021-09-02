import { Grid, Typography } from "@material-ui/core";
import React from "react";

interface MyCourseConfirmProps {
  courseName: string;
  address: string;
  date: string;
  repeatable: boolean;
}

const MyCourseConfirm = ({
  courseName,
  address,
  date,
  repeatable,
}: MyCourseConfirmProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Name: {courseName}
            Address: {address}
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
