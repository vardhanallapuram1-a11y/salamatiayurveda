import React from 'react';
import { Truck, Headset, ShieldCheck, ShoppingCart } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Truck size={36} />, title: "Free Shipping" },
    { icon: <Headset size={36} />, title: "Online Support" },
    { icon: <ShieldCheck size={36} />, title: "99% Guarantee" },
    { icon: <ShoppingCart size={36} />, title: "Secure Checkout" }
  ];

  return (
    <div className="bg-primary-dark pt-12 pb-12 border-t border-white/10 w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center text-white min-w-[200px]">
              <div className="text-accent mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest font-serif leading-tight">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
