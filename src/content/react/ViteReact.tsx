import { Card } from "@salt-ds/core";
import {
  Atom,
  FileJs,
  FileTsx,
  TestTube,
  WifiHigh,
} from "@phosphor-icons/react";
import viteLogo from "../../assets/img/logo-with-shadow.png";

export const ViteContent = () => {
  return (
    <Card>
      <h2>
        <Atom size={32} /> Vite + React-ts
      </h2>
      <div className="card-content">
        <img src={viteLogo} className="right" alt="Vite logo" />
        <p>
          I've been messing about with{" "}
          <a href="http://vite.dev" target="_blank" rel="noreferrer">
            Vite
          </a>{" "}
          at work on a couple of projects and I'm really beginning to enjoy it.
        </p>
        <p>
          I've not begun putting in any <code>vitest</code> scripts yet, so I
          might need to review / update my opinion on it after that, but at the
          time of writing <strong>weestoater</strong> is being converted from:-
        </p>
        <div className="right">
          <FileJs size={64} />
        </div>
        <ul>
          <li>react-js</li>
          <li>salt-ds</li>
          <li>webpack</li>
          <li>jest</li>
        </ul>
        <p>to a slightly different config of:-</p>
        <div className="right">
          <FileTsx size={64} />
        </div>
        <ul>
          <li>
            <strong>react-ts</strong>
          </li>
          <li>salt-ds</li>
          <li>
            <strong>vite</strong>
          </li>
          <li>
            <strong>vitest</strong>
          </li>
        </ul>
        <p>
          So far, converting to <code>TS</code> has had minimal impact, but I
          currently have 75+% test coverage on the webpack version - so need to
          replicate that in <code>vitest</code> - which I've never used.
        </p>
        <div className="right">
          <TestTube size={64} />
        </div>
        <p>
          I do like the <code>@testing-library/react</code> package so hopefully
          it won't be a total rewrite, just some config settings or similar.
        </p>
        <p>
          <em>Also</em>, I'm thinking of refactoring the <code>Sass</code> for
          compiling my <code>css</code> and switching to variables instead.
        </p>
        <div className="left">
          <WifiHigh size={64} />
        </div>
        <p>
          Basically, trying to minimise the amount of bandwidth I'm using for
          the site, so compression and 'waste' management are the drivers.
        </p>
      </div>
    </Card>
  );
};
