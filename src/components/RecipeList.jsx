import { Item } from "./Item";
import { SimpleGrid, Center } from "@chakra-ui/react";

export const RecipeList = ({ filteredRecipes, clickFn }) => {
  return (
    <Center>
      <SimpleGrid
        w="90%"
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={8}
        mb={10}
      >
        {filteredRecipes.map((recipe) => (
          <Item clickFn={clickFn} key={recipe.recipe.label} item={recipe} />
        ))}
      </SimpleGrid>
    </Center>
  );
};
