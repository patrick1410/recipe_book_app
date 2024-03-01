import { DietLabels } from "../components/DietLabels";
import { Cautions } from "../components/Cautions";
import { IngredientList } from "../components/IngredientList";
import { AllHealthLabels } from "../components/AllHealthLabels";
import { Nutrients } from "../components/Nutrients";
import { ReturnBtn } from "../components/ReturnBtn";
import { Box, Image, Flex, Center, Tag, Heading, Text } from "@chakra-ui/react";

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
    <Box minH="100vh" display="flex" backgroundColor="#42A5F5">
      <Center>
        <Box backgroundColor="white" w="60%" h="100%">
          <ReturnBtn clickFn={clickFn} />
          <Image objectFit="cover" h={300} w="100%" src={image} alt={label} />
          <Flex flexDir="row">
            <Flex w="50%" flexDir="column" m={10}>
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

            <Flex w="50%" flexDir="column" m={10}>
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
