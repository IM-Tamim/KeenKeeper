import FriendDetailClient from "@/components/ui/FriendDetailClient";
import { notFound } from "next/navigation";

const getFriends = async () => {
  const res = await fetch("https://keen-keeper-alpha.vercel.app/friends.json");
  const data = await res.json();
  return data;
};

const FriendDetailPage = async ({ params }) => {
  const { id } = await params;
  const friends = await getFriends();
  const friend = friends.find((f) => f.id == id);

  if (!friend) {
    notFound();
  }

  return <FriendDetailClient friend={friend} />;
};

export default FriendDetailPage;