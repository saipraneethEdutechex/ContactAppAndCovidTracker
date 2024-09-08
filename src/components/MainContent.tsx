import React from "react";
import Contacts from "../pages/Contacts";
import Graphs from "../pages/Graphs";
import Maps from "../pages/Maps";

interface MainContentProps {
  tab: string;
}

const MainContent: React.FC<MainContentProps> = ({ tab }) => {
  let content;

  switch (tab) {
    case "contacts":
      content = <Contacts />;
      break;
    case "graphs":
      content = <Graphs />;
      break;
    case "maps":
      content = <Maps />;
      break;
    default:
      content = <div>Select a tab to see content.</div>;
      break;
  }

  return (
    <div className="flex-1 p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
        {content}
      </div>
    </div>
  );
};

export default MainContent;
