import { data } from "../utils/data";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import { RecipeList } from "../components/RecipeList";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

const recipeArray = data.hits;

export const RecipeListPage = ({ clickFn }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipeArray);
  const [searchField, setSearchField] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = recipeArray.filter(
      (recipe) =>
        recipe.recipe.label.toLowerCase().includes(value) ||
        recipe.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(value)
        )
    );
    setFilteredRecipes(filtered);
    setSearchField(e.target.value);
  };

  return (
    <Box>
      <Header color="#fff" text="📙 Recipe Book App 🍽️" />
      <TextInput
        value={searchField}
        changeFn={handleFilter}
        placeholder="Search recipe by name or health label..."
      />
      <RecipeList filteredRecipes={filteredRecipes} clickFn={clickFn} />
    </Box>
  );
};
