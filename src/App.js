import {Route, Routes } from "react-router-dom";
import { Cadastro } from "./cadastrarstudio"
import {Navegacao} from "./navegacao"
import {Login} from './login'
import { Signup } from "./signup";


function App() {
  return <Routes>
    <Route/>
    <Route path="/" element={<Navegacao/> }/>
    <Route path="/cadastro" element={<Cadastro/> }/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>

  </Routes>
}

export default App;
