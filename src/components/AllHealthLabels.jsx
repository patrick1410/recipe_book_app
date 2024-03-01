import { Tag } from "@chakra-ui/react";

export const AllHealthLabels = ({ labels }) => {
  return (
    <>
      {labels.map((label, index) => (
        <Tag
          m={1}
          backgroundColor="purple.100"
          color="purple"
          textTransform="uppercase"
          key={index}
        >
          {label}
        </Tag>
      ))}
    </>
  );
};
