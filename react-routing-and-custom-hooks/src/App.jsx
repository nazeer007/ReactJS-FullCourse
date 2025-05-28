import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import CommentsList from "./pages/comments";
import RecipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./pages/components/layout";
import ReactHookFormExample from "./pages/react-hook-form";
import Hooks from "./pages/hooks";
import UseMemoExample from "./pages/use-memo-example";
import UseCallbackExample from "./pages/use-callback-example";
import ReactQueryDemo from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <RecipeList />,
        },
        {
          path: "comments-list",
          element: <CommentsList />,
        },
        {
          path: "recipe-list/:id",
          element: <RecipeDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExample />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/memo",
      element: <UseMemoExample />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />,
    },
  ]);
  return element;
}

function App() {
  // const navigate = useNavigate();

  return (
    <div>
      {/* <h1>React routing, Custom hooks and more</h1>
      <div>
        <Link to={"/recipe-list"}>
          Alternative way og navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Navigate to Recipe list page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Navigate to Comments list page
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      {/* <CustomRoutes /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      <ReactQueryDemo />
    </div>
  );
}

export default App;
