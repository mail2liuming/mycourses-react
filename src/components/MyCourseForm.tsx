import { Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Dispatcher } from "../hooks";

interface MyCourseFormProps {
  courseName: string;
  address: string;
  setName: Dispatcher<string>;
  setAddress: Dispatcher<string>;
}

const MyCourseForm = ({
  courseName,
  address,
  setName,
  setAddress,
}: MyCourseFormProps) => {
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        My course details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseName"
            name="courseName"
            label="Course Name"
            fullWidth
            autoComplete="My new course"
            value={courseName}
            onChange={onNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="Address of my course"
            value={address}
            onChange={onAddressChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseForm;
