import Image from "next/image"
import { Clock, Globe } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type RecipeProps = {
  recipe: {
    id: number
    name: string
    cuisine: string
    prepTime: string
    ingredients: string[]
    image: string
  }
}

export default function RecipeCard({ recipe }: RecipeProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{recipe.name}</h3>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex items-center text-sm text-gray-600">
            <Globe className="mr-1 h-4 w-4 text-orange-500" />
            {recipe.cuisine}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="mr-1 h-4 w-4 text-orange-500" />
            {recipe.prepTime}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.ingredients.map((ingredient, index) => (
            <Badge key={index} variant="outline" className="bg-orange-100">
              {ingredient}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-orange-50 p-4">
        <button className="w-full rounded-md bg-orange-500 py-2 text-white transition-colors hover:bg-orange-600">
          View Recipe
        </button>
      </CardFooter>
    </Card>
  )
}

