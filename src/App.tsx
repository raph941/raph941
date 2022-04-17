import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { useThemeMode } from "./hooks/useThemeMode";
import { Blog, Contact, Home, Portfolio, Resume } from "./pages";
import MainThemeProvider from "./styles/MainThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import RaphaelAvatar from "./assets/images/RaphaelAvatar.png";

const userData = {
  title: "Web Developer",
  name: "Raphael Ehindero",
  bio: "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.  ",
  imgSrc: RaphaelAvatar,
};

const App = () => {
  const { theme } = useThemeMode();

  return (
    <MainThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title={userData?.title}
              name={userData?.name}
              bio={userData?.bio}
              imgSrc={userData?.imgSrc}
            />
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainThemeProvider>
  );
};

export default App;
