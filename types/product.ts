export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: CategoriesType[];
  images: ImageType[];
  reviews: ReviewType[];
}

export interface CategoriesType {
  id: string;
  name: string;
}

export interface ImageType {
  width: number;
  height: number;
  fileName: string;
  url: string;
}

export interface ReviewType {
  id: string;
  rating: string;
  email: string;
  name: string;
  headline: string;
  content: string;
}
