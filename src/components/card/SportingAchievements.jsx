import React from "react";
import { Cards, CardContent, CardHeader, CardTitle } from "./cards";
import { Bike, Footprints, BellElectric, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
      id: 0,
      icon: Bike,
      title: "London 2 Makkah (Cycle Ride)",
      description: "One of two first British nationals to cycle from London to Saudi Arabia, covering 5,000 Km through 13 countries in 56 days for charity."
  },
  {
      id: 1,
      icon: Footprints,
      title: "Makkah 2 Madinah (Walk)",
      description: "One of five British Nationals to walk from Makkah 2 Madina. A journey of 550km completed in 15 days."
  },
  {
      id: 2,
      icon: BellElectric,
      title: "Boxing",
      description: "Amateur Boxing Association England, London Champion, and National Quarter Finalist 2009."
  },
  {
      id: 3,
      icon: Handshake,
      title: "IBJJF European No Gi Champion",
      description: "Ranked number #1 in Europe in the 61.5kg blue belt division (2023)."
  },
  {
    id: 4,
    icon: Handshake,
    title: "British No Gi Champion",
    description: "Ranked number #1 in Britain in the 67.5kg purple belt division (2024)."
  }
];

const SportingAchievements = () => {
  return (
    <div className="max-w-[74rem] mx-auto px-4"> {/* Centered and width-matched */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Cards className="shadow-lg rounded-2xl border border-gray-200 p-6">
              <CardHeader className="flex flex-row items-center gap-4">
              <achievement.icon
                className={`w-10 h-10 ${
                  achievement.id === 3
                    ? "text-blue-500"
                    : achievement.id === 4
                    ? "text-purple-500"
                    : "text-yellow-500"
                }`}
              />
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Cards>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SportingAchievements;
