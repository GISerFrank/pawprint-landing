'use client';

import { useState } from 'react';

interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'rabbit';
  position: { x: number; y: number };
  health: {
    status: string;
    weight: string;
    lastCheckup: string;
    vaccinations: string;
    mood: string;
  };
}

const pets: Pet[] = [
  {
    id: 'dog',
    name: 'Max',
    type: 'dog',
    position: { x: 15, y: 30 },
    health: {
      status: '🟢 Excellent',
      weight: '28 kg (Healthy)',
      lastCheckup: 'Dec 15, 2024',
      vaccinations: 'Up to date',
      mood: '😊 Happy & Active',
    },
  },
  {
    id: 'cat',
    name: 'Luna',
    type: 'cat',
    position: { x: 50, y: 45 },
    health: {
      status: '🟢 Good',
      weight: '4.2 kg (Normal)',
      lastCheckup: 'Nov 28, 2024',
      vaccinations: 'Up to date',
      mood: '😺 Playful',
    },
  },
  {
    id: 'rabbit',
    name: 'Coco',
    type: 'rabbit',
    position: { x: 80, y: 35 },
    health: {
      status: '🟡 Check needed',
      weight: '2.1 kg (Slightly low)',
      lastCheckup: 'Oct 10, 2024',
      vaccinations: 'Due soon',
      mood: '🐰 Calm',
    },
  },
];

// 现代插画风宠物 SVG（统一风格）
const PetSVG = ({ type, isHovered }: { type: string; isHovered: boolean }) => {
  const scale = isHovered ? 1.05 : 1;

  const commonStyle = {
    transform: `scale(${scale})`,
    transition: 'transform 0.3s ease',
  };

  // 统一配色
  const colors = {
    dog: '#D6B48C',
    cat: '#9CA3AF',
    rabbit: '#EDE9D5',
    accent: '#2F3E46',
  };

  if (type === 'dog') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" style={commonStyle}>
        {/* 身体 */}
        <path
          d="M30 70 Q60 90 90 70 Q85 95 60 95 Q35 95 30 70Z"
          fill={colors.dog}
        />
        {/* 头 */}
        <path
          d="M40 55 Q60 30 80 55 Q75 75 60 75 Q45 75 40 55Z"
          fill={colors.dog}
        />
        {/* 耳朵 */}
        <path d="M38 50 Q28 35 32 25 Q45 30 45 45Z" fill={colors.dog} />
        <path d="M82 50 Q92 35 88 25 Q75 30 75 45Z" fill={colors.dog} />
        {/* 尾巴 */}
        <path
          d="M88 72 Q108 65 102 45"
          stroke={colors.dog}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'cat') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" style={commonStyle}>
        {/* 身体 */}
        <ellipse cx="60" cy="80" rx="30" ry="22" fill={colors.cat} />
        {/* 头 */}
        <circle cx="60" cy="50" r="22" fill={colors.cat} />
        {/* 耳朵 */}
        <path d="M42 40 L35 20 L50 35Z" fill={colors.cat} />
        <path d="M78 40 L85 20 L70 35Z" fill={colors.cat} />
        {/* 尾巴 */}
        <path
          d="M85 80 Q115 85 105 55"
          stroke={colors.cat}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 'rabbit') {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" style={commonStyle}>
        {/* 身体 */}
        <ellipse cx="60" cy="82" rx="28" ry="22" fill={colors.rabbit} />
        {/* 头 */}
        <circle cx="60" cy="55" r="20" fill={colors.rabbit} />
        {/* 耳朵 */}
        <ellipse cx="48" cy="22" rx="6" ry="26" fill={colors.rabbit} />
        <ellipse cx="72" cy="22" rx="6" ry="26" fill={colors.rabbit} />
        {/* 尾巴 */}
        <circle cx="88" cy="82" r="6" fill={colors.rabbit} />
      </svg>
    );
  }

  return null;
};


// 健康信息卡片
const HealthCard = ({ pet, isVisible }: { pet: Pet; isVisible: boolean }) => {
  return (
    <div
      className={`absolute z-20 bg-white rounded-2xl shadow-2xl p-5 w-64 border border-peach/30 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        left: `${pet.position.x}%`,
        top: `${pet.position.y - 35}%`,
        transform: 'translateX(-50%)',
      }}
    >
      {/* 小三角箭头 */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-peach/30" />
      
      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-peach/20">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-coral flex items-center justify-center text-white font-bold">
          {pet.name[0]}
        </div>
        <div>
          <h4 className="font-display font-bold text-navy">{pet.name}</h4>
          <p className="text-xs text-charcoal/50 capitalize">{pet.type}</p>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-charcoal/60">Status</span>
          <span className="font-medium">{pet.health.status}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-charcoal/60">Weight</span>
          <span className="font-medium text-charcoal">{pet.health.weight}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-charcoal/60">Last Checkup</span>
          <span className="font-medium text-charcoal">{pet.health.lastCheckup}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-charcoal/60">Vaccines</span>
          <span className="font-medium text-sage">{pet.health.vaccinations}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-charcoal/60">Mood</span>
          <span className="font-medium">{pet.health.mood}</span>
        </div>
      </div>
    </div>
  );
};

export default function PetShowcase() {
  const [hoveredPet, setHoveredPet] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-warm-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-sage/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-peach/30 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            Meet Our Furry Friends
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Hover over each pet to see their health dashboard. PawPrint keeps all their important information at your fingertips.
          </p>
        </div>

        {/* 宠物展示区域 */}
        <div className="relative h-[500px] bg-gradient-to-b from-peach/10 to-sage/10 rounded-3xl border border-peach/20 overflow-hidden">
          {/* 草地装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sage/30 to-transparent" />
          
          {/* 云朵 */}
          <div className="absolute top-8 left-[20%] opacity-60">
            <svg width="80" height="40" viewBox="0 0 80 40">
              <ellipse cx="25" cy="25" rx="20" ry="12" fill="white" />
              <ellipse cx="45" cy="20" rx="25" ry="15" fill="white" />
              <ellipse cx="65" cy="25" rx="15" ry="10" fill="white" />
            </svg>
          </div>
          <div className="absolute top-16 right-[15%] opacity-40">
            <svg width="60" height="30" viewBox="0 0 60 30">
              <ellipse cx="20" cy="18" rx="15" ry="10" fill="white" />
              <ellipse cx="38" cy="15" rx="18" ry="12" fill="white" />
            </svg>
          </div>

          {/* 宠物们 */}
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="absolute cursor-pointer transition-transform duration-300"
              style={{
                left: `${pet.position.x}%`,
                top: `${pet.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredPet(pet.id)}
              onMouseLeave={() => setHoveredPet(null)}
            >
              {/* 阴影 */}
              <div 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/10 rounded-full blur-sm transition-all duration-300 ${
                  hoveredPet === pet.id ? 'scale-110' : ''
                }`}
              />
              
              {/* 宠物 SVG */}
              <PetSVG type={pet.type} isHovered={hoveredPet === pet.id} />
              
              {/* 名字标签 */}
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full shadow-md text-sm font-medium text-navy whitespace-nowrap transition-all duration-300 ${
                hoveredPet === pet.id ? 'scale-110 bg-terracotta text-white' : ''
              }`}>
                {pet.name}
              </div>
              
              {/* 健康信息卡片 */}
              <HealthCard pet={pet} isVisible={hoveredPet === pet.id} />
            </div>
          ))}
          
          {/* 提示文字 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-charcoal/40 text-sm">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <span>Hover over pets to view health info</span>
          </div>
        </div>
      </div>
    </section>
  );
}