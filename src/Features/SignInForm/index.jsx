import * as Yup from "yup";
import { Formik } from "formik";
import Input from "Features/Components/Input";
import Checkbox from "Features/Components/CheckBox";
import Button from "Features/Components/Button";
import logo from "app/assets/logo-r.svg";

const SignSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function isEmpty(obj) {
  return Object.keys(obj).length !== 0;
}

const SignInForm = () => (
  <div className="form">
    <div className="form__innner_wrapper">
      <img src={logo} className="form__logo" alt="logo" />
      <h1>Operations studio</h1>
      <h4>please enter your email bellow</h4>
      <Formik
        initialValues={{ email: "", rememberMe: false }}
        validationSchema={SignSchema}
        onSubmit={async (values) => {
          await sleep(500);
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="signin-form" onSubmit={handleSubmit}>
            <Input
              touched={touched.email}
              label="Email Address"
              inputType="email"
              name="email"
              handleChange={handleChange}
              value={values.email}
              error={errors.email}
            />
            <Checkbox label="Remember this device" name="rememberMe" />
            <Button
              isSubmitting={isSubmitting}
              disabled={values.email === "" || isEmpty(errors)}
              type="submit"
            >
              Sign in
            </Button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default SignInForm;
