# Implement schema validation with Formik

You can create a validation schema with `Yup` and use it to validate your form.

```js
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export default SignupSchema;
```
