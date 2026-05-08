// Timeline.jsx

import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";

const TimeLine = () => {
  const [timeline, setTimeline] = useState([]);

  // load data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(savedData);
  }, []);

  // icon function
  const getIcon = (type) => {
    if (type === "Call") {
      return <FaPhoneAlt />;
    }

    if (type === "Text") {
      return <FiMessageSquare />;
    }

    if (type === "Video") {
      return <CiVideoOn />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-4xl font-bold mb-8">Timeline</h2>

      <div className="space-y-4">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 flex items-center gap-4"
          >
            <div className="bg-green-600 text-white p-3 rounded-full">
              {getIcon(item.type)}
            </div>

            <div>
              <h2 className="font-bold">{item.title}</h2>

              <p className="text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
