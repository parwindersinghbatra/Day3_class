import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from './component/Contact';
import Foods from './component/Foods';
import Home from './component/Home';
import Quote from './component/Quote';
import Restaurent from './component/Restaurent';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Home
  },
  {
    path: "/Quote",
    Component:Quote
  },
  {
    path: "/Restaurent",
    Component:Restaurent
  },
  {
    path: "/Foods",
    Component:Foods
  },
  {
    path: "/Contact",
    Component:Contact
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </ >
  );
}

export default App;
