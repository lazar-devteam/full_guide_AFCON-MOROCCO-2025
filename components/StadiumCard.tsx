export default function StadiumCard({ stadium }: any) {
  return (
    <div className="card">
      <h3>{stadium.name}</h3>
      <p>{stadium.city}</p>
    </div>
  );
}
