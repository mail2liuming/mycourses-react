import { Card, CardContent, Typography } from "@material-ui/core";
import { CourseRegisteration } from "../model/CourseRegisteration";

const CourseCard = ({ name, date }: CourseRegisteration) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
