export type Review = {
  id: string;
  name: string;
  text: string;
  productId: string;
  isApproved?: boolean;
}

export type Images = {
  url: string;
  id: string;
  isCover: boolean;
  productId: string;
  reviewId: string | null;
};

export type Data = {
  id: number;
  title: string;
  description: string;
  color: string;
  furnitures: string;
  images: Images[];
  width?: number;
  height?: number;
  rating?: number;
  category?: "KITCHEN" | "WARDROBE" | "STORE" | "BEDROOM";
  reviews?: Review[];
};