import * as yup from 'yup';

const loginFormValidationSchema = yup.object().shape({
  password: yup.string().min(6, 'Le mot de passe doit être au moins de 6 caractères').required('Ce champ est requis'),
  email: yup.string().email('Adresse mail invalide').required('Ce champ est requis'),
});

export default loginFormValidationSchema;
