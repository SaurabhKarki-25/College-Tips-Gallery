import { Photo, Category } from '../types';

export const categories: Category[] = [
  { id: 'study-tips', name: 'Study Tips' },
  { id: 'campus-life', name: 'Campus Life' },
  { id: 'student-success', name: 'Student Success' },
  { id: 'career-prep', name: 'Career Preparation' },
  { id: 'student-wellness', name: 'Student Wellness' },
];

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Campus Celebration',
    description: 'Students celebrating their achievements with joy and enthusiasm at a college event.',
    imageUrl: '/photo-1581092795360-fd1ca04f0952.jpeg',
    category: 'campus-life',
    likes: 245,
  },
  {
    id: 2,
    title: 'Broadcast Production Studio',
    description: 'Students gaining hands-on experience in the college broadcast studio.',
    imageUrl: '/MS5qcGVn.jpg',
    category: 'career-prep',
    likes: 189,
  },
  {
    id: 3,
    title: 'Smart Money Management',
    description: 'Learn effective strategies for managing your finances during college years.',
    imageUrl: '/ZXMvbW9uZXkuanBn.jpg',
    category: 'student-success',
    likes: 167,
  },
  {
    id: 4,
    title: 'Campus Hangout Spot',
    description: 'Friends enjoying their favorite campus hangout spot with refreshing drinks.',
    imageUrl: '/MzYuanBn.jpg',
    category: 'campus-life',
    likes: 198,
  },
  {
    id: 5,
    title: 'Student Community Meetup',
    description: 'Building lasting friendships and memories at campus community events.',
    imageUrl: '/Zw.jpg',
    category: 'campus-life',
    likes: 156,
  },
  {
    id: 6,
    title: 'Library Research Resources',
    description: 'Make the most of your university library\'s vast resources.',
    imageUrl: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg',
    category: 'study-tips',
    likes: 134,
  },
  {
    id: 7,
    title: 'Wellness Center Activities',
    description: 'Stay active and healthy with campus wellness programs.',
    imageUrl: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg',
    category: 'student-wellness',
    likes: 178,
  },
  {
    id: 8,
    title: 'Career Fair Preparation',
    description: 'Tips for making the most of career fairs and networking events.',
    imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    category: 'career-prep',
    likes: 145,
  },
  {
    id: 9,
    title: 'Mindful Study Break',
    description: 'Take mindful breaks to maintain focus and reduce stress.',
    imageUrl: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
    category: 'student-wellness',
    likes: 167,
  },
  {
    id: 10,
    title: 'Campus Community Events',
    description: 'Participate in vibrant campus community activities.',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'campus-life',
    likes: 189,
  },
  {
    id: 11,
    title: 'Study Group Success',
    description: 'Form effective study groups for better learning outcomes.',
    imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
    category: 'study-tips',
    likes: 156,
  },
  {
    id: 12,
    title: 'Healthy Meal Planning',
    description: 'Budget-friendly meal prep tips for busy students.',
    imageUrl: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
    category: 'student-wellness',
    likes: 198,
  }
];