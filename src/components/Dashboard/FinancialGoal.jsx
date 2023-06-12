import React from "react";
import { Doughnut } from "react-chartjs-2";

const FinancialGoal = ({ goalAmount, goalPercentage }) => {
  console.log(goalAmount, goalPercentage, "goalamount", "goalpercentage");
  const currentDifference = 100 - goalPercentage;
  const data = {
    labels: ["Current", "Goal"],
    datasets: [
      {
        label: "Progression",
        data: [goalPercentage, 100 - goalPercentage],
        backgroundColor: ["#4caf50", "#f1f1f1"],
        borderWidth: 0,
      },
    ],
  };
  const plugins = [
    {
      id: "custom-text",
      beforeDraw: (chart) => {
        let ctx = chart.ctx;
        let chartArea = chart.chartArea;
        let width = chart.width;
        let height = chart.height;

        let goalPercent = chart.options.plugins.goalPercentage;

        ctx.restore();
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${goalPercent + "%"}`, width / 2, height / 2);
        ctx.save();
      },
    },
  ];
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      goalPercentage: goalPercentage,
    },
  };
  return (
    <div className="dashboard-background p-3">
      <h2 className="text-center mb-5">Monthly Goal Progression</h2>

      <Doughnut
        id="doughnutChart"
        data={data}
        options={options}
        plugins={plugins}
      />

      <div className="mt-5 text-center">
        <span className="goal-amount-label font-bold">Goal Amount:</span>
        <span className="goal-amount-value ml-2">{goalAmount}</span>
      </div>
    </div>
  );
};

export default FinancialGoal;
