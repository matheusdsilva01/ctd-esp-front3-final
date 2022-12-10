import * as yup from "yup";
import { LocaleObject } from "yup/lib/locale";

const locale: LocaleObject = {
  mixed: {
      default: 'Campo inválido',
      required: 'Campo obrigatório',
      notType: 'Campo inválido',
      oneOf: 'Este campo não corresponde',
    },
  string: {
      email: 'Esse campo precisa ser um email válido',
      max: 'Esse campo deve ter no máximo ${max} caracteres',
      min: 'Esse campo deve ter no mínimo ${min} caracteres',
  },
  number: {
      max: 'Esse campo deve ter no máximo ${max} caracteres',
      min: 'Esse campo deve ter no mínimo ${min} caracteres',
  },
};

yup.setLocale(locale);

export const checkoutSchema = yup.object().shape({
  customer: yup.object({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email("O email é invalido").required(),
    address: yup.object({
      address1: yup.string().required(),
      address2: yup.string().nullable().notRequired(),
      city: yup.string().required(),
      state: yup.string().required(),
      zipCode: yup.string().required(),
    }),
  }),
  card: yup.object({
    number: yup.string().matches(/[0-9]+\s[0-9]+\s[0-9]+\s[0-9]/, "Formato inválido").min(19).max(19).required(),
    nameOnCard: yup.string().required(),
    expDate: yup.string()
      .required()
      .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, "Validade do cartão incorreta")
      .min(
        7,
        "Data de validade deve conter mês com 2 dígitos e ano com 4 dígitos"
      ),
    cvc: yup.string().max(3).min(3).required(),
  })
});
