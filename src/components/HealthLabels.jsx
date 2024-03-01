import { Tag } from "@chakra-ui/react";

export const HealthLabels = ({ labels }) => {
  const filteredLabels = labels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  return (
    <>
      {filteredLabels.map((label, index) => (
        <Tag
          margin={1}
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
