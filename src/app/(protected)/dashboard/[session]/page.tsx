export default async function DashboardPage({ params }: { params: Promise<{ session: string }> }) {
  const { session } = await params;
  return (
    <div className="p-8">
      
    </div>
  );
}
