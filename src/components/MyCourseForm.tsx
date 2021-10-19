import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Dispatcher } from '../hooks';

interface MyCourseFormProps {
  courseName: string;
  kidName: string;
  setName: Dispatcher<string>;
  setKid: Dispatcher<string>;
}

const MyCourseForm = ({
  courseName,
  kidName,
  setName,
  setKid,
}: MyCourseFormProps) => {
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onKidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKid(event.target.value);
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
            id="kid"
            name="Kid Name"
            label="Kid Name"
            fullWidth
            autoComplete="Your kid's Name"
            value={kidName}
            onChange={onKidChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseForm;
