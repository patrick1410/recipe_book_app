import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div
      style={{
        backgroundColor: "#42A5F5",
        minHeight: "100vh",
      }}
    >
      {selectedItem ? (
        <RecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipeListPage clickFn={setSelectedItem} />
      )}
    </div>
  );
};
