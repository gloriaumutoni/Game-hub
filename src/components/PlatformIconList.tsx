import { HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaPlaystation, FaWindows } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Platform } from "../hooks/useGames";

interface PlatformIconProps {
  platform: Platform[];
}

export default function PlatformIconList({ platform }: PlatformIconProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platform.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];
        return <PlatformIcon key={platform.id} />;
      })}
    </HStack>
  );
}
