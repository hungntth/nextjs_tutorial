import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài tối thiểu là 5 ký tự')
    .max(160, 'Độ dài tối đa là 160 ký tự'),
  password: yup
    .string()
    .required('Mật khẩu bắt buộc nhập')
    .min(6, 'Độ dài tối thiểu 6 ký tự')
    .max(160, 'Độ dài tối đa 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Xác nhận mật khẩu bắt buộc nhập')
    .min(6, 'Độ dài tối thiểu 6 ký tự')
    .max(160, 'Độ dài tối đa 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không hợp đúng'),
  name: yup
    .string()
    .required('Tên dự án bắt buộc nhập')
    .min(6, 'Độ dài tối thiểu 6 ký tự')
    .max(160, 'Độ dài tối đa 160 ký tự'),
  language_id: yup.number().required('Ngôn ngữ bắt buộc nhập'),
  code: yup
    .string()
    .required('Code dự án bắt buộc nhập')
    .min(6, 'Độ dài tối thiểu 6 ký tự')
    .max(160, 'Độ dài tối đa 160 ký tự')
})

export type Schema = yup.InferType<typeof schema>
