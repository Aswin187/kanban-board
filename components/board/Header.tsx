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
    <Button variant={variant} className={`h-12 w-12 rounded-lg ${className}`}>
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
    <div className="flex w-full justify-between items-center py-5 px-2">
      <div className="flex items-center gap-8">
        <HeaderButton
          icon={FiArrowLeft}
          colorClass="text-gray-400"
          variant="outline"
        />

        <div className="flex gap-4 items-center">
          <HeaderButton icon={FaApple} />

          <div>
            <h2 className="text-xl font-semibold">Apple</h2>
            <span className="text-gray-400 text-sm">5 boards • 24 members</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex rounded-lg border border-dark-500 bg-dark-400 items-center">
          <FiSearch size={24} className="ml-3 text-gray-400" />
          <Input
            placeholder="Search"
            className="placeholder:text-gray-400 border-gray-400 h-12 focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
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
