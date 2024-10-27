import { SyntheticEvent, useState } from "react";
import { Density, Mode, SaltProviderNext } from "@salt-ds/core";
import { HashRouter, Routes, Route } from "react-router-dom";

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
  const [density, setDensity] = useState<Density>("medium");

  const handleChangeTheme = (event: SyntheticEvent<HTMLButtonElement>) => {
    setMode(event.currentTarget.value as Mode);
  };
  const handleChangeDensity = (event: SyntheticEvent<HTMLButtonElement>) => {
    setDensity(event.currentTarget.value as Density);
  };

  return (
    <SaltProviderNext
      mode={mode}
      density={density}
      corner="rounded"
      accent="teal"
    >
      <HashRouter>
        <Header
          themechanger={handleChangeTheme}
          currenttheme={mode}
          densitychanger={handleChangeDensity}
          currentdensity={density}
        />
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
