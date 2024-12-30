import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GenerateScript() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Script</CardTitle>
          <CardDescription>Create a new script using AI assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            This feature is coming soon. You'll be able to generate scripts using advanced AI technology.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}