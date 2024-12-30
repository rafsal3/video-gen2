import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VideoHistory() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Video History</CardTitle>
          <CardDescription>View your previously generated videos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            Your video generation history will appear here once you start creating videos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}