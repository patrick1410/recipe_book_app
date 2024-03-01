import { Box, Text } from "@chakra-ui/react";

export const Nutrients = ({ nutrients }) => {
  const filteredNutrients = {
    kcal: nutrients.ENERC_KCAL,
    carbs: nutrients.CHOCDF,
    protein: nutrients.PROCNT,
    fat: nutrients.FAT,
    cholesterol: nutrients.CHOLE,
    sodium: nutrients.NA,
  };

  return (
    <Box w="100%" display="flex" flexDir="row">
      {Object.entries(filteredNutrients).map(([index, nutrients]) => (
        <Box key={index}>
          <Box>
            <Text ml={1} mt={2} mr={4} p={0}>
              {Math.round(nutrients.quantity)}
              {nutrients.unit}
            </Text>

            <Text ml={1} fontWeight="bold" textTransform="uppercase" mr={4}>
              {nutrients.label}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
