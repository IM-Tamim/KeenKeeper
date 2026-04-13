import React, { Suspense } from "react";
import FriendCard from "../ui/FriendCard";

const getFriends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  return data;
};

const FriendsGrid = async () => {
  const friends = await getFriends();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center py-20 gap-4">
    <span className="loading loading-spinner text-accent"></span>
    <p className="text-gray-400 text-sm">Loading friends...</p>
  </div>
);

const FriendsList = () => {
  return (
    <div className="w-11/12 mx-auto px-4 my-10">
      <h2 className="font-bold text-4xl text-gray-800 text-left mb-10">
        Your Friends
      </h2>
      <Suspense fallback={<LoadingSpinner />}>
        <FriendsGrid />
      </Suspense>
    </div>
  );
};

export default FriendsList;