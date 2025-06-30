import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { FavoritesProvider } from "./context/FavoritesContext"
import Navigation from "./components/Navigation"
import SearchPage from "./pages/SearchPage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import FavoritesPage from "./pages/FavoritesPage"

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App