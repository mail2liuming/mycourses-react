import { Box, Grid } from '@mui/material';
import CourseCard from '../components/CourseCard';
import { useAppSelector } from '../hooks';
import CourseScheduler from './CourseScheduler';

const HomePage = () => {
  const courses = useAppSelector((state) => state.courses);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box sx={{ flex: '1', display: 'flex' }}>
          {courses.map((course) => (
            <CourseCard key={course.courseName} {...course} />
          ))}
        </Box>
      </Grid>
      <Grid item md={8}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <CourseScheduler />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
