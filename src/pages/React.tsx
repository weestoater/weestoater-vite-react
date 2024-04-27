import React from "react";
import { GridItem, GridLayout } from "@salt-ds/core";

import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { ReactHooksPost } from "../content/react/ReactHooks";
import { NextThingPost } from "../content/react/NextThingPost";
import { SaltPost } from "../content/react/SaltPost";

export const ReactPage = () => {
  return (
    <>
      <PageTitleH1 title="React" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        <GridItem>
          <SaltPost />
        </GridItem>
        <GridItem>
          <NextThingPost />
        </GridItem>
        <GridItem>
          <ReactHooksPost />
        </GridItem>
      </GridLayout>
    </>
  );
};
