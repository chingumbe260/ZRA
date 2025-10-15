"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function DataExchangeChart() {
  const data = [
    { time: "00:00", zra: 4000, pacra: 2400, napsa: 2400, rtsa: 3200, mha: 1800, doi: 2200 },
    { time: "04:00", zra: 3000, pacra: 1398, napsa: 2210, rtsa: 2800, mha: 1600, doi: 1900 },
    { time: "08:00", zra: 2000, pacra: 9800, napsa: 2290, rtsa: 3900, mha: 2200, doi: 2800 },
    { time: "12:00", zra: 2780, pacra: 3908, napsa: 2000, rtsa: 4200, mha: 2400, doi: 3100 },
    { time: "16:00", zra: 1890, pacra: 4800, napsa: 2181, rtsa: 3800, mha: 2100, doi: 2700 },
    { time: "20:00", zra: 2390, pacra: 3800, napsa: 2500, rtsa: 3500, mha: 1900, doi: 2400 },
    { time: "23:59", zra: 3490, pacra: 4300, napsa: 2100, rtsa: 3700, mha: 2000, doi: 2600 },
  ]

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground text-xl font-bold">Data Exchange Activity</CardTitle>
        <CardDescription className="text-muted-foreground">
          Real-time API request volume across all integrated agencies (24-hour period)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: "12px", fontWeight: 500 }}
              tickLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: "12px", fontWeight: 500 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              labelStyle={{ fontWeight: 600, marginBottom: "8px" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "13px",
                fontWeight: 500,
                paddingTop: "20px",
              }}
            />
            <Line type="monotone" dataKey="zra" stroke="hsl(var(--chart-1))" strokeWidth={2.5} dot={false} name="ZRA" />
            <Line
              type="monotone"
              dataKey="pacra"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2.5}
              dot={false}
              name="PACRA"
            />
            <Line
              type="monotone"
              dataKey="napsa"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2.5}
              dot={false}
              name="NAPSA"
            />
            <Line
              type="monotone"
              dataKey="rtsa"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2.5}
              dot={false}
              name="RTSA"
            />
            <Line type="monotone" dataKey="mha" stroke="hsl(var(--chart-5))" strokeWidth={2.5} dot={false} name="MHA" />
            <Line
              type="monotone"
              dataKey="doi"
              stroke="hsl(var(--secondary))"
              strokeWidth={2.5}
              dot={false}
              name="DOI"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
