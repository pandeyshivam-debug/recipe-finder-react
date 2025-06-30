import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import RecipeCard from "../components/RecipeCard"

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Favorite Recipes</h1>
        
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💔</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">No favorites yet</h2>
          <p className="text-gray-600 mb-6">Start exploring recipes and add them to your favorites!</p>
          <Link to="/" className="btn-primary">
            Discover Recipes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Favorite Recipes</h1>
        <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
          {favorites.length} recipe{favorites.length !== 1 ? "s" : ""}
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage