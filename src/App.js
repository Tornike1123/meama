import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailedScreen from "./pages/DetailedScreen.jsx";
import RootLayout from "./pages/Root";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/DetailedScreen", element: <DetailedScreen /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
