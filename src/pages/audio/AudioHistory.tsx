import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AudioHistory() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Audio History</CardTitle>
          <CardDescription>Access your previously generated audio files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            Your audio generation history will appear here once you start creating audio files.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}