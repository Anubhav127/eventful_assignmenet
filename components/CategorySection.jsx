import categories from "@/data/category"
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import * as Icon from "lucide-react";

const CategorySection = () => {

  return (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Browse by <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Category</span>
                </h2>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Find the perfect artist for your event from our diverse range of talented performers
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            { categories.map((category) => {
                const IconComponent = Icon[category.icon];
                
                return (
                    <Card key={category.name} className="group bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300">
                        <CardContent className="pt-6 flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-neutral-800 mb-4 group-hover:bg-purple-500/10 transition-colors">
                                <IconComponent className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{category.name}</h3>
                            <p className="text-neutral-400 text-sm mb-3 h-10">{category.description}</p>
                            <div className="text-2xl font-bold text-white mb-4">{category.count}</div>
                            <Button asChild variant="outline" size="sm" 
                                className="w-full border-neutral-700 bg-transparent hover:bg-neutral-800 text-white transition-all duration-300">
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
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
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