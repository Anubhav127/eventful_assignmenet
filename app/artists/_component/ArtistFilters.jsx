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
                className="w-full justify-between" >
                <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-purple-600">{activeFiltersCount}</Badge>
                    )}
                </div>
                </Button>
            </div>

            <div className={`space-y-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Filters</CardTitle>
                    {activeFiltersCount > 0 && (
                        <Button variant="ghost" size="sm"
                            onClick={onClearFilters}
                            className="text-sm" >
                            <X className="h-4 w-4 mr-1" />
                            Clear All
                        </Button>
                    )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                        {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                            id={category}
                            checked={filters.categories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                            />
                            <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {category}
                            </label>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div>
                    <h4 className="font-medium mb-3">Location</h4>
                    <Select onValueChange={handleLocationChange} value={filters.location || 'all'}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
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
                    <h4 className="font-medium mb-3">Fee Range</h4>
                    <Select onValueChange={handleFeeRangeChange} value={filters.feeRange || 'all'}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select fee range" />
                        </SelectTrigger>
                        <SelectContent>
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
                <Card>
                    <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Active Filters</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {filters.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="flex items-center gap-1">
                            {category}
                            <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleCategoryChange(category, false)}
                            />
                        </Badge>
                        ))}
                        {filters.location && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                            {filters.location}
                            <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleLocationChange('all')}
                            />
                        </Badge>
                        )}
                        {filters.feeRange && (
                        <Badge variant="secondary" className="flex items-center gap-1">
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