import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const ArtistCard = ({artist}) => {
  return (
    <Card className="group hover:shadow-xl transition-all overflow-hidden duration-300 border-0">
      <div className="relative overflow-hidden">
        <Image
          src={artist.image}
          alt={`${artist.name} - ${artist.category.join(', ')}`}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{artist.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-1 mb-3">
          {artist.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
          {artist.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {artist.bio}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {artist.location}
          </div>
          <div className="text-sm">
            <span className="font-semibold text-green-600">{artist.feeRange}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {artist.reviewCount} reviews
          </div>
        </div>
        
        <Button className="w-full group-hover:shadow-lg transition-all duration-300">
          <MessageCircle className="h-4 w-4 mr-2" />
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  )
}

export default ArtistCard