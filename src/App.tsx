import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomaPage/HomaPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { AuthProvider } from "./context/context";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* to redirect to current route if the old one is depricated */}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="posts/:id/edit" element={<EditPostPage />} />
          {/* protected route */}
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePostPage />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
