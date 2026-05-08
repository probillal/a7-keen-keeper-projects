import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

  const analyticsData = [
    {
      name: "Call",
      value: timeline.filter((item) => item.type === "Call").length,
    },

    {
      name: "Text",
      value: timeline.filter((item) => item.type === "Text").length,
    },

    {
      name: "Video",
      value: timeline.filter((item) => item.type === "Video").length,
    },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-5xl text-green-600 font-bold mb-10">
        Friendship Analytics
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow">
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={analyticsData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
              >
                {analyticsData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
