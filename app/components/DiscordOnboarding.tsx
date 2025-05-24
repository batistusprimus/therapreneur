'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";

interface DiscordOnboardingProps {
  clientId: string;
  initialDiscordUrl?: string;
  initialSteps?: {
    welcomeMessage: boolean;
    roleAssignment: boolean;
    channelAccess: boolean;
    rulesAcceptance: boolean;
  };
  onDiscordUpdate?: (data: {
    discordUrl: string;
    steps: {
      welcomeMessage: boolean;
      roleAssignment: boolean;
      channelAccess: boolean;
      rulesAcceptance: boolean;
    };
  }) => void;
}

export function DiscordOnboarding({
  clientId,
  initialDiscordUrl = '',
  initialSteps = {
    welcomeMessage: false,
    roleAssignment: false,
    channelAccess: false,
    rulesAcceptance: false,
  },
  onDiscordUpdate,
}: DiscordOnboardingProps) {
  const [discordUrl, setDiscordUrl] = useState(initialDiscordUrl);
  const [steps, setSteps] = useState(initialSteps);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDiscordUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscordUrl(e.target.value);
    setError(null);
  };

  const handleStepChange = (step: keyof typeof steps) => {
    setSteps(prev => ({
      ...prev,
      [step]: !prev[step]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setError(null);

    try {
      if (onDiscordUpdate) {
        await onDiscordUpdate({
          discordUrl,
          steps
        });
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la mise à jour des informations Discord.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Onboarding Discord</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="discordUrl">Lien d&apos;invitation Discord</Label>
            <Input
              id="discordUrl"
              type="url"
              placeholder="https://discord.gg/..."
              value={discordUrl}
              onChange={handleDiscordUrlChange}
              required
            />
          </div>

          <div className="space-y-4">
            <Label>Étapes d&apos;onboarding</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="welcomeMessage"
                  checked={steps.welcomeMessage}
                  onCheckedChange={() => handleStepChange('welcomeMessage')}
                />
                <Label htmlFor="welcomeMessage">Message de bienvenue envoyé</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="roleAssignment"
                  checked={steps.roleAssignment}
                  onCheckedChange={() => handleStepChange('roleAssignment')}
                />
                <Label htmlFor="roleAssignment">Rôle attribué</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="channelAccess"
                  checked={steps.channelAccess}
                  onCheckedChange={() => handleStepChange('channelAccess')}
                />
                <Label htmlFor="channelAccess">Accès aux canaux configuré</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rulesAcceptance"
                  checked={steps.rulesAcceptance}
                  onCheckedChange={() => handleStepChange('rulesAcceptance')}
                />
                <Label htmlFor="rulesAcceptance">Règles acceptées</Label>
              </div>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={isUpdating}>
            {isUpdating ? 'Mise à jour...' : 'Mettre à jour l\'onboarding Discord'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 