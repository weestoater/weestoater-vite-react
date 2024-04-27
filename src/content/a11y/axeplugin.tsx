import { Card } from "@salt-ds/core";
import { AccessibleIcon, ApiIcon } from "@salt-ds/icons";

export const AxePlugin = () => {
  return (
    <Card>
      <h2>
        <AccessibleIcon size="2" /> Axe Plugin
      </h2>
      <div className="card-content">
        <div className="right">
          <ApiIcon size="5" />
        </div>
        <p>
          I believe in clean easy to read code, especially in my html. As part
          of my day job I help teams building web applications to make sure they
          are accessible and I always start off by getting their developers to
          install the Axe Tools for Chrome.
        </p>

        <p>
          This simple tool can give a great insight into issues teams are facing
          on the journey to a11y compliance. I especially like the fact that
          there are the four bandings:
        </p>
        <ol>
          <li>Critial</li>
          <li>Serious</li>
          <li>Moderage</li>
          <li>Minor</li>
        </ol>
        <p>
          The ability to drill down on individual items &amp;{" "}
          <strong>highlight</strong> any offending code is brilliant and gets
          across the issues a lot better than any text book ever could.
        </p>
      </div>
    </Card>
  );
};
