import { RouterProvider } from "react-router-dom";
import { router } from './Router/Router/Routes';


function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
