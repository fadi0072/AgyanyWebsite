import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s]+$/, 'Invalid phone number')
    .required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  inquiry: Yup.string().required('Inquiry is required'),
});
