import { GridItem, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  colSpan: { base: number; sm: number };
  rowSpan?: { base: number; sm: number };
  src: string;
};

const ImageGridItem: React.FC<Props> = ({ colSpan, rowSpan, src }) => {
  return (
    <GridItem
      rounded={"2xl"}
      overflow={"hidden"}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <Image
        objectFit="cover"
        objectPosition={"center"}
        w="full"
        h="full"
        src={src}
        alt={src}
      />
    </GridItem>
  );
};

export default ImageGridItem;
