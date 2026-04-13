import Link from "next/link";
import React from "react";
 
const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h2 className="text-8xl font-bold text-[#244D3F]">404</h2>
      <h3 className="text-2xl font-semibold">Page Not Found</h3>
      <p className="text-gray-500">
        Oops! Looks like this friendship link is broken.
      </p>
      <Link href="/" className="btn bg-[#244D3F] text-white mt-2">
        Go Back
      </Link>
    </div>
  );
};
 
export default NotFoundPage;