import { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiVideoOn } from "react-icons/ci";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(savedTimeline);
  }, []);

  const getIcon = (type) => {
    if (type === "Call") {
      return (
        <div className="bg-yellow-100 p-3 rounded-full">
          <FaPhoneVolume className="text-yellow-600 text-xl" />
        </div>
      );
    }

    if (type === "Text") {
      return (
        <div className="bg-gray-100 p-3 rounded-full">
          <LuMessageSquareMore className="text-gray-600 text-xl" />
        </div>
      );
    }

    if (type === "Video") {
      return (
        <div className="bg-blue-100 p-3 rounded-full">
          <CiVideoOn className="text-blue-600 text-xl" />
        </div>
      );
    }
  };

  // filtering data
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-5xl font-bold mb-8">Timeline</h2>

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select select-bordered w-full max-w-xs mb-8"
      >
        <option value="All">All</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline Cards */}
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4"
          >
            {getIcon(item.type)}

            <div>
              <h2 className="text-lg font-semibold text-green-900">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
