import { FaApple } from "react-icons/fa";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { PiShareBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderButtonProps {
  icon: React.ComponentType<{ size: number }>;
  className?: string;
  variant?:
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;
  colorClass?: string;
}

const HeaderButton = ({
  icon: Icon,
  className,
  variant,
  colorClass,
}: HeaderButtonProps) => {
  return (
    <Button variant={variant} className={`h-[44px] w-[44px] rounded-[12px] ${className}`}>
      {colorClass ? (
        <span className={colorClass}>
          <Icon size={20} />
        </span>
      ) : (
        <Icon size={20} />
      )}
    </Button>
  );
};

const Header = () => {
  return (
    <div className="flex w-full justify-between flex-wrap gap-3 z-20 items-center p-[30px] sticky top-0 bg-white">
      <div className="flex items-center gap-6">
        <HeaderButton
          icon={FiArrowLeft}
          colorClass="text-gray-400"
          variant="outline"
        />

        <div className="flex gap-4 items-center">
          <HeaderButton icon={FaApple} />

          <div className="flex flex-col">
            <h2 className="text-[20px] font-semibold">Apple</h2>
            <span className="text-gray-400 text-[13px] font-medium">5 boards • 24 members</span>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-4">
        <div className="flex rounded-lg border-2 min-w-[256px] h-[44px] border-dark-500 bg-dark-400 items-center">
          <FiSearch size={24} className="ml-3 text-gray-400" />
          <Input
            placeholder="Search"
            className="placeholder:text-gray-400 border-gray-400 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
          />
        </div>
        <HeaderButton
          icon={PiShareBold}
          colorClass="text-gray-400"
          variant="outline"
        />
        <HeaderButton
          icon={IoIosSettings}
          colorClass="text-gray-400"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default Header;
