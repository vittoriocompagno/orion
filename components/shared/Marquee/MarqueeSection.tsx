'use client';

export default function MarqueeSection() {
  return (
    <div className="w-full overflow-hidden bg-black text-white h-[48px]">
      {/* Single marquee */}
      <div className="animate-marquee whitespace-nowrap font-mono h-full flex items-center text-sm">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="inline-block">
            <span className="mx-4 uppercase">RECENSIONI</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">SENTIMENT</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">AUTOMAZIONE</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">ANALYTICS</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">INTEGRAZIONE</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">GOOGLE</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">TRIPADVISOR</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">FACEBOOK</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">EFFICIENZA</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">RISPARMIO</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">INTELLIGENZA</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">VELOCITÀ</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">PRECISIONE</span>
            <span className="mx-4">×</span>
            <span className="mx-4 uppercase">CONTROLLO</span>
            <span className="mx-4">×</span>
          </span>
        ))}
      </div>
    </div>
  );
} 