export default function FurniturePage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  return (
    <div>
      <h1>Мебель с ID: {id}</h1>
      {/* Здесь получите данные по id и отобразите */}              
    </div>
  );
}

/* СОЗДАТЬ МАССИВ СУЩНОСТЬ ДЛЯ ВСЕХ ФОТОК МЕБЕЛИ ИСПОЛЬЗОВАТЬ DATA.JSON
 {
  id: 1,  ID мебели
  title: "Мебель 1", НАЗВАНИЕ МЕБЕЛИ
  description: "Описание мебели 1", ОПИСАНИЕ МЕБЕЛИ
  color: "Красный", ЦВЕТ МЕБЕЛИ
  furnitures: "blum, hpl, mdf", ФУРНИТУРЫ
  image: ["/images/furniture1.jpg", "/images.furniture2.jpg".....], ИЗОБРАЖЕНИЕ МЕБЕЛИ
  width: 120,
  height: 80,
  rating: 5,
}
 */