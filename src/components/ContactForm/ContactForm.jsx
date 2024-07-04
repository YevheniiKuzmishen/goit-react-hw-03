import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./Contactform.module.css";

export default function ContactForm({ onAdd }) {
  const contactShema = Yup.object().shape({
    contactname: Yup.string()
      .min(3, "Minimum 3 symbols!")
      .max(50, "Maximum 50 symbols!")
      .required("Name is required"),
    contactnumber: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format should be 888-88-887")
      .required("Number is required"),
  });
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.contactname,
      number: values.contactnumber,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        contactname: "",
        contactnumber: "",
      }}
      validationSchema={contactShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formBox}>
          <div>
            <label className={css.label} name="contactname">
              Name
            </label>
            <Field className={css.input} type="text" name="contactname" />
            <ErrorMessage
              className={css.formError}
              name="contactname"
              component="span"
            />
          </div>
          <div>
            <label className={css.label} name="contactnumber">
              Number
            </label>
            <Field
              className={css.input}
              type="tel"
              name="contactnumber"
              placeholder="888-88-88"
            />
            <ErrorMessage
              className={css.formError}
              name="contactnumber"
              component="span"
            />
          </div>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
