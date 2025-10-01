"use client";

import { DASHBOARD_DATA, FollowerDataPoint } from "@/data/dashboard-data";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const { followerChartData: data } = DASHBOARD_DATA;

const formatYAxis = (tick: number | string): string => {
  const numTick = typeof tick === "string" ? parseFloat(tick) : tick;

  if (numTick >= 1000) {
    return numTick / 1000 + "K";
  }
  return numTick.toString();
};

export default function FollowerChart() {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
          <XAxis dataKey="week" stroke="#333" padding={{ left: 30, right: 30 }} />
          <YAxis stroke="#333" tickFormatter={formatYAxis} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => formatYAxis(value as number)} labelStyle={{ fontWeight: "bold", color: "#333" }} />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
          <Line
            type="monotone"
            dataKey="followers"
            name="Toplam Takipçi"
            stroke="#6B21A8"
            strokeWidth={3}
            dot={{ r: 4, fill: "#6B21A8", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
