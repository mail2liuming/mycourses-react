import { Card, CardContent, Typography } from '@mui/material';
import { CourseRegisteration } from '../model/CourseRegisteration';

const CourseCard = ({ courseName, kidName }: CourseRegisteration) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{courseName}</Typography>
        <Typography variant="h6">{kidName}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
