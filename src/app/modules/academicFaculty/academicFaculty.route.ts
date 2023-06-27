import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
const router = express.Router();

router.post(
  '/create-faculty',
  //   validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicFacultyController.createFaculty
);

export const AcademicFacultyRoutes = router;
