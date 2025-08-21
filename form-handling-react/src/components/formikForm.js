import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      console.log("User registered:", result);
      alert("User registered successfully with Formik!");
      resetForm();
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <Field name="username" type="text" placeholder="Username" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
    }
