import { GridItem, GridLayout } from "@salt-ds/core";

import { PageTitleH1 } from "../components/global/pageTitleHeading";

import { AgilePractices } from "../content/agile/agilepractices";
import { MobRulesContent } from "../content/agile/mobrules";
import { LessonsLearnedContent } from "../content/agile/lessonslearned";

export const AgilePage = () => {
  return (
    <>
      <PageTitleH1 title="Agile articles" />

      <GridLayout columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}>
        <GridItem>
          <AgilePractices />
        </GridItem>
        <GridItem>
          <MobRulesContent />
        </GridItem>
        <GridItem>
          <LessonsLearnedContent />
        </GridItem>
      </GridLayout>
    </>
  );
};
