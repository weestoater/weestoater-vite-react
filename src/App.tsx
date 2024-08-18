import { SyntheticEvent, useState } from "react";
import { SaltProviderNext } from "@salt-ds/core";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Mode } from "@salt-ds/core";
//--  patterns
import { Header } from "./patterns/appheader";

//--  pages
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { A11yPage } from "./pages/A11y";
import { AgilePage } from "./pages/Agile";
import { FootballPage } from "./pages/Football";
import { ReactPage } from "./pages/React";
import { LandiePage } from "./pages/Landie";

export const App = () => {
  const [mode, setMode] = useState<Mode>("light");

  const handleChangeTheme = (event: SyntheticEvent<HTMLButtonElement>) => {
    setMode(event.currentTarget.value as Mode);
  };

  return (
    <SaltProviderNext mode={mode} corner="rounded" accent="teal">
      <HashRouter>
        <Header themechanger={handleChangeTheme} currenttheme={mode} />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/a11y" element={<A11yPage />} />
            <Route path="/agile" element={<AgilePage />} />
            <Route path="/landie" element={<LandiePage />} />
            <Route path="/football" element={<FootballPage />} />
            <Route path="/react" element={<ReactPage />} />
          </Routes>
        </main>
      </HashRouter>
    </SaltProviderNext>
  );
};
