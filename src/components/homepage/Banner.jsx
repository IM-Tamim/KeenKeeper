import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white pt-16 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[#1e293b] text-5xl font-extrabold mb-5 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button className="bg-[#1f4134] hover:bg-[#163026] text-white px-6 py-3 rounded-md flex items-center gap-2 mx-auto font-semibold transition-all shadow-sm">
          <span className="text-xl leading-none">+</span>
          Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;