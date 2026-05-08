import { use } from "react";
import { CiVideoOn } from "react-icons/ci";
import { FaArchive, FaPhoneVolume } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { LuAlarmClock, LuMessageSquareMore } from "react-icons/lu";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const FriendDetails = () => {
  const friends = use(friendsPromise);
  console.log(friends);
  const { id } = useParams();
  console.log(id, "params");
  const expectedFriend = friends.find((friend) => friend.id == id);
  console.log(expectedFriend);

  const handleInteraction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      date: new Date().toLocaleDateString(),
      title: `${type} with ${expectedFriend.name}`,
    };

    const existingTimeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const updatedTimeline = [newEntry, ...existingTimeline];

    localStorage.setItem("timeline", JSON.stringify(updatedTimeline));

    toast.success(`${type} added to timeline`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-[#f5f7f6] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Side */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
            <img
              src={expectedFriend.picture}
              alt="profile"
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {expectedFriend.name}
            </h2>

            <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-500">
              {expectedFriend.status}
            </span>

            <div className="mt-3">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                {expectedFriend.tags}
              </span>
            </div>

            <p className="mt-5 italic text-gray-500">{expectedFriend.bio}</p>

            <p className="mt-2 text-sm text-gray-400">
              Preferred: {expectedFriend.email}
            </p>
          </div>

          <div className="space-y-3">
            <Link className="w-full bg-white border border-gray-200 rounded-lg py-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <LuAlarmClock size={18} />
              Snooze 2 Weeks
            </Link>

            <Link className="w-full bg-white border border-gray-200 rounded-lg py-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <FaArchive size={18} />
              Archive
            </Link>

            <Link className="w-full bg-white border border-red-100 rounded-lg py-4 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition">
              <FiTrash2 size={18} />
              Delete
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-green-900">
                {expectedFriend.days_since_contact}
              </h2>
              <p className="mt-3 text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-green-900">
                {expectedFriend.goal}
              </h2>
              <p className="mt-3 text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-green-900">
                {expectedFriend.next_due_date}
              </h2>
              <p className="mt-3 text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-green-900">
                Relationship Goal
              </h2>

              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                Edit
              </button>
            </div>

            <p className="mt-5 text-gray-600 text-lg">
              Connect every{" "}
              <span className="font-bold">
                {expectedFriend.days_since_contact} day
              </span>
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-green-900">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <Link
                to="/timeline"
                onClick={() => handleInteraction("Call")}
                className="border border-gray-200 rounded-xl py-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <FaPhoneVolume size={30} />
                <span className="font-medium">Call</span>
              </Link>

              <Link
                to="/timeline"
                onClick={() => handleInteraction("Text")}
                className="border border-gray-200 rounded-xl py-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <LuMessageSquareMore size={30} />
                <span className="font-medium">Text</span>
              </Link>

              <Link
                to="/timeline"
                onClick={() => handleInteraction("Video")}
                className="border border-gray-200 rounded-xl py-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <CiVideoOn size={30} />
                <span className="font-medium">Video</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
