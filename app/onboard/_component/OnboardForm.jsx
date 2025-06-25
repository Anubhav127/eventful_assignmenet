'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Upload, User, FileText, Tag, Globe, DollarSign, MapPin, Camera } from 'lucide-react';
import { categories, languages, feeRanges } from '@/data/types';

const steps = [
  { id: 1, name: 'Personal Info', icon: User },
  { id: 2, name: 'Professional Details', icon: FileText },
  { id: 3, name: 'Categories & Skills', icon: Tag },
  { id: 4, name: 'Languages & Location', icon: Globe },
  { id: 5, name: 'Pricing & Media', icon: DollarSign },
];


const OnboardForm = () => {
  
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
        name: '',
        email: '',
        phone: '',
        bio: '',
        categories: [],
        languages: [],
        feeRange: '',
        location: '',
        profileImage: null
        }
    });

    const watchedValues = watch();

    const handleCategoryChange = (category, checked) => {
        const newCategories = checked 
        ? [...selectedCategories, category]
        : selectedCategories.filter(c => c !== category);
        
        setSelectedCategories(newCategories);
        setValue('categories', newCategories);
    };

    const handleLanguageChange = (language, checked) => {
        const newLanguages = checked 
        ? [...selectedLanguages, language]
        : selectedLanguages.filter(l => l !== language);
        
        setSelectedLanguages(newLanguages);
        setValue('languages', newLanguages);
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        setIsSubmitted(true);
    };
  
    if (isSubmitted) {
        return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-xl text-muted-foreground">
                Thank you for joining Artistly. We'll review your application and get back to you within 2-3 business days.
            </p>
            </div>
            <Alert className="mb-8">
            <AlertDescription>
                You'll receive a confirmation email shortly with next steps and access to your artist dashboard.
            </AlertDescription>
            </Alert>
            <Button asChild size="lg">
            <a href="/">Return to Home</a>
            </Button>
        </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isCompleted = currentStep > step.id;
                    const isCurrent = currentStep === step.id;
                    
                    return (
                    <div key={step.id} className="flex items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        isCompleted 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : isCurrent 
                            ? 'bg-purple-600 border-purple-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-400'
                        }`}>
                        {isCompleted ? (
                            <CheckCircle className="h-5 w-5" />
                        ) : (
                            <StepIcon className="h-5 w-5" />
                        )}
                        </div>
                        <div className="ml-3 hidden sm:block">
                        <div className={`text-sm font-medium ${
                            isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                            {step.name}
                        </div>
                        </div>
                        {index < steps.length - 1 && (
                        <div className={`hidden sm:block w-16 h-0.5 ml-4 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-300'
                        }`} />
                        )}
                    </div>
                    );
                })}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        {(() => {
                        const StepIcon = steps[currentStep - 1].icon;
                        return <StepIcon className="h-5 w-5 mr-2" />;
                        })()}
                        {steps[currentStep - 1].name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    {currentStep === 1 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                placeholder="Your full name"
                                />
                                {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                id="email"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                placeholder="your@email.com"
                                />
                                {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                        <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            {...register('phone')}
                            placeholder="(555) 123-4567"
                        />
                        </div>
                    </div>
                    )}

                    {currentStep === 2 && (
                    <div className="space-y-6">
                        <div>
                        <Label htmlFor="bio">Professional Bio *</Label>
                        <Textarea
                            id="bio"
                            {...register('bio', { required: 'Bio is required' })}
                            placeholder="Tell us about your experience, style, and what makes you unique..."
                            rows={6}
                        />
                        {errors.bio && (
                            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                            This will be shown to potential clients. Make it engaging!
                        </p>
                        </div>
                    </div>
                    )}

                    {currentStep === 3 && (
                    <div className="space-y-6">
                        <div>
                        <Label>Categories * (Select all that apply)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                            {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                                <Checkbox
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                                />
                                <Label htmlFor={category} className="text-sm">
                                {category}
                                </Label>
                            </div>
                            ))}
                        </div>
                        {selectedCategories.length === 0 && (
                            <p className="text-red-500 text-sm mt-1">Please select at least one category</p>
                        )}
                        </div>
                    </div>
                    )}

                    {currentStep === 4 && (
                    <div className="space-y-6">
                        <div>
                        <Label>Languages Spoken</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                            {languages.map((language) => (
                            <div key={language} className="flex items-center space-x-2">
                                <Checkbox
                                id={language}
                                checked={selectedLanguages.includes(language)}
                                onCheckedChange={(checked) => handleLanguageChange(language, checked)}
                                />
                                <Label htmlFor={language} className="text-sm">
                                {language}
                                </Label>
                            </div>
                            ))}
                        </div>
                        </div>
                        <div className="relative">
                        <Label htmlFor="location">Location *</Label>
                        <Input
                            id="location"
                            {...register('location', { required: 'Location is required' })}
                            placeholder="City, State"
                        />
                        <MapPin className="absolute right-3 top-8 text-muted-foreground h-4 w-4" />
                        {errors.location && (
                            <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                        )}
                        </div>
                    </div>
                    )}

                    {currentStep === 5 && (
                    <div className="space-y-6">
                        <div>
                        <Label htmlFor="feeRange">Fee Range *</Label>
                        <Select onValueChange={(value) => setValue('feeRange', value)}>
                            <SelectTrigger>
                            <SelectValue placeholder="Select your fee range" />
                            </SelectTrigger>
                            <SelectContent>
                            {feeRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                {range}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        </div>
                        <div>
                        <Label htmlFor="profileImage">Profile Image</Label>
                        <div className="mt-2">
                            <label htmlFor="profileImage" className="cursor-pointer">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                                <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">
                                Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                PNG, JPG up to 5MB
                                </p>
                            </div>
                            </label>
                            <Input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            {...register('profileImage')}
                            />
                        </div>
                        </div>
                    </div>
                    )}

                    <div className="flex justify-between pt-8">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                    >
                        Previous
                    </Button>
                    
                    {currentStep === steps.length ? (
                        <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        disabled={selectedCategories.length === 0}
                        >
                        Submit Application
                        </Button>
                    ) : (
                        <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                        Next
                        </Button>
                    )}
                    </div>
                </form>
                </CardContent>
            </Card>
        </div>
  );
}

export default OnboardForm