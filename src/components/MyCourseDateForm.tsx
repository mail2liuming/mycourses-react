import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Dispatcher } from '../hooks';
import { CourseFrequency, CourseRun } from '../model/CourseRegisteration';

interface CourseDateFormProps {
  courses: CourseRun[];
  frequency: CourseFrequency;
  setCourses: Dispatcher<CourseRun[]>;
  setFrequency: Dispatcher<CourseFrequency>;
}

const FrequencySelector = ({
  frequency,
  setFrequency,
}: Pick<CourseDateFormProps, 'frequency' | 'setFrequency'>) => {
  const handleFrequencyChange = (event: SelectChangeEvent) => {
    setFrequency(event.target.value as CourseFrequency);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Frenquency</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={frequency}
        label="Frequency"
        onChange={handleFrequencyChange}
      >
        {Object.keys(CourseFrequency).map((key) => {
          return <MenuItem value={key}>{key}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

const CoursesEditor = ({
  courses,
  setCourses,
}: Pick<CourseDateFormProps, 'courses' | 'setCourses'>) => {
  const updateCourse = (index: number) => (course: CourseRun) => {
    const newCourses = [...courses];
    newCourses[index] = course;
    setCourses(newCourses);
  };

  return (
    <>
      <Grid container spacing={3}></Grid>
    </>
  );
};

const CourseDateForm = ({
  courses,
  frequency,
  setCourses,
  setFrequency,
}: CourseDateFormProps) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FrequencySelector
            frequency={frequency}
            setFrequency={setFrequency}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CoursesEditor courses={courses} setCourses={setCourses} />
        </Grid>
      </Grid>
    </>
  );
};

export default CourseDateForm;
