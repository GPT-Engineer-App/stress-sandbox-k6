import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="A cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
            <CardDescription>What makes cats unique?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Independent nature</li>
              <li>Excellent hunters with sharp claws and teeth</li>
              <li>Flexible bodies and quick reflexes</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known cat breeds around the world</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Siamese</li>
              <li>Persian</li>
              <li>Maine Coon</li>
              <li>Bengal</li>
              <li>British Shorthair</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
