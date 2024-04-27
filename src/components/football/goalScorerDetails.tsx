import { AgChartsReact } from "ag-charts-react";
import { GoalScorersDetails } from "../../interfaces/interfaces";

export const GoalScorerDetails = (props: any) => {
  const details: GoalScorersDetails = props.details ? props.details : null;

  const _options: any = {
    data: details,
    title: {
      enabled: true,
      text: "Goal Scorers",
    },
    autoSize: true,
    series: [
      {
        type: "pie",
        angleKey: "goals",
        calloutLabelKey: "player",
        strokeWidth: 5,
        strokeOpacity: 0.5,
        sectorLabelKey: "goals",
        sectorLabel: {
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        },
        innerRadiusOffset: -70,
        innerCircle: {
          fill: "#ececec",
        },
      },
    ],
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10,
    },
    legend: {
      position: "bottom",
      spacing: 20,
    },
    theme: {},
  };

  return (
    <div className="goal-scorers" data-testid="goalscorers-pie-chart">
      <AgChartsReact options={_options} />
    </div>
  );
};
