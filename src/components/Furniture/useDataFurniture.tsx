import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";


export default function useDataFurniture() {

  const t = useTranslations("furniture");

  type Data = {
    id: number;
    title: string;
    description: string;
    color: string;
    furnitures: string;
    image: string;
    images?: string[];
    width?: number;
    height?: number;
    raiting?: number;
    categories?: string[];
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

  // const kitchens: Service[] = [
  //   {
  //     id: 1,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp",
  //   },
  //   {
  //     id: 2,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/2/tablet.webp",
  //   },
  //   {
  //     id: 3,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/3/tablet.webp",
  //   },
  //   {
  //     id: 4,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp",
  //   },
  //   {
  //     id: 5,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp",
  //   },
  //   {
  //     id: 6,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp",
  //   },
  // ];
  // const wardrobe: Service[] = [
  //   {
  //     id: 7,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp",
  //   },
  //   {
  //     id: 8,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/2/tablet.webp",
  //   },
  //   {
  //     id: 9,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/3/tablet.webp",
  //   },
  //   {
  //     id: 10,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/4/tablet.webp",
  //   },
  //   {
  //     id: 11,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/5/tablet.webp",
  //   },
  //   {
  //     id: 12,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp",
  //   },
  // ];
  // const shops: Service[] = [
  //   {
  //     id: 13,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/5/tablet.webp",
  //   },
  // ]
  // const bedrooms: Service[] = [
  //   {
  //     id: 14,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/2/tablet.webp",
  //   },
  //   {
  //     id: 15,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/8/tablet.webp"
  //   },
  //   {
  //     id: 16,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/rizne/1/tablet.webp"
  //   },
  //   {
  //     id: 17,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/2/tablet.webp"
  //   },
  //   {
  //     id: 18,
  //     img: "https://storage.googleapis.com/t-mebel/Image/wall.jpg"
  //   },
  //   {
  //     id: 19,
  //     img: "https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp",
  //   },
  // ];

  const [active, setActive] = useState<number>(1);
  const [array, setArray] = useState<Data[]>([]);
  useEffect(() => { 
    const fetchData = async () => {
      try{
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Data fetched successfully in useDataFurniture component:", data);
        setArray(data);
      }catch (e) {
        console.error("Error fetching data in useDataFurniture component!:", e);
      }
    }
    fetchData();
  }, []);
  const kitchens = array.filter(item => item.categories?.includes('kitchen'));
  const wardrobe = array.filter(item => item.categories?.includes('wardrobe'));
  const store = array.filter(item => item.categories?.includes('store'));
  const bedrooms = array.filter(item => item.categories?.includes('bedroom'));
  return {
    active,
    setActive,
    selected,
    kitchens,
    wardrobe,
    store,
    bedrooms,
  };
}