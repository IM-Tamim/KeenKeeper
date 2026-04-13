import Banner from "@/components/homepage/Banner";
import FriendsList from "@/components/homepage/FriendsList";
import SummaryCards from "@/components/homepage/SummaryCards";

export default function Home() {
  return (
    <div>
      <Banner />
      <SummaryCards />
      <FriendsList />
    </div>
  );
}