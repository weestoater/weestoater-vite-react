import { HashRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//--  patterns
import { Header } from "./patterns/appheader";

//--  pages
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { A11yPage } from "./pages/A11y";
import { AgilePage } from "./pages/Agile";
import { FootballPage } from "./pages/Football";
import { ReactPage } from "./pages/React";

export const App = () => {
  return (
    <HashRouter>
      <HashLink
        smooth
        to="#main-content"
        className="skip-link"
        data-testid="main-content-skip-link"
      >
        Skip to main content
      </HashLink>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/a11y" element={<A11yPage />} />
          <Route path="/agile" element={<AgilePage />} />
          <Route path="/football" element={<FootballPage />} />
          <Route path="/react" element={<ReactPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
};
