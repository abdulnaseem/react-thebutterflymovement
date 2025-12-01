import React from "react";
import { Cards, CardContent, CardHeader, CardTitle } from "./cards";
import { Bike, Footprints, BellElectric, Handshake, Trophy, Award, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 0,
    icon: Bike,
    title: "London to Makkah Cycle Ride",
    description: "One of the first British nationals to cycle from London to Saudi Arabia, covering 5,000km through 13 countries in 56 days for charity.",
    stats: "5,000 km • 13 countries • 56 days",
    category: "endurance",
    year: "2018",
    highlight: true
  },
  {
    id: 1,
    icon: Footprints,
    title: "Makkah to Madinah Pilgrimage Walk",
    description: "Completed the 550km spiritual journey from Makkah to Madinah on foot as one of five British nationals, finishing in 15 days.",
    stats: "550 km • 15 days • Spiritual journey",
    category: "pilgrimage",
    year: "2019"
  },
  {
    id: 2,
    icon: BellElectric,
    title: "London Boxing Champion",
    description: "Amateur Boxing Association England London Champion and National Quarter Finalist, showcasing elite competitive boxing skills.",
    stats: "Regional Champion • National Quarter-Finalist",
    category: "boxing",
    year: "2009",
    highlight: true
  },
  {
    id: 3,
    icon: Trophy,
    title: "IBJJF European No-Gi Champion",
    description: "Ranked #1 in Europe in the 61.5kg blue belt division, demonstrating technical excellence in Brazilian Jiu-Jitsu.",
    stats: "#1 in Europe • 61.5kg • Blue Belt",
    category: "bjj",
    year: "2023",
    highlight: true
  },
  {
    id: 4,
    icon: Award,
    title: "British No-Gi Champion",
    description: "Achieved #1 ranking in Britain in the 67.5kg purple belt division, marking continued excellence in competitive grappling.",
    stats: "#1 in Britain • 67.5kg • Purple Belt",
    category: "bjj",
    year: "2024",
    highlight: true
  },
  {
    id: 5,
    icon: Globe,
    title: "International Competitor",
    description: "Consistently competes at national and international levels, representing British martial arts on the global stage.",
    stats: "Multiple International Events • Team GB Representation",
    category: "international",
    year: "2024"
  }
];

const categoryColors = {
  endurance: "from-orange-500 to-amber-500",
  pilgrimage: "from-emerald-500 to-teal-500", 
  boxing: "from-red-500 to-rose-500",
  bjj: "from-blue-500 to-indigo-500",
  international: "from-purple-500 to-violet-500"
};

const categoryIcons = {
  endurance: Bike,
  pilgrimage: Footprints,
  boxing: BellElectric,
  bjj: Trophy,
  international: Globe
};

const SportingAchievements = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-[#f5b400]/10 text-[#f5b400] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#f5b400]/20"
        >
          <Trophy className="w-4 h-4" />
          Competitive Excellence
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#f5f0e5] mb-4"
        >
          Sporting <span className="text-[#f5b400]">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-300 max-w-2xl mx-auto"
        >
          A testament to discipline, perseverance, and competitive spirit across multiple sports and challenges
        </motion.p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const CategoryIcon = categoryIcons[achievement.category];
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group cursor-pointer ${
                achievement.highlight ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <Cards className={`
                relative h-full bg-gradient-to-br from-[#181a1f] to-[#0b0d10] 
                border border-[#1b1d22] rounded-2xl p-6 shadow-2xl
                group-hover:border-[#f5b400]/40 group-hover:shadow-2xl
                transition-all duration-300 overflow-hidden
                ${achievement.highlight ? 'ring-2 ring-[#f5b400]/20' : ''}
              `}>
                
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${categoryColors[achievement.category]} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`} />
                
                {/* Header */}
                <CardHeader className="relative flex flex-row items-start gap-4 pb-4 border-b border-[#1b1d22]">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[achievement.category]} 
                    flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300
                  `}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-bold text-[#f5f0e5] group-hover:text-[#f5b400] transition-colors duration-300 line-clamp-2">
                      {achievement.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 bg-[#1b1d22] text-slate-400 text-xs px-2 py-1 rounded-full">
                        <CategoryIcon className="w-3 h-3" />
                        {achievement.category}
                      </span>
                      <span className="text-xs text-slate-500 bg-[#1b1d22] px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                      {achievement.highlight && (
                        <span className="inline-flex items-center gap-1 bg-[#f5b400]/20 text-[#f5b400] text-xs px-2 py-1 rounded-full">
                          <Award className="w-3 h-3" />
                          Highlight
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="relative pt-4">
                  <p className="text-slate-300 leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-[#f5b400]" />
                    <span className="font-medium">{achievement.stats}</span>
                  </div>

                  {/* Progress Bar for endurance events */}
                  {(achievement.category === 'endurance' || achievement.category === 'pilgrimage') && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Distance Completed</span>
                        <span>
                          {achievement.category === 'endurance' ? '5,000km' : '550km'}
                        </span>
                      </div>
                      <div className="w-full bg-[#1b1d22] rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${categoryColors[achievement.category]} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: achievement.category === 'endurance' ? '100%' : '100%'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Cards>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="text-center p-6 bg-[#181a1f] rounded-2xl border border-[#1b1d22]">
          <div className="text-2xl font-bold text-[#f5b400] mb-1">{achievements.length}+</div>
          <div className="text-sm text-slate-400">Major Achievements</div>
        </div>
        <div className="text-center p-6 bg-[#181a1f] rounded-2xl border border-[#1b1d22]">
          <div className="text-2xl font-bold text-[#f5b400] mb-1">15+</div>
          <div className="text-sm text-slate-400">Years Competing</div>
        </div>
        <div className="text-center p-6 bg-[#181a1f] rounded-2xl border border-[#1b1d22]">
          <div className="text-2xl font-bold text-[#f5b400] mb-1">5,550+</div>
          <div className="text-sm text-slate-400">Kilometers Traveled</div>
        </div>
        <div className="text-center p-6 bg-[#181a1f] rounded-2xl border border-[#1b1d22]">
          <div className="text-2xl font-bold text-[#f5b400] mb-1">3</div>
          <div className="text-sm text-slate-400">Different Sports</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SportingAchievements;