export type Data = {
    id: number;
    title: string;
    description: string;
    color: string;
    furnitures: string;
    image: string;
    images?: ImageType[];
    width?: number;
    height?: number;
    raiting?: number;
    categories?: string[];
  };

  export interface ImageType {
    url: string;
    isCover: boolean;
  }