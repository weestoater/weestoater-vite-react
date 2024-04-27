import { Card } from "@salt-ds/core";
import { CropsIcon } from "@salt-ds/icons";

export const EthosCard = () => {
  return (
    <Card>
      <h2>
        <CropsIcon size="2" /> Ethos
      </h2>
      <div className="card-content">
        <p>
          I started this space as an online area for me to experiment with
          ReactJS and data 'patterns' <strike>on AWS</strike>. I've not got any
          desire to add a database or other server-side mechanisms - instead I
          want to concentrate purely on the front end aspects of rendering JSON
          payloads.
        </p>
        <p>
          There isn't any roadmap of what I will build, but I am iterating
          around the football details, using the Motherwell F.C. results as my
          data source. I am 'hand-rolling' the data into two
          <code>.json</code> files:
        </p>
        <ul>
          <li>mfc-goals</li>
          <li>mfc-matches</li>
        </ul>
        <p>
          then creating a number of components to render the results onto the
          page. This works well for me so I've moved off AWS and am hosting
          elsewhere instead.
        </p>
      </div>
    </Card>
  );
};
