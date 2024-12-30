import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScriptHistory() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Script History</CardTitle>
          <CardDescription>View your previously generated scripts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-muted-foreground">
            Your script generation history will appear here once you start creating scripts.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}