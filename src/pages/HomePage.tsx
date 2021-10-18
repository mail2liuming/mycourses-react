import { Box } from '@mui/material';
import CourseCard from '../components/CourseCard';
import { useAppSelector } from '../hooks';

const HomePage = () => {
  const courses = useAppSelector((state) => state.courses);
  return (
    <Box sx={{ flex: '1' }}>
      {courses.map((course) => (
        <CourseCard key={course.courseId} {...course} />
      ))}
    </Box>
  );
};

export default HomePage;
