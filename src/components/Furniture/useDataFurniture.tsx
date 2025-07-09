import { useTranslations } from "next-intl";


export default function useDataFurniture() {

  const t = useTranslations("furniture");

  type Service = {
    id: number;
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
      id: 1,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp",
    },
    {
      id: 2,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/2/tablet.webp",
    },
    {
      id: 3,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/3/tablet.webp",
    },
    {
      id: 4,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp",
    },
    {
      id: 5,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp",
    },
    {
      id: 6,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp",
    },
  ];
  const wardrobe: Service[] = [
    {
      id: 7,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp",
    },
    {
      id: 8,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/2/tablet.webp",
    },
    {
      id: 9,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/3/tablet.webp",
    },
    {
      id: 10,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/4/tablet.webp",
    },
    {
      id: 11,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/5/tablet.webp",
    },
    {
      id: 12,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp",
    },
  ];
  const shops: Service[] = [
    {
      id: 13,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/5/tablet.webp",
    },
  ]
  const bedrooms: Service[] = [
    {
      id: 14,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/2/tablet.webp",
    },
    {
      id: 15,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/8/tablet.webp"
    },
    {
      id: 16,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/1/tablet.webp"
    },
    {
      id: 17,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/2/tablet.webp"
    },
    {
      id: 18,
      img: "https://storage.googleapis.com/t-mebel/Image/wall.jpg"
    },
    {
      id: 19,
      img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp",
    },
  ];


  return {
    kitchens,
    wardrobe,
    shops,
    bedrooms,
    selected,
  };
}