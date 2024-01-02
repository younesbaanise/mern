import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./createStudent";
import UpdateUser from "./updateStudent";
import Display from "./Display";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
