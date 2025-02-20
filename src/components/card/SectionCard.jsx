import React from "react";
import { Cards, CardContent, CardHeader, CardTitle } from "./cards";

const SectionCard = ({ title, data }) => {
    return (
      <div className="max-w-6xl mx-auto px-4"> {/* Centered & Width Limited */}
        <Cards className="shadow-lg rounded-2xl border border-gray-200 p-6">
          <CardHeader>
            <CardTitle className="text-center text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {data.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-gray-600">{item.title}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Cards>
      </div>
    );
};

export default SectionCard;
