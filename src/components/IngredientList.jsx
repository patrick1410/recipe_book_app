import { ListItem, UnorderedList } from "@chakra-ui/react";

export const IngredientList = ({ ingredients }) => {
  return (
    <UnorderedList listStyleType="none" m={0}>
      {ingredients.map((ingredient, index) => (
        <ListItem mt={1} key={index}>
          {ingredient.split("* ")}
        </ListItem>
      ))}
    </UnorderedList>
  );
};
