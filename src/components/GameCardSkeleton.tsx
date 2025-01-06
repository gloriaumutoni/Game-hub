import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height="200px" width="270px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}
