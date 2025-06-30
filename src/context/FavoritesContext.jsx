import { createContext, useContext, useReducer, useEffect } from "react"

const FavoritesContext = createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const newFavorites = [...state, action.payload]
      return newFavorites
    case "REMOVE_FAVORITE":
      return state.filter(recipe => recipe.idMeal !== action.payload)
    case "SET_FAVORITES":
      return action.payload
    default:
      return state
  }
}

export const FavoritesProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("favorites")) || []
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (recipe) => {
    dispatch({ type: "ADD_FAVORITE", payload: recipe })
  }

  const removeFromFavorites = (recipeId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: recipeId })
  }

  const isFavorite = (recipeId) => {
    return favorites.some(recipe => recipe.idMeal === recipeId)
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}