import React from "react";

function ProjectCard({ title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block p-3 border rounded-lg hover:shadow">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      <p className="text-xs text-blue-600 mt-2">View on GitHub →</p>
    </a>
  );
}

export default ProjectCard;
