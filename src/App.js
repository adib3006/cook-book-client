import { RouterProvider } from "react-router-dom";
import { router } from './Router/Router/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
