import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Form Handling in React</h1>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
