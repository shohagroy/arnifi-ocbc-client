import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const generateFormValidator = (formData) => {
  const validationSchema = {};

  const createValidationSchema = (field, path = "") => {
    const fieldPath = path ? `${path}.${field.name}` : field.name;

    switch (field.type) {
      case "object":
        validationSchema[fieldPath] = yup.object().shape({});
        Object.keys(field.fields).forEach((nestedField) => {
          createValidationSchema(field.fields[nestedField], fieldPath);
        });
        break;
      case "string":
        validationSchema[fieldPath] = stringValidation(field);
        break;

      // Add cases for other types if needed

      default:
        break;
    }
  };

  const stringValidation = (field) => {
    let schema = yup.string();

    if (field.required) {
      schema = schema.required(field.errorText || "This field is required");
    }

    // Add more validations based on your field properties if needed

    return schema;
  };

  Object.values(formData).forEach((field) => {
    createValidationSchema(field);
  });

  // Return the Yup schema for the specific field
  return validationSchema.fullName || yup.object();
};
