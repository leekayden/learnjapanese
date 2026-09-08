"use client"

import { Volume2 } from "lucide-react"

import { cn } from "@/lib/utils"

export function TtsButton({ text, className }: { text: string; className?: string }) {
  function speak(e: React.MouseEvent) {
    // Prevent the parent link/card from navigating
    e.stopPropagation()
    e.preventDefault()
    if (typeof window === "undefined" || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "ja-JP"
    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      onClick={speak}
      title="Play audio (browser speech)"
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      <Volume2 className="size-4" />
    </button>
  )
}
