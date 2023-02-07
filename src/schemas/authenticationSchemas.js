import Joi from "joi";

export const authenticationSchema = Joi.object({
  nickname: Joi.string()
    .min(6)
    .max(32)
    .regex(/^[a-z]+$/)
    .required(),
  password: Joi.string().min(6).max(12).required(),
});
