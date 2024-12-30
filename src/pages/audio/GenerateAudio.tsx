import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GenerateAudio() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Audio</CardTitle>
          <CardDescription>Convert your scripts into natural-sounding audio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            This feature is coming soon. You'll be able to convert your scripts into high-quality audio.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}