import { Grid, TextField } from '@mui/material';
import React from 'react';
import { Dispatcher } from '../hooks';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import { CourseRun } from '../model/CourseRegisteration';

interface MyCourseDateFormProps {
  course: CourseRun;
  updateCourse: (course: CourseRun) => void;
}

const MyCourseDateFormRow = ({
  course,
  updateCourse,
}: MyCourseDateFormProps) => {
  const onCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address: "
            fullWidth
            autoComplete="My course address"
            value={course.address}
            onChange={onAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cost"
            name="cost"
            label="Cost: "
            fullWidth
            autoComplete="My course address"
            value={course.cost}
            onChange={onCostChange}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker: "
              value={course.date}
              onChange={(newDate) => {}}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseDateFormRow;
