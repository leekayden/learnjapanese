-- ngram fulltext index for dictionary search (Japanese bigrams + latin words).
ALTER TABLE `Word` ADD FULLTEXT INDEX `word_searchtext_ft` (`searchText`) WITH PARSER ngram;
