import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiErrors';
import {
  IAcademicFaculty,
  IAcademicFacultyModel,
} from './academicFaculty.interface';

const academicFacultySchema = new Schema<
  IAcademicFaculty,
  IAcademicFacultyModel
>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// pre hook always model er upore use korte hobe
academicFacultySchema.pre('save', async function (next) {
  const isExist = await AcademicFaculty.findOne({
    title: this.title,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Faculty is already exist !'
    );
  }
  next(); // this next is mongoose function
});

export const AcademicFaculty = model<IAcademicFaculty, IAcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
);
