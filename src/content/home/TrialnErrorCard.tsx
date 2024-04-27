import { Card } from "@salt-ds/core";
import { CutIcon } from "@salt-ds/icons";

export const TrialnErrorCard = () => {
  return (
    <Card>
      <h2>
        <CutIcon size="2" /> trial &amp; error
      </h2>
      <div className="card-content">
        <p>
          Ideally I want to learn as much as possible in building this site, as
          I have the freedom to make as many mistakes as I like.
        </p>
        <p>
          Afterall, it's only a <code>git pull</code> away from being removed or
          over-written, so I don't want to be precious.
        </p>
        <p>
          I've learned enough about AWS to know I <em>don't</em> want to use it
          for my personal sites anymore. But also enough to appreciate and
          understand how to use it in my works capacity.
        </p>
      </div>
    </Card>
  );
};
