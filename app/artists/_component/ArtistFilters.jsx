"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';
import { categories, feeRanges, locations } from '@/data/types'

const ArtistFilters = ({ filters, onFiltersChange, onClearFilters }) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryChange = (category, checked) => {
        const newCategories = checked 
        ? [...filters.categories, category]
        : filters.categories.filter(c => c !== category);
        
        onFiltersChange({
        ...filters,
        categories: newCategories
        });
    };

    const handleLocationChange = (location) => {
        onFiltersChange({
        ...filters,
        location: location === 'all' ? '' : location
        });
    };

    const handleFeeRangeChange = (feeRange) => {
        onFiltersChange({
        ...filters,
        feeRange: feeRange === 'all' ? '' : feeRange
        });
    };

    const activeFiltersCount = filters.categories.length + 
        (filters.location ? 1 : 0) + 
        (filters.feeRange ? 1 : 0);
  
    return (
        <div className="space-y-4">
            <div className="lg:hidden">
                <Button variant="outline" 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full justify-between border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800" >
                <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-purple-400" />
                    Filters
                    {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-purple-600 text-white">{activeFiltersCount}</Badge>
                    )}
                </div>
                </Button>
            </div>

            <div className={`space-y-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                <Card className="bg-neutral-900 border border-neutral-800 text-white">
                <CardHeader className="pb-3 border-b border-neutral-800">
                    <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Filters</CardTitle>
                    {activeFiltersCount > 0 && (
                        <Button variant="ghost" size="sm"
                            onClick={onClearFilters}
                            className="text-sm text-purple-400 hover:bg-neutral-800" >
                            <X className="h-4 w-4 mr-1" />
                            Clear All
                        </Button>
                    )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <div>
                    <h4 className="font-medium mb-3 text-purple-400">Categories</h4>
                    <div className="space-y-2">
                        {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                            id={category}
                            checked={filters.categories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                            className="border-neutral-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                            />
                            <label htmlFor={category} className="text-sm font-medium leading-none text-neutral-300">
                            {category}
                            </label>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div>
                    <h4 className="font-medium mb-3 text-purple-400">Location</h4>
                    <Select onValueChange={handleLocationChange} value={filters.location || 'all'}>
                        <SelectTrigger className="border-neutral-700 bg-neutral-900 text-white">
                        <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                        <SelectItem value="all">All Locations</SelectItem>
                        {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                            {location}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </div>

                    <div>
                    <h4 className="font-medium mb-3 text-purple-400">Fee Range</h4>
                    <Select onValueChange={handleFeeRangeChange} value={filters.feeRange || 'all'}>
                        <SelectTrigger className="border-neutral-700 bg-neutral-900 text-white">
                        <SelectValue placeholder="Select fee range" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                        <SelectItem value="all">All Ranges</SelectItem>
                        {feeRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                            {range}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </div>
                </CardContent>
                </Card>
                
                {activeFiltersCount > 0 && (
                <Card className="bg-neutral-900 border border-neutral-800 text-white">
                    <CardHeader className="pb-3 border-b border-neutral-800">
                    <CardTitle className="text-sm">Active Filters</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                        {filters.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="flex items-center gap-1 bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {category}
                            <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleCategoryChange(category, false)}
                            />
                        </Badge>
                        ))}
                        {filters.location && (
                        <Badge variant="secondary" className="flex items-center gap-1 bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {filters.location}
                            <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleLocationChange('all')}
                            />
                        </Badge>
                        )}
                        {filters.feeRange && (
                        <Badge variant="secondary" className="flex items-center gap-1 bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {filters.feeRange}
                            <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleFeeRangeChange('all')}
                            />
                        </Badge>
                        )}
                    </div>
                    </CardContent>
                </Card>
                )}
            </div>
        </div>
    )
}

export default ArtistFilters