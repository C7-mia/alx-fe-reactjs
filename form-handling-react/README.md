# Form Handling in React

This project demonstrates **form handling in React** using two approaches:
1. **Controlled Components** – Managing form state manually with `useState`.
2. **Formik + Yup** – Advanced form handling with validation.

The app includes a **user registration form** with fields for:
- Username
- Email
- Password

Both forms simulate user registration by sending data to a **mock API endpoint** (`https://jsonplaceholder.typicode.com/users`).

---

## 📂 Project Structure
form-handling-react/ └── src/ ├── components/ │   ├── RegistrationForm.jsx   # Controlled components form │   └── FormikForm.jsx         # Formik + Yup form ├── App.jsx └── main.jsx

