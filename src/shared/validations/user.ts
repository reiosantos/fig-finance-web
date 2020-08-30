import * as Yup from 'yup';
import { errorMessages } from '../constants/messages';

const userValidation = Yup.object().shape({
  message: Yup.string().required('Description is required').strict(true),
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email(errorMessages.validType('email'))
    .required(errorMessages.required('email'))
    .strict(true),
  contact: Yup.string()
    .matches(/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, errorMessages.validType('mobile number'))
    .required()
    .strict(true)
});

export default userValidation;
