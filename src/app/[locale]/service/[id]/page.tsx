export default async function FurniturePage({ params }: any) {
  const { id } = params as { id: string };
  
  return (
    <div>
      <h1>Мебель с ID: {id}</h1>
      {/* Здесь получите данные по id и отобразите */}              
    </div>
  );
}