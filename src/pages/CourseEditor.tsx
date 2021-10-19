import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MyCourseConfirm from '../components/MyCourseConfirm';
import MyCourseDateForm from '../components/MyCourseDateForm';
import MyCourseForm from '../components/MyCourseForm';
import { useAppDispatch } from '../hooks';
import {
  CourseFrequency,
  CourseRegisteration,
  CourseRun,
} from '../model/CourseRegisteration';
import { createCourse } from '../redux/CoursesReducer';
import { registerCourse } from '../redux/CoursesThunk';

interface CourseEditorProps {
  create: boolean;
  course?: CourseRegisteration;
}

const steps = ['Course info', 'Attending Date', 'Review your course'];

const CourseEditor = ({ create, course }: CourseEditorProps) => {
  const [step, setstep] = useState(0);

  const [name, setname] = useState(create ? '' : course!.courseName);
  const [kid, setkid] = useState(create ? '' : course!.kidName);
  const [frequency, setFrequency] = useState(
    create ? CourseFrequency.WEEKLY : course!.frequency
  );
  const [courseRun, setCourseRun] = useState(create ? [] : course!.courses);

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
        createCourse('this is react user', name, kid, frequency, courseRun)
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
            kidName={kid}
            setName={setname}
            setKid={setkid}
          />
        );
      case 1:
        return (
          <MyCourseDateForm
            frequency={frequency}
            courses={courseRun}
            setFrequency={setFrequency}
            setCourses={setCourseRun}
          />
        );
      case 2:
        return (
          // <MyCourseConfirm
          //   courseName={name}
          //   cost={cost}
          //   date={date}
          //   repeatable={repeatable}
          // />
          <></>
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
