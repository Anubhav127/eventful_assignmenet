import { Button } from "./ui/button"
import Link from "next/link";
import { ArrowRight, Calendar, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const HeroSection = () => {
return (
    <section className='w-full pt-36 md:pt-48 pb-20 bg-black'>
        <div className='space-y-12'>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                    Find Perfect
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                        Artists
                    </span>
                    For Your Event
                </h1>

                <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Connect with talented performers for weddings, corporate events, parties, and more. 
                    Book with confidence through our verified artist network.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-8 text-white">
                        <Link href="/artists">
                            Browse Artists <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 border-neutral-700 bg-transparent hover:bg-neutral-900 text-white">
                        <Link href="/onboard">Join as Artist</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-neutral-900 border-neutral-800">
                        <CardContent className='flex flex-col items-center p-6'>
                            <Users className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white">5,000+</h3>
                            <p className="text-sm text-neutral-400">Verified Artists</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-neutral-900 border-neutral-800">
                        <CardContent className='flex flex-col items-center p-6'>
                            <Calendar className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white">50,000+</h3>
                            <p className="text-sm text-neutral-400">Events Booked</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-neutral-900 border-neutral-800">
                        <CardContent className='flex flex-col items-center p-6'>
                            <Star className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white">4.9/5</h3>
                            <p className="text-sm text-neutral-400">Average Rating</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
)
}

export default HeroSection