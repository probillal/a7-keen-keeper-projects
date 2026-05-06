import { use } from "react";
import Friend from "./Friend";

const friendsPromise = fetch("/friends.json").then((res) => res.json());
const Friends = () => {
  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Your friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4 lg:gap-6">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
