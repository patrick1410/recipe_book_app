import { HealthLabels } from "./HealthLabels";
import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import {
  Card,
  Image,
  CardBody,
  Center,
  Tag,
  Heading,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export const Item = ({ item, clickFn }) => {
  const capitalizeEachWord = (str) =>
    str
      .split(" ")
      .map((word) => {
        if (word.toLowerCase() === "and") {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

  const {
    image,
    label,
    mealType,
    healthLabels,
    dietLabels,
    dishType,
    cautions,
  } = item.recipe;

  return (
    <Card
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
      boxShadow="lg"
    >
      <Image
        w="100%"
        h={250}
        objectFit="cover"
        src={image}
        alt={label}
        borderTopRadius="md"
      />
      <CardBody>
        <Center flexDir="column" h="100%">
          <Tag background="none" color="grey" textTransform="uppercase">
            {mealType}
          </Tag>
          <Heading
            m={1}
            size="lg"
            fontWeight={{ base: "medium" }}
            textAlign="center"
          >
            {label}
          </Heading>
          <Box>
            <HealthLabels labels={healthLabels} />
          </Box>
          <Box>
            <DietLabels labels={dietLabels} />
          </Box>
          <Text>
            Dish:
            <Tag background="none" fontSize="md">
              {capitalizeEachWord(dishType[0])}
            </Tag>
          </Text>
          <Text>
            {cautions.length === null && null}
            {cautions.length === 1 && "Caution:"}
            {cautions.length > 1 && "Cautions:"}
          </Text>
          <SimpleGrid columns={cautions.length >= 2 && 2}>
            <Cautions cautions={cautions} />
          </SimpleGrid>
        </Center>
      </CardBody>
    </Card>
  );
};
