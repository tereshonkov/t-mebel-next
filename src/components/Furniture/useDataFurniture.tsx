import { useTranslations } from "next-intl";


export default function useDataFurniture() {

const t = useTranslations("furniture");

 type Service = {
    img: string;
  };
 type SelectedItem = {
    name: string;
    id: number;
  };
  const selected: SelectedItem[] = [
    {
      name: t('kitchens'),
      id: 1,
    },
    {
      name: t('wardrobes'),
      id: 2,
    },
    {
      name: t('stores'),
      id: 3,
    },
    {
      name: t('bedrooms'),
      id: 4,
    },
  ];

const kitchens: Service[] = [
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/2/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/3/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/6/tablet.webp",
    },
  ];
  const wardrobe: Service[] = [
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/2/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/3/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/4/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/5/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp",
    },
  ];
  const shops: Service[] = [
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/5/tablet.webp",
    },
  ]
  const bedrooms: Service[] = [
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/2/tablet.webp",
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/3/tablet.webp"
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/8/tablet.webp"
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/1/tablet.webp"
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/2/tablet.webp"
    },
    {
      img: "https://storage.googleapis.com/t-mebel/Image/wall.jpg"
    }
  ];

  
  return {
    kitchens,
    wardrobe,
    shops,
    bedrooms,
    selected,
  };
}