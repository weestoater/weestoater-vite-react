import { Card } from "@salt-ds/core";
import { AccessibleIcon, UniversalAccessIcon } from "@salt-ds/icons";

export const A11yMe = () => {
  return (
    <Card>
      <h2>
        <AccessibleIcon size="2" /> A11y &amp; me
      </h2>
      <div className="card-content">
        <div className="right">
          <UniversalAccessIcon size="5" />
        </div>

        <p>
          I <strong>really care</strong> about Accessibility (a11y) online and
          have done for 20+ years now.
        </p>

        <p>
          With a move to a UX team in Sep '21, I've switched direction as a web
          developer, instead of being a delivery focused front-end engineer, I'm
          working with teams as a <strong>SME</strong> (subject matter expert)
          on UI development and more importantly Web Standards &amp; a11y. As
          well as mentoring junior talent in best practices and sharing my
          extensive experience.
        </p>

        <p>
          I'm working alongside a team of designers servicing their needs for
          developer input / advice but also educating and supporting the
          products the designers work to.
        </p>
      </div>
    </Card>
  );
};
