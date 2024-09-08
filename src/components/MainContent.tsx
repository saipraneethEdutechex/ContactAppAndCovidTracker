import React from "react";

interface MainContentProps {
  tab: string;
}

const MainContent: React.FC<MainContentProps> = ({ tab }) => {
  let content;

  switch (tab) {
    case "contacts":
      content = <div>Contacts content goes here.</div>; // Replace with actual Contacts component or content
      break;
    case "maps":
      content = <div>Maps content goes here.</div>; // Replace with actual Maps component or content
      break;
    case "graphs":
      content = <div>Graphs content goes here.</div>; // Replace with actual Graphs component or content
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
