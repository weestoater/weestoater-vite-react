import { GridItem, GridLayout } from "@salt-ds/core";
import { PageTitleH1 } from "../components/global/pageTitleHeading";

import { EarlyAge } from "../content/landie/earlyage";
import { BirthdayTreat } from "../content/landie/birthdaytreat";

export const LandiePage = () => {
  return (
    <>
      <PageTitleH1 title="Land Rovers" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        <GridItem>
          <BirthdayTreat />
        </GridItem>
        <GridItem>
          <EarlyAge />
        </GridItem>
      </GridLayout>
    </>
  );
};
