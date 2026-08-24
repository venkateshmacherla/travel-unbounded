type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main>
      <h1>{slug}</h1>
      <p>Explore this destination with Travel Unbounded.</p>
    </main>
  );
}