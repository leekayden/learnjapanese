-- Quiz scope gains VOCAB_PRACTICE; QuizItem gains refId for vocab/kanji items.
ALTER TABLE `QuizItem` ADD COLUMN `refId` VARCHAR(191) NULL;
ALTER TABLE `QuizItem` MODIFY COLUMN `scope` ENUM('LESSON_PRACTICE', 'VOCAB_PRACTICE', 'UNIT_EXAM') NOT NULL;
