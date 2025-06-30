export const parseIngredients = (recipe) => {
  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      });
    }
  }
  
  return ingredients;
};

export const formatInstructions = (instructions) => {
  if (!instructions) return [];
  return instructions
    .split(/\.\s|\n|\d+\.\s/)
    .filter(step => step.trim().length > 0)
    .map(step => step.trim());
};