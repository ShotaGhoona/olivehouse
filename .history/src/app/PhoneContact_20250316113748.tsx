import { Phone } from "lucide-react";

interface PhoneContactProps {
  phoneNumber: string;
  text?: string;
  className?: string;
}

export function PhoneContact({
  phoneNumber = "072-320-9209",
  text = "まずはお電話ください",
  className = "",
}: PhoneContactProps) {
  return (
    <div className={`relative max-w-md mx-auto ${className}`}>
      <div className="bg-[#ffe4a3] rounded-full py-4 px-8 text-center relative">
        <p className="text-sm font-bold text-[#5a6b46] mb-1">{text}</p>
        <p className="text-2xl font-bold text-[#4a5568]">{phoneNumber}</p>

        {/* Phone icon circle */}
        <div className="absolute -top-2 -right-2 w-14 h-14 bg-[#f5f0e0] rounded-full flex items-center justify-center shadow-sm">
          <Phone className="w-6 h-6 text-[#ffe4a3]" />
        </div>
      </div>
    </div>
  );
} 