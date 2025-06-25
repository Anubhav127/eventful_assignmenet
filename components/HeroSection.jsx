import { Button } from "./ui/button"
import Link from "next/link";
import { ArrowRight, Calendar, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const HeroSection = () => {
return (
    <section className='w-full pt-36 md:pt-48 pb-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50'>
        <div className='space-y-6'>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    Find Perfect
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                        Artists
                    </span>
                    For Your Event
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    Connect with talented performers for weddings, corporate events, parties, and more. 
                    Book with confidence through our verified artist network.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-8">
                        <Link href="/artists">
                            Browse Artists <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link href="/onboard">Join as Artist</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <Card>
                        <CardContent className='flex flex-col items-center'>
                            <Users className="h-8 w-8 text-purple-600 mb-3" />
                            <h3 className="text-2xl font-bold text-gray-900">5,000+</h3>
                            <p className="text-sm text-muted-foreground">Verified Artists</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='flex flex-col items-center'>
                            <Calendar className="h-8 w-8 text-purple-600 mb-3" />
                            <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
                            <p className="text-sm text-muted-foreground">Events Booked</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='flex flex-col items-center'>
                            <Star className="h-8 w-8 text-purple-600 mb-3" />
                            <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
                            <p className="text-sm text-muted-foreground">Average Rating</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
)
}

export default HeroSection