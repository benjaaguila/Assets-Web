import React from 'react';

const PageLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] min-h-screen p-6">
    <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
      {children}
    </div>
  </div>
);

export default PageLayout;