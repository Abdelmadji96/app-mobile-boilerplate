import * as yup from 'yup';

const phoneRegExp = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;

const phoneSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, 'Le numéro de téléphone n’est pas valide').required('Ce champ est requis'),
});

export default phoneSchema;
