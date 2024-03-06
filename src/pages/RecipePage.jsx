import { DietLabels } from "../components/DietLabels";
import { Cautions } from "../components/Cautions";
import { IngredientList } from "../components/IngredientList";
import { AllHealthLabels } from "../components/AllHealthLabels";
import { Nutrients } from "../components/Nutrients";
import { ReturnBtn } from "../components/ReturnBtn";
import {
  Box,
  Image,
  Flex,
  Center,
  Tag,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";

export const RecipePage = ({ item, clickFn }) => {
  const {
    image,
    label,
    mealType,
    totalTime,
    ingredientLines,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
  } = item.recipe;

  return (
    <Box minH="100vh" backgroundColor="#42A5F5">
      <Center>
        <Box
          backgroundColor="white"
          w={{ base: "100%", md: "80%", lg: "60%" }}
          h="100%"
        >
          <ReturnBtn clickFn={clickFn} />
          <Image objectFit="cover" h={300} w="100%" src={image} alt={label} />
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Flex w={{ base: "90%" }} flexDir="column" m={{ base: 5, lg: 10 }}>
              <Tag
                p={0}
                background="none"
                color="grey"
                textTransform="uppercase"
              >
                {mealType}
              </Tag>
              <Heading size="lg" fontWeight="semi-bold">
                {label}
              </Heading>
              <Text mt={2}>
                Total cooking time: <strong>{totalTime} Minutes</strong>
              </Text>
              <Text>
                Servings: <strong>{item.recipe.yield}</strong>
              </Text>
              <Text mt={2} fontWeight="bold">
                Ingredients:
              </Text>
              <IngredientList ingredients={ingredientLines} />
            </Flex>

            <Spacer border="1px solid" color="gray.200" />

            <Flex w={{ base: "90%" }} flexDir="column" m={{ base: 5, lg: 10 }}>
              <Text ml={1}>Health labels:</Text>
              <Box>
                <AllHealthLabels labels={healthLabels} />
              </Box>
              <Text ml={1} mt={2}>
                {dietLabels.length === null && null}
                {dietLabels.length === 1 && "Diët"}
                {dietLabels.length > 1 && "Diëts"}
              </Text>
              <Box>
                <DietLabels labels={dietLabels} />
              </Box>
              <Text ml={1} mt={2}>
                {cautions.length === null && null}
                {cautions.length === 1 && "Caution:"}
                {cautions.length > 1 && "Cautions:"}
              </Text>
              <Box>
                <Cautions cautions={cautions} />
              </Box>
              <Text ml={1} mt={2} fontWeight="bold">
                Total nutrients:
              </Text>
              <Nutrients nutrients={totalNutrients} />
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
