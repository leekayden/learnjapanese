-- kanjidic2 contains CJK compatibility ideographs (JIS X 0212) that the default
-- utf8mb4_0900_ai_ci collation treats as equal to their base kanji, colliding on
-- the primary key. Use binary comparison for the char column.
ALTER TABLE `Kanji` MODIFY `char` VARCHAR(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL;
