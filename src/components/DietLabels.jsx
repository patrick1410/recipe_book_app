import { Tag } from "@chakra-ui/react";

export const DietLabels = ({ labels }) => {
  return (
    <>
      {labels.map((label, index) => (
        <Tag
          margin={1}
          backgroundColor="green.100"
          color="green"
          textTransform="uppercase"
          key={index}
        >
          {label}
        </Tag>
      ))}
    </>
  );
};
