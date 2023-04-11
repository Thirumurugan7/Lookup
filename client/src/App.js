import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="max-w-full max-h-full">
      <h1 className="bg-blue-500 text-white text-center">Crypto Sphere</h1>
      <div className="flex justify-center items-center w-6/6 h-screen bg-blue-300">
        <Form />
      </div>
    </div>
  );
}

export default App;
