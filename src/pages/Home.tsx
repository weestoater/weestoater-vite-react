import React from "react";
import { GridItem, GridLayout } from "@salt-ds/core";

import { PageTitleH1 } from "../components/global/pageTitleHeading";

import { EthosCard } from "../content/home/EthosCard";
import { TrialnErrorCard } from "../content/home/TrialnErrorCard";

export const HomePage = () => {
  return (
    <>
      <PageTitleH1 title="Welcome" hidden={true} />
      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        <GridItem>
          <EthosCard />
        </GridItem>
        <GridItem>
          <TrialnErrorCard />
        </GridItem>
      </GridLayout>
    </>
  );
};
