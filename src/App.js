import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterContainer from './components/Pages/CharacterContainer/CharacterContainer';
import RootLayout from './components/RootLayout/RootLayout';
import HomePage from './components/Pages/HomePage/HomePage';
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/characters', element: <CharacterContainer/> }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
