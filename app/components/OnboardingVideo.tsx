'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface OnboardingVideoProps {
  clientId: string;
  initialVideoUrl?: string;
  onVideoUpdate?: (videoUrl: string) => void;
}

export function OnboardingVideo({ clientId, initialVideoUrl = '', onVideoUpdate }: OnboardingVideoProps) {
  const [videoUrl, setVideoUrl] = useState(initialVideoUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setError(null);

    try {
      // Ici, vous pouvez ajouter la logique pour sauvegarder l'URL de la vidéo
      // Par exemple, un appel API vers votre backend
      if (onVideoUpdate) {
        await onVideoUpdate(videoUrl);
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la mise à jour de la vidéo.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vidéo d&apos;onboarding</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="videoUrl">URL de la vidéo</Label>
            <Input
              id="videoUrl"
              type="url"
              placeholder="https://..."
              value={videoUrl}
              onChange={handleVideoUrlChange}
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {videoUrl && (
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <Button type="submit" disabled={isUploading}>
            {isUploading ? 'Mise à jour...' : 'Mettre à jour la vidéo'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 