import React from 'react';

const SummaryCards = () => {
  const cards = [
    { value: '0', label: 'Total Friends' },
    { value: '0', label: 'On Track' },
    { value: '0', label: 'Need Attention' },
    { value: '0', label: 'Interactions This Month' },
  ];

  return (
    <div className="w-11/12 mx-auto px-6 border-b-2 border-gray-200 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-50 rounded-lg py-12 flex flex-col items-center justify-center shadow-sm"
          >
            <span className="text-4xl font-bold text-[#1f4134] mb-3">
              {card.value}
            </span>
            <span className="text-sm md:text-base text-[#64748b] font-medium text-center px-2">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;