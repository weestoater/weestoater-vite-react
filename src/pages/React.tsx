import { GridItem, GridLayout } from "@salt-ds/core";

import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { ReactHooksPost } from "../content/react/ReactHooks";
import { NextThingPost } from "../content/react/NextThingPost";
import { SaltPost } from "../content/react/SaltPost";
import { ViteContent } from "../content/react/ViteReact";
// import { WSGridComponent } from "../components/global/ag-grid-component";

export const ReactPage = () => {
  // const mockData: any = [
  //   { name: "Ian Burrett", age: 51 },
  //   { name: "Lisa Burrett", age: 46 },
  //   { name: "Angus Burrett", age: 14 },
  //   { name: "Orla Burrett", age: 11 },
  // ];
  return (
    <>
      <PageTitleH1 title="React articles" />
      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        {/* <GridItem>
          <WSGridComponent data={mockData} />
        </GridItem> */}
        <GridItem>
          <ViteContent />
        </GridItem>
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
