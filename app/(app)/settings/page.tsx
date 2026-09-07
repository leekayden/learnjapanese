import { SettingsForm } from "@/components/settings-form"
import { getUserSettings } from "@/lib/session"

export const metadata = { title: "Settings" }

export default async function SettingsPage() {
  const settings = await getUserSettings()
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Preferences are saved to your account.</p>
      </div>
      <SettingsForm
        initial={{
          scriptMode: settings?.scriptMode ?? "FURIGANA",
          furiganaMode: settings?.furiganaMode ?? "ALWAYS",
          audioOn: settings?.audioOn ?? true,
          dailyGoalXp: settings?.dailyGoalXp ?? 20,
          freeNav: settings?.freeNav ?? false,
        }}
      />
    </div>
  )
}
