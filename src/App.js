import { Routes, Route } from "react-router-dom";
import CharacterContainer from './components/Pages/CharacterContainer/CharacterContainer';
import RootLayout from './components/RootLayout/RootLayout';
import HomePage from './components/Pages/HomePage/HomePage';
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>} errorElement={<ErrorPage/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/characters' element={<CharacterContainer/>}/>
      </Route>
    </Routes>
  )
}

export default App;
