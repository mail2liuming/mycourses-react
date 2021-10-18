import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyCourseConfirm from '../components/MyCourseConfirm';
import MyCourseDateForm from '../components/MyCourseDateForm';
import MyCourseForm from '../components/MyCourseForm';
import { useAppDispatch } from '../hooks';
import { CourseRegisteration } from '../model/CourseRegisteration';
import { createCourse } from '../redux/CoursesReducer';
import { registerCourse } from '../redux/CoursesThunk';

interface CourseEditorProps {
  create: boolean;
  course?: CourseRegisteration;
}

const steps = ['Course info', 'Attending Date', 'Review your course'];

const CourseEditor = ({ create, course }: CourseEditorProps) => {
  const [step, setstep] = useState(0);
  const [name, setname] = useState(create ? '' : course!.name);
  const [date, setdate] = useState(create ? '' : course!.date);
  const [cost, setcost] = useState(create ? 0 : course!.cost);
  const [repeatable, setrepeatable] = useState(
    create ? false : course!.repeatable
  );

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handlePrev = () => {
    setstep(step - 1);
  };
  const handleNext = () => {
    if (step < 2) {
      setstep(step + 1);
    } else {
      // dispatch(
      //   registerCourse({
      //     userId: 'this is react user',
      //     courseId: 'this is react course',
      //     name,
      //     date,
      //     cost,
      //     repeatable,
      //   })
      // );
      dispatch(
        createCourse(
          'this is react user',
          'this is react course',
          name,
          date,
          true,
          cost
        )
      );
      history.push('/');
    }
  };

  const getStepComponent = () => {
    switch (step) {
      case 0:
        return (
          <MyCourseForm
            courseName={name}
            cost={cost}
            setName={setname}
            setCost={setcost}
          />
        );
      case 1:
        return (
          <MyCourseDateForm
            date={date}
            repeatable={repeatable}
            setDate={setdate}
            setRepeatable={setrepeatable}
          />
        );
      case 2:
        return (
          <MyCourseConfirm
            courseName={name}
            cost={cost}
            date={date}
            repeatable={repeatable}
          />
        );
      default:
        throw new Error('Unknow');
    }
  };

  return (
    <>
      <Stepper activeStep={step} sx={{ pt: 3, pr: 0, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepComponent()}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {step !== 0 && <Button onClick={handlePrev}>Back</Button>}
        <Button onClick={handleNext}>
          {step === steps.length - 1 ? 'Confirm' : 'Next'}
        </Button>
      </Box>
    </>
  );
};

export default CourseEditor;
