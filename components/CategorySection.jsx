import categories from "@/data/category"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import * as Icon from "lucide-react";

const CategorySection = () => {

  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Browse by Category
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Find the perfect artist for your event from our diverse range of talented performers
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            { categories.map((category) => {
                const IconComponent = Icon[category.icon];
                
                return (
                    <Card key={category.name} className="group hover:shadow-lg hover:scale-105 overflow-hidden transition-all duration-300 border-0 ">
                        <CardContent className="pt-6 flex flex-col items-center">
                            <IconComponent className="h-8 w-8 text-black" />
                            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                            <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                            <div className="text-2xl font-bold text-gray-900 mb-4">{category.count}</div>
                            <Button asChild variant="outline" size="sm" 
                                className="w-full hover:bg-black/80 transition-all duration-300">
                                <Link href={`/artists?category=${category.name}`}>
                                    Explore {category.name}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
            </div>

            <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="/artists">
                    View All Artists <Icon.ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>

        </div>
    </section>
  )
}

export default CategorySection