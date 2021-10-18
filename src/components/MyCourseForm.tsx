import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Dispatcher } from '../hooks';

interface MyCourseFormProps {
  courseName: string;
  cost: number;
  setName: Dispatcher<string>;
  setCost: Dispatcher<number>;
}

const MyCourseForm = ({
  courseName,
  cost,
  setName,
  setCost,
}: MyCourseFormProps) => {
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCost(event.target.valueAsNumber);
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
            id="cost"
            name="cost"
            label="Cost"
            fullWidth
            autoComplete="Cost of my course"
            value={cost}
            onChange={onCostChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseForm;
