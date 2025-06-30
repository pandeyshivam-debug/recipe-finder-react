import { Link } from "react-router-dom"

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="block">
      <div className="recipe-card">
        <div className="aspect-square overflow-hidden">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2">
            {recipe.strMeal}
          </h3>
          {recipe.strCategory && (
            <p className="text-sm text-gray-600 mt-1">{recipe.strCategory}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard