export const mockArtists = [
  {
    id: '1',
    name: 'Sarah Johnson',
    category: ['Singers'],
    bio: 'Professional jazz vocalist with 10+ years of experience performing at corporate events and weddings.',
    languages: ['English', 'French'],
    feeRange: '$2,500 - $5,000',
    location: 'New York, NY',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 127,
    featured: true
  },
  {
    id: '2',
    name: 'Marcus Williams',
    category: ['DJs'],
    bio: 'High-energy DJ specializing in weddings and corporate events. Expert in reading crowds and creating unforgettable experiences.',
    languages: ['English', 'Spanish'],
    feeRange: '$1,000 - $2,500',
    location: 'Los Angeles, CA',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 89,
    featured: true
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    category: ['Dancers'],
    bio: 'Contemporary and ballroom dance instructor and performer. Available for lessons, performances, and choreography.',
    languages: ['English', 'Spanish', 'Portuguese'],
    feeRange: '$1,000 - $2,500',
    location: 'Miami, FL',
    image: 'https://images.pexels.com/photos/1646994/pexels-photo-1646994.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 76,
    featured: false
  },
  {
    id: '4',
    name: 'David Chen',
    category: ['Speakers'],
    bio: 'Motivational speaker and business coach with expertise in leadership development and team building.',
    languages: ['English', 'Mandarin'],
    feeRange: '$5,000 - $10,000',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 203,
    featured: true
  },
  {
    id: '5',
    name: 'Jazz Collective',
    category: ['Musicians', 'Bands'],
    bio: 'Professional 4-piece jazz ensemble perfect for corporate events, weddings, and private parties.',
    languages: ['English'],
    feeRange: '$2,500 - $5,000',
    location: 'Chicago, IL',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 145,
    featured: false
  },
  {
    id: '6',
    name: 'Carmen Lopez',
    category: ['Singers', 'Dancers'],
    bio: 'Bilingual performer specializing in Latin music and dance. Perfect for cultural events and celebrations.',
    languages: ['English', 'Spanish'],
    feeRange: '$1,000 - $2,500',
    location: 'Austin, TX',
    image: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewCount: 92,
    featured: false
  },
  {
    id: '7',
    name: 'Michael Thompson',
    category: ['Comedians'],
    bio: 'Stand-up comedian and corporate entertainer. Clean comedy perfect for all audiences and events.',
    languages: ['English'],
    feeRange: '$2,500 - $5,000',
    location: 'Nashville, TN',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 134,
    featured: false
  },
  {
    id: '8',
    name: 'Alexandra Magic',
    category: ['Magicians'],
    bio: 'Professional magician and mentalist. Specializing in close-up magic and stage performances for all ages.',
    languages: ['English', 'French'],
    feeRange: '$1,000 - $2,500',
    location: 'Las Vegas, NV',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 167,
    featured: true
  },
  {
    id: '9',
    name: 'The Harmony Band',
    category: ['Bands', 'Musicians'],
    bio: 'Versatile 5-piece band covering everything from classic rock to modern pop. Perfect for weddings and corporate events.',
    languages: ['English'],
    feeRange: '$2,500 - $5,000',
    location: 'New York, NY',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewCount: 98,
    featured: false
  },
  {
    id: '10',
    name: 'Lisa Chen',
    category: ['Dancers'],
    bio: 'Professional ballet and contemporary dancer. Specializes in elegant performances for upscale events.',
    languages: ['English', 'Mandarin'],
    feeRange: '$1,000 - $2,500',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 156,
    featured: false
  }
];

export const mockSubmissions = [
  {
    id: '1',
    name: 'John Smith',
    category: ['Singers'],
    location: 'New York, NY',
    feeRange: '$1,000 - $2,500',
    status: 'pending',
    submittedAt: '2024-01-15',
    email: 'john.smith@email.com'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    category: ['Dancers', 'Singers'],
    location: 'Los Angeles, CA',
    feeRange: '$2,500 - $5,000',
    status: 'approved',
    submittedAt: '2024-01-14',
    email: 'maria.garcia@email.com'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    category: ['Speakers'],
    location: 'Chicago, IL',
    feeRange: '$5,000 - $10,000',
    status: 'pending',
    submittedAt: '2024-01-13',
    email: 'robert.johnson@email.com'
  },
  {
    id: '4',
    name: 'DJ Mike',
    category: ['DJs'],
    location: 'Miami, FL',
    feeRange: '$1,000 - $2,500',
    status: 'rejected',
    submittedAt: '2024-01-12',
    email: 'djmike@email.com'
  }
];
