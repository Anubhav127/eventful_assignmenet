'use client';

import { useState, useEffect } from 'react';
import ArtistCard from "./ArtistCard";
import ArtistFilters from './ArtistFilters';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { mockArtists } from '@/data/mockArtists';
import { useSearchParams } from 'next/navigation';

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    categories: [],
    location: '',
    feeRange: ''
  });
  const [filteredArtists, setFilteredArtists] = useState(mockArtists);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        categories: [category]
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    let result = mockArtists.filter(artist => {
      if (
        searchTerm &&
        !artist.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !artist.category.some(cat =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) {
        return false;
      }

      if (
        filters.categories.length > 0 &&
        !filters.categories.some(cat => artist.category.includes(cat))
      ) {
        return false;
      }

      if (filters.location && artist.location !== filters.location) {
        return false;
      }

      if (filters.feeRange && artist.feeRange !== filters.feeRange) {
        return false;
      }

      return true;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredArtists(result);
  }, [searchTerm, filters, sortBy]);

  const handleFiltersChange = newFilters => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      location: '',
      feeRange: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <main className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Artists</h1>
          <p className="text-lg text-muted-foreground">
            Discover talented performers for your next event
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search artists, categories, or keywords..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ArtistFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredArtists.length} artist
                {filteredArtists.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No artists found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button onClick={handleClearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtists.map(artist => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
