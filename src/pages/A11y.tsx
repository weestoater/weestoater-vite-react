import { GridItem, GridLayout } from "@salt-ds/core";

import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { A11yMe } from "../content/a11y/a11yme";
import { A11yPromotion } from "../content/a11y/a11ypromotion";
import { AxePlugin } from "../content/a11y/axeplugin";
import { A11yTech } from "../content/a11y/a11itech";
import { ScreenReaders } from "../content/a11y/screenreaders";

export const A11yPage = () => {
  return (
    <>
      <PageTitleH1 title="Accessibility (a11y)" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        <GridItem>
          <ScreenReaders />
        </GridItem>
        <GridItem>
          <A11yTech />
        </GridItem>
        <GridItem>
          <A11yMe />
        </GridItem>
        <GridItem>
          <A11yPromotion />
        </GridItem>
        <GridItem>
          <AxePlugin />
        </GridItem>
      </GridLayout>
    </>
  );
};
