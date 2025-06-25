import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const ArtistCard = ({ artist }) => {
  return (
    <Card className="group bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={artist.image}
          alt={`${artist.name} - ${artist.category.join(', ')}`}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{artist.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-wrap gap-1 mb-3">
          {artist.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700">
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {artist.name}
        </h3>

        <p className="text-neutral-400 text-sm mb-4 line-clamp-2 h-10">
          {artist.bio}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-neutral-400">
            <MapPin className="h-4 w-4 mr-2 text-neutral-500" />
            {artist.location}
          </div>
          <div className="text-sm">
            <span className="font-semibold text-green-400">{artist.feeRange}</span>
          </div>
          <div className="text-sm text-neutral-400">
            {artist.reviewCount} reviews
          </div>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          <MessageCircle className="h-4 w-4 mr-2" />
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  )
}

export default ArtistCard