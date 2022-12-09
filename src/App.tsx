import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomaPage/HomaPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="posts/:id/edit" element={<EditPostPage />} />
          <Route path="posts/new" element={<CreatePostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
