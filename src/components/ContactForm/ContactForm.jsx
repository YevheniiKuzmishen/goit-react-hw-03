import { Form, Formik, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

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
      <Form>
        <div>
          <div>
            <label name="contactname">Name</label>
            <Field type="text" name="contactname" />
            <ErrorMessage
              //   className={}
              name="contactname"
              component="span"
            />
          </div>
          <div>
            <label name="contactnumber">Number</label>
            <Field type="tel" name="contactnumber" placeholder="888-88-88" />
            <ErrorMessage
              //   className={}
              name="contactnumber"
              component="span"
            />
          </div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
