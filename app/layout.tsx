import { Geist, Geist_Mono, Inter, Noto_Sans_JP } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScriptSettingsProvider } from "@/components/script-settings"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { getUserSettings } from "@/lib/session"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jp",
  preload: false,
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getUserSettings()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, fontJp.variable)}
    >
      <body>
        <ThemeProvider>
          <ScriptSettingsProvider
            authenticated={!!settings}
            initialScriptMode={settings?.scriptMode ?? "FURIGANA"}
            initialFuriganaMode={settings?.furiganaMode ?? "ALWAYS"}
          >
            {children}
            <Toaster />
          </ScriptSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
