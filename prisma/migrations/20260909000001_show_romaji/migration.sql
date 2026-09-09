-- Add showRomaji toggle for pinyin-style romaji above furigana
ALTER TABLE `UserSettings` ADD COLUMN `showRomaji` BOOLEAN NOT NULL DEFAULT false;
