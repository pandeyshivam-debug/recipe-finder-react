import RecipeCard from "./RecipeCard"

const RecipeList = ({ recipes, isLoading, hasSearched }) => {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        <p className="mt-4 text-gray-600">Searching for recipes...</p>
      </div>
    )
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🍳</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Your Next Favorite Recipe</h2>
        <p className="text-gray-600">Search for recipes by name, ingredient, or cuisine type</p>
      </div>
    )
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">:)</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">No recipes found</h2>
        <p className="text-gray-600">Try searching for something else like "chicken", "pasta", or "cake"</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipeList