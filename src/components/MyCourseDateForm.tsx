import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Dispatcher } from '../hooks';

interface MyCourseDateFormProps {
  date: string;
  repeatable: boolean;
  setDate: Dispatcher<string>;
  setRepeatable: Dispatcher<boolean>;
}

const MyCourseDateForm = ({
  date,
  repeatable,
  setDate,
  setRepeatable,
}: MyCourseDateFormProps) => {
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);
  const onRepeatableChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRepeatable(e.target.checked);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        My course details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            autoComplete="My course date"
            value={date}
            onChange={onDateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            label="Repeatable"
            value="repeatable"
            control={
              <Checkbox
                checked={repeatable}
                onChange={onRepeatableChange}
                name="repeatable"
              />
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MyCourseDateForm;
