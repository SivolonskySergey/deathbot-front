import * as yup from 'yup';
import { AppErrors } from '../../common/errors';

export const LoginSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      AppErrors.InvalidPassword,
    ),
});

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[a-zA][a-zA-Z0-9-_]{3,23}$/, AppErrors.InvalidUsername)
    .required(AppErrors.RequiredField),
  password: yup
    .string()
    .min(8, AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      AppErrors.InvalidPassword,
    ),
  confirmPassword: yup
    .string()
    .min(8, AppErrors.minLength)
    .required(AppErrors.RequiredField)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
      AppErrors.InvalidPassword,
    ),
  name: yup.string().required(AppErrors.RequiredField),
  username: yup.string().required(AppErrors.RequiredField),
});
