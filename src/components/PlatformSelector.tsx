import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import usePlatforms from "../hooks/usePlatforms";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((item) => (
          <MenuItem key={item.id} value={`${item.name}`}>
            {item.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
