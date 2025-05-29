export interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  likes: number;
}

export interface Category {
  id: string;
  name: string;
}