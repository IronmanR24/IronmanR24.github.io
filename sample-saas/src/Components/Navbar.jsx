import React from 'react';
import { HomeIcon, UserGroupIcon, ChartBarIcon, CurrencyDollarIcon, DocumentReportIcon, CogIcon, UserIcon, MailIcon } from '@heroicons/react/outline';

const NavBar = ({userType}) => {
    const userClass =
    userType === "user-1"
      ? "user-1"
      : userType === "user-2"
      ? "user-2"
      : userType === "user-3"
      ? "user-3"
      : "";

  return (
    <div className={`flex flex-col h-full text-gray-300 bg-${userClass}`}>
      <div className="flex items-center justify-center h-20 bg-red-600">
        {/* Content for the top section of NavBar */}
      </div>
      <div className="flex-grow flex flex-col space-y-6 mt-10">
        <NavItem icon={<HomeIcon className={`h-6 w-6 ${'text-' + userClass}`} />} />
        <NavItem icon={<UserGroupIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<ChartBarIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<CurrencyDollarIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<DocumentReportIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<CogIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<UserIcon className={`h-6 w-6 text-${userClass}`} />} />
        <NavItem icon={<MailIcon className={`h-6 w-6 text-${userClass}`} />} />
      </div>
    </div>
  );
};
  
  const NavItem = ({ icon, text }) => {
    return (
      <div className="flex items-center px-6 py-3 hover:bg-gray-700 cursor-pointer">
        {icon}
      </div>
    );
  };
  
  export default NavBar;