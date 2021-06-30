import Joi, { number, ObjectSchema } from "joi";

export const registerCollege = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  authUser: Joi.string().required(),
  contactNumber: Joi.required(),
  
});

// export const loginValidator = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
// });


// export const loginSubAdminValidator = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
//   businessId:Joi.string().required()
// });

// export const validateEmailLinkValidator = Joi.object({
//   token: Joi.string().required(),
//   userType :Joi.string().required(),
//   email:Joi.string().email(),
//   newPassword :Joi.string().required()
// });

// // export const customerSignUpValidator = Joi.object({
// //   firstName: Joi.string().required(),
// //   lastName: Joi.string().required(),
// //   email: Joi.string().required(),
// //   password: Joi.string().required(),
// //   contactNumber: Joi.string().optional(),
// // });

// export const googleLoginValidator = Joi.object({
//   id_token: Joi.string().required(),
// });

// export const forgotPasswordValidator = Joi.object({
//   email:Joi.string().email().required()
// })

// export const deleteCustomerValidator  =Joi.object({email:Joi.string().email().required()})