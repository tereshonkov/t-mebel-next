
interface PageProps {
  params: { id: string };
}



export default function FurniturePage({ params }: PageProps) {
  const { id } = params;
  
  return (
    <div>
      <h1>Мебель с ID: {id}</h1>
      {/* Здесь получите данные по id и отобразите */}              
    </div>
  );
}