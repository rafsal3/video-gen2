import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GenerateVideo() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Video</CardTitle>
          <CardDescription>Create engaging videos from your scripts and audio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            This feature is coming soon. You'll be able to create professional videos using your scripts and audio.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}