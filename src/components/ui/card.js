import React from "react";

export const Card = ({ className, children, ...props }) => (
  <div className={`rounded-lg border border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);
