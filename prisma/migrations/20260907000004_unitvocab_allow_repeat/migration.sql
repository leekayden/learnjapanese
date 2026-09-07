-- Allow the same word to appear in multiple unit vocab lists.
-- The unique index on wordId backs the foreign key, so drop the FK first
-- and re-add it against a plain index.
ALTER TABLE `UnitVocab` DROP FOREIGN KEY `UnitVocab_wordId_fkey`;
ALTER TABLE `UnitVocab` DROP INDEX `UnitVocab_wordId_key`;
ALTER TABLE `UnitVocab` ADD INDEX `UnitVocab_wordId_idx`(`wordId`);
ALTER TABLE `UnitVocab` ADD CONSTRAINT `UnitVocab_wordId_fkey` FOREIGN KEY (`wordId`) REFERENCES `Word`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
