import Image from "next/image";
import Link from "next/link";

const statusConfig = {
  overdue: {
    badge: "bg-red-100 text-red-600",
  },
  "almost due": {
    badge: "bg-orange-100 text-orange-600",
  },
  "on-track": {
    badge: "bg-emerald-100 text-emerald-600",
  },
};

const FriendCard = ({ friend }) => {
  const config = statusConfig[friend.status] || statusConfig["on-track"];

  return (
    <Link
      href={`/friends/${friend.id}`}
      className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
    >
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover mb-3"
      />

      <h3 className="font-semibold text-gray-800 text-lg">{friend.name}</h3>

      <p className="text-sm text-gray-400 mb-2">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status */}
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full ${config.badge}`}
      >
        {friend.status.replace(/\b\w/g, (c) => c.toUpperCase())}
      </span>
    </Link>
  );
};

export default FriendCard;
