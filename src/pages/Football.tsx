import { GridLayout, GridItem } from "@salt-ds/core";
import { Tabs, TabPanel } from "@salt-ds/lab";
import { Calendar, SoccerBall } from "@phosphor-icons/react";

import { PageTitleH1 } from "../components/global/pageTitleHeading";
import { MatchDetails } from "../components/football/matchDetails";
import { GoalScorerDetails } from "../components/football/goalScorerDetails";

import mfcGoals from "../data/mfc-goals.json";
import mfcMatches from "../data/mfc-matches.json";
import { FootballIntro } from "../content/football/footballIntro";

export const FootballPage = () => {
  const seasons = ["2023-2024", "2022-2023", "2021-2022", "2020-2021"];

  return (
    <>
      <PageTitleH1 title="Football" />
      <FootballIntro />
      <Tabs>
        {seasons.map((item, key) => {
          return (
            <TabPanel label={item} key={key} className="tab-panels">
              <>
                <GridLayout columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
                  <GridItem>
                    <h2>
                      <Calendar size={24} />
                      &nbsp;
                      {mfcMatches[key].season} Matches
                    </h2>
                    <MatchDetails details={mfcMatches[key].details} />
                  </GridItem>
                  <GridItem>
                    <h2>
                      <SoccerBall size={24} /> {mfcGoals[key].season} Goals
                    </h2>
                    <GoalScorerDetails details={mfcGoals[key].details} />
                  </GridItem>
                </GridLayout>
              </>
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
};
