import React from "react";

export const Cards = ({ children, className }) => (
  <div className={`bg-white p-4 rounded-xl shadow-md ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`border-b pb-2 mb-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
