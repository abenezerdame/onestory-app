export interface Video {
  title: string;
  url: string;
}

export interface DayReading {
  day: number;
  book: string;
  chapters: string;
  psalm: string;
  videos: Video[];
}

function v(title: string, url: string): Video {
  return { title, url };
}

export const readingPlan: DayReading[] = [
  // Genesis (Days 1-16)
  { day: 1, book: "Genesis", chapters: "1-3", psalm: "1", videos: [v("Genesis 1", "https://bibleproject.com/explore/video/genesis-1/")] },
  { day: 2, book: "Genesis", chapters: "4-7", psalm: "2", videos: [v("Genesis 1-11", "https://bibleproject.com/videos/genesis-1-11/")] },
  { day: 3, book: "Genesis", chapters: "8-11", psalm: "3", videos: [v("Torah: Genesis 1-11", "https://bibleproject.com/videos/torah-genesis-1/")] },
  { day: 4, book: "Genesis", chapters: "12-15", psalm: "4", videos: [v("Abraham and Melchizedek", "https://bibleproject.com/videos/abraham-and-melchizedek/")] },
  { day: 5, book: "Genesis", chapters: "16-18", psalm: "5", videos: [v("Genesis 12-50", "https://bibleproject.com/videos/genesis-12-50/")] },
  { day: 6, book: "Genesis", chapters: "19-21", psalm: "6", videos: [] },
  { day: 7, book: "Genesis", chapters: "22-24", psalm: "7", videos: [v("The Test", "https://bibleproject.com/videos/the-test/")] },
  { day: 8, book: "Genesis", chapters: "25-28", psalm: "8", videos: [v("The Last Will Be First", "https://bibleproject.com/videos/last-will-be-first/")] },
  { day: 9, book: "Genesis", chapters: "29-31", psalm: "9", videos: [] },
  { day: 10, book: "Genesis", chapters: "32-34", psalm: "10", videos: [] },
  { day: 11, book: "Genesis", chapters: "35-37", psalm: "11", videos: [v("What Is the Bible?", "https://bibleproject.com/explore/video/what-is-bible/")] },
  { day: 12, book: "Genesis", chapters: "38-40", psalm: "12", videos: [v("The Story of the Bible", "https://bibleproject.com/explore/video/the-story-of-the-bible/")] },
  { day: 13, book: "Genesis", chapters: "41-42", psalm: "13", videos: [v("Literary Styles", "https://bibleproject.com/explore/video/literary-styles-bible/")] },
  { day: 14, book: "Genesis", chapters: "43-45", psalm: "14", videos: [v("Ancient Jewish Meditation Literature", "https://bibleproject.com/explore/video/bible-jewish-meditation-literature-h2r/")] },
  { day: 15, book: "Genesis", chapters: "46-47", psalm: "15", videos: [] },
  { day: 16, book: "Genesis", chapters: "48-50", psalm: "16", videos: [v("Torah: Genesis 12-50", "https://bibleproject.com/videos/torah-genesis-2/")] },

  // Exodus (Days 17-29)
  { day: 17, book: "Exodus", chapters: "1-3", psalm: "17", videos: [v("Exodus 1-18", "https://bibleproject.com/explore/video/exodus-1-18/")] },
  { day: 18, book: "Exodus", chapters: "4-6", psalm: "18", videos: [v("Vocab Insight: 'Avad / Serve, Work", "https://bibleproject.com/videos/vocab-insight-avad-serve-work/")] },
  { day: 19, book: "Exodus", chapters: "7-9", psalm: "19", videos: [v("Vocab Insight: 'Ot / Sign", "https://bibleproject.com/videos/vocab-insight-ot-sign/")] },
  { day: 20, book: "Exodus", chapters: "10-12", psalm: "20", videos: [v("What is Passover?", "https://bibleproject.com/videos/what-is-passover")] },
  { day: 21, book: "Exodus", chapters: "13-15", psalm: "21", videos: [] },
  { day: 22, book: "Exodus", chapters: "16-18", psalm: "22", videos: [v("Torah: Exodus 1-18", "https://bibleproject.com/videos/torah-exodus-1/")] },
  { day: 23, book: "Exodus", chapters: "19-21", psalm: "23", videos: [v("Exodus 19-40", "https://bibleproject.com/explore/video/exodus-19-40/")] },
  { day: 24, book: "Exodus", chapters: "22-24", psalm: "24", videos: [v("Covenants", "https://bibleproject.com/explore/video/covenants/")] },
  { day: 25, book: "Exodus", chapters: "25-27", psalm: "25", videos: [v("Royal Priests of Eden", "https://bibleproject.com/explore/video/priests-of-eden/")] },
  { day: 26, book: "Exodus", chapters: "28-29", psalm: "26", videos: [v("Moses and Aaron", "https://bibleproject.com/explore/video/moses-and-aaron/")] },
  { day: 27, book: "Exodus", chapters: "30-31", psalm: "27", videos: [v("Anointing", "https://bibleproject.com/videos/anointing/")] },
  { day: 28, book: "Exodus", chapters: "32-34", psalm: "28", videos: [v("Visual Commentary: Exodus 34:6-7", "https://bibleproject.com/explore/video/character-of-god-exodus/")] },
  { day: 29, book: "Exodus", chapters: "35-40", psalm: "29", videos: [v("Torah: Exodus 19-40", "https://bibleproject.com/explore/video/torah-exodus-2/")] },

  // Leviticus (Days 30-39)
  { day: 30, book: "Leviticus", chapters: "1-4", psalm: "30", videos: [v("Leviticus", "https://bibleproject.com/explore/video/leviticus/")] },
  { day: 31, book: "Leviticus", chapters: "5-7", psalm: "31", videos: [] },
  { day: 32, book: "Leviticus", chapters: "8-10", psalm: "32", videos: [] },
  { day: 33, book: "Leviticus", chapters: "11-13", psalm: "33", videos: [v("Biblical Law", "https://bibleproject.com/explore/video/reading-biblical-law/")] },
  { day: 34, book: "Leviticus", chapters: "14-15", psalm: "34", videos: [] },
  { day: 35, book: "Leviticus", chapters: "16-18", psalm: "35", videos: [v("Sacrifice and Atonement", "https://bibleproject.com/explore/video/sacrifice-and-atonement/")] },
  { day: 36, book: "Leviticus", chapters: "19-20", psalm: "36", videos: [] },
  { day: 37, book: "Leviticus", chapters: "21-23", psalm: "37", videos: [v("The Law", "https://bibleproject.com/explore/video/law/")] },
  { day: 38, book: "Leviticus", chapters: "24-25", psalm: "38", videos: [v("Sabbath", "https://bibleproject.com/explore/video/sabbath-video/")] },
  { day: 39, book: "Leviticus", chapters: "26-27", psalm: "39", videos: [v("Torah: Leviticus", "https://bibleproject.com/explore/video/torah-leviticus/")] },

  // Numbers (Days 40-52)
  { day: 40, book: "Numbers", chapters: "1-4", psalm: "40", videos: [v("Numbers", "https://bibleproject.com/explore/video/numbers/")] },
  { day: 41, book: "Numbers", chapters: "5-7", psalm: "41", videos: [v("The Wilderness", "https://bibleproject.com/videos/the-wilderness")] },
  { day: 42, book: "Numbers", chapters: "8-10", psalm: "42", videos: [] },
  { day: 43, book: "Numbers", chapters: "11-13", psalm: "43", videos: [v("Nephesh / Soul", "https://bibleproject.com/explore/video/nephesh-soul/")] },
  { day: 44, book: "Numbers", chapters: "14-16", psalm: "44", videos: [v("Slow to Anger", "https://bibleproject.com/explore/video/slow-to-anger/")] },
  { day: 45, book: "Numbers", chapters: "17-18", psalm: "45", videos: [] },
  { day: 46, book: "Numbers", chapters: "19-21", psalm: "46", videos: [] },
  { day: 47, book: "Numbers", chapters: "22-24", psalm: "47", videos: [v("Loyal Love", "https://bibleproject.com/explore/video/loyal-love/")] },
  { day: 48, book: "Numbers", chapters: "25-27", psalm: "48", videos: [] },
  { day: 49, book: "Numbers", chapters: "28-30", psalm: "49", videos: [v("YHWH / LORD", "https://bibleproject.com/explore/video/yhwh-lord/")] },
  { day: 50, book: "Numbers", chapters: "31-32", psalm: "50", videos: [] },
  { day: 51, book: "Numbers", chapters: "33-34", psalm: "51", videos: [] },
  { day: 52, book: "Numbers", chapters: "35-36", psalm: "52", videos: [v("Torah: Numbers", "https://bibleproject.com/explore/video/torah-numbers/")] },

  // Deuteronomy (Days 53-64)
  { day: 53, book: "Deuteronomy", chapters: "1-3", psalm: "53", videos: [v("Deuteronomy", "https://bibleproject.com/explore/video/deuteronomy/")] },
  { day: 54, book: "Deuteronomy", chapters: "4-6", psalm: "54", videos: [v("Shema / Listen", "https://bibleproject.com/explore/video/shema-listen/")] },
  { day: 55, book: "Deuteronomy", chapters: "7-9", psalm: "55", videos: [] },
  { day: 56, book: "Deuteronomy", chapters: "10-12", psalm: "56", videos: [v("Vocab Insight: Dam / Blood", "https://bibleproject.com/explore/video/vocab-insight-dam-blood/")] },
  { day: 57, book: "Deuteronomy", chapters: "13-14", psalm: "57", videos: [] },
  { day: 58, book: "Deuteronomy", chapters: "15-16", psalm: "58", videos: [v("Vocab Insight: Zakar / Remember", "https://bibleproject.com/videos/vocab-insight-zakar-remember/")] },
  { day: 59, book: "Deuteronomy", chapters: "17-20", psalm: "59", videos: [v("Design Patterns", "https://bibleproject.com/explore/video/design-patterns-biblical-narrative/")] },
  { day: 60, book: "Deuteronomy", chapters: "21-23", psalm: "60", videos: [] },
  { day: 61, book: "Deuteronomy", chapters: "24-27", psalm: "61", videos: [v("Wisdom Within Laws About Murder, Adultery, and Divorce", "https://bibleproject.com/explore/video/wisdom-underneath-laws/")] },
  { day: 62, book: "Deuteronomy", chapters: "28-29", psalm: "62", videos: [v("Blessing and Curse", "https://bibleproject.com/explore/video/blessing-and-curse/")] },
  { day: 63, book: "Deuteronomy", chapters: "30-31", psalm: "63", videos: [] },
  { day: 64, book: "Deuteronomy", chapters: "32-34", psalm: "64", videos: [v("Torah: Deuteronomy", "https://bibleproject.com/explore/video/torah-deuteronomy/")] },

  // Joshua (Days 65-69)
  { day: 65, book: "Joshua", chapters: "1-4", psalm: "65", videos: [v("Joshua", "https://bibleproject.com/explore/video/joshua/")] },
  { day: 66, book: "Joshua", chapters: "5-8", psalm: "66", videos: [v("Angel of the Lord", "https://bibleproject.com/explore/video/angel-lord/")] },
  { day: 67, book: "Joshua", chapters: "9-12", psalm: "67", videos: [] },
  { day: 68, book: "Joshua", chapters: "13-21", psalm: "68", videos: [] },
  { day: 69, book: "Joshua", chapters: "22-24", psalm: "69", videos: [] },

  // Judges (Days 70-76)
  { day: 70, book: "Judges", chapters: "1-3", psalm: "70", videos: [v("Judges", "https://bibleproject.com/explore/video/judges/")] },
  { day: 71, book: "Judges", chapters: "4-5", psalm: "71", videos: [] },
  { day: 72, book: "Judges", chapters: "6-8", psalm: "72", videos: [v("Plot", "https://bibleproject.com/explore/video/plot-biblical-narrative/")] },
  { day: 73, book: "Judges", chapters: "9-12", psalm: "73", videos: [] },
  { day: 74, book: "Judges", chapters: "13-15", psalm: "74", videos: [] },
  { day: 75, book: "Judges", chapters: "16-18", psalm: "75", videos: [v("Lev / Heart", "https://bibleproject.com/explore/video/lev-heart/")] },
  { day: 76, book: "Judges", chapters: "19-21", psalm: "76", videos: [] },

  // Ruth (Day 77)
  { day: 77, book: "Ruth", chapters: "1-4", psalm: "77", videos: [v("Ruth", "https://bibleproject.com/explore/video/ruth/")] },

  // 1 Samuel (Days 78-86)
  { day: 78, book: "1 Samuel", chapters: "1-3", psalm: "78", videos: [v("1 Samuel", "https://bibleproject.com/explore/video/1-samuel/")] },
  { day: 79, book: "1 Samuel", chapters: "4-8", psalm: "79", videos: [v("Passage Insight: Purpose of Fasting", "https://bibleproject.com/explore/video/passage-insight-purpose-fasting/")] },
  { day: 80, book: "1 Samuel", chapters: "9-12", psalm: "80", videos: [v("Character", "https://bibleproject.com/videos/character-biblical-narrative/")] },
  { day: 81, book: "1 Samuel", chapters: "13-14", psalm: "81", videos: [] },
  { day: 82, book: "1 Samuel", chapters: "15-17", psalm: "82", videos: [] },
  { day: 83, book: "1 Samuel", chapters: "18-20", psalm: "83", videos: [v("Ahavah / Love", "https://bibleproject.com/explore/video/ahavah-love/")] },
  { day: 84, book: "1 Samuel", chapters: "21-24", psalm: "84", videos: [] },
  { day: 85, book: "1 Samuel", chapters: "25-27", psalm: "85", videos: [v("Khata / Sin", "https://bibleproject.com/explore/video/khata-sin/")] },
  { day: 86, book: "1 Samuel", chapters: "28-31", psalm: "86", videos: [] },

  // 2 Samuel (Days 87-93)
  { day: 87, book: "2 Samuel", chapters: "1-3", psalm: "87", videos: [v("2 Samuel", "https://bibleproject.com/explore/video/2-samuel/")] },
  { day: 88, book: "2 Samuel", chapters: "4-8", psalm: "88", videos: [] },
  { day: 89, book: "2 Samuel", chapters: "9-12", psalm: "89", videos: [v("Loyal Love", "https://bibleproject.com/explore/video/loyal-love/")] },
  { day: 90, book: "2 Samuel", chapters: "13-15", psalm: "90", videos: [] },
  { day: 91, book: "2 Samuel", chapters: "16-18", psalm: "91", videos: [] },
  { day: 92, book: "2 Samuel", chapters: "19-21", psalm: "92", videos: [] },
  { day: 93, book: "2 Samuel", chapters: "22-24", psalm: "93", videos: [v("Meod / Strength", "https://bibleproject.com/explore/video/meod-strength/")] },

  // 1 Kings (Days 94-100)
  { day: 94, book: "1 Kings", chapters: "1-3", psalm: "94", videos: [v("1-2 Kings", "https://bibleproject.com/explore/video/kings/")] },
  { day: 95, book: "1 Kings", chapters: "4-7", psalm: "95", videos: [] },
  { day: 96, book: "1 Kings", chapters: "8-10", psalm: "96", videos: [v("Holiness", "https://bibleproject.com/explore/video/holiness/")] },
  { day: 97, book: "1 Kings", chapters: "11-13", psalm: "97", videos: [] },
  { day: 98, book: "1 Kings", chapters: "14-16", psalm: "98", videos: [] },
  { day: 99, book: "1 Kings", chapters: "17-19", psalm: "99", videos: [v("Character Insight: Elijah", "https://bibleproject.com/explore/video/character-insight-elijah/")] },
  { day: 100, book: "1 Kings", chapters: "20-22", psalm: "100", videos: [v("Divine Council", "https://bibleproject.com/explore/video/divine-council/")] },

  // 2 Kings (Days 101-108)
  { day: 101, book: "2 Kings", chapters: "1-3", psalm: "101", videos: [] },
  { day: 102, book: "2 Kings", chapters: "4-7", psalm: "102", videos: [] },
  { day: 103, book: "2 Kings", chapters: "8-11", psalm: "103", videos: [v("Compassion", "https://bibleproject.com/explore/video/character-of-god-compassion/")] },
  { day: 104, book: "2 Kings", chapters: "12-14", psalm: "104", videos: [] },
  { day: 105, book: "2 Kings", chapters: "15-17", psalm: "105", videos: [v("Intro to Spiritual Beings", "https://bibleproject.com/explore/video/intro-spiritual-beings/")] },
  { day: 106, book: "2 Kings", chapters: "18-19", psalm: "106", videos: [] },
  { day: 107, book: "2 Kings", chapters: "20-22", psalm: "107", videos: [v("Vocab Insight: Tov / Good", "https://bibleproject.com/explore/video/vocab-insight-tov-good/")] },
  { day: 108, book: "2 Kings", chapters: "23-25", psalm: "108", videos: [] },

  // Isaiah (Days 109-126)
  { day: 109, book: "Isaiah", chapters: "1-4", psalm: "109", videos: [v("TaNaK / Old Testament", "https://bibleproject.com/explore/video/old-testament-tanak/")] },
  { day: 110, book: "Isaiah", chapters: "5-8", psalm: "110", videos: [v("Isaiah 1-39", "https://bibleproject.com/explore/video/isaiah-1-39/")] },
  { day: 111, book: "Isaiah", chapters: "9-12", psalm: "111", videos: [v("The Prophets", "https://bibleproject.com/explore/video/the-prophets/")] },
  { day: 112, book: "Isaiah", chapters: "13-17", psalm: "112", videos: [] },
  { day: 113, book: "Isaiah", chapters: "18-22", psalm: "113", videos: [] },
  { day: 114, book: "Isaiah", chapters: "23-27", psalm: "114", videos: [v("Vocab Insight: Tannin / Dragon", "https://bibleproject.com/explore/video/vocab-insight-tannin-dragon/")] },
  { day: 115, book: "Isaiah", chapters: "28-30", psalm: "115", videos: [v("The Choice", "https://bibleproject.com/explore/video/the-choice/")] },
  { day: 116, book: "Isaiah", chapters: "31-35", psalm: "116", videos: [v("The Exodus Way", "https://bibleproject.com/videos/the-exodus-way/")] },
  { day: 117, book: "Isaiah", chapters: "36-38", psalm: "117", videos: [] },
  { day: 118, book: "Isaiah", chapters: "39-41", psalm: "118", videos: [v("Isaiah 40-66", "https://bibleproject.com/explore/video/isaiah-40-66/")] },
  { day: 119, book: "Isaiah", chapters: "42-44", psalm: "119:1-32", videos: [v("Redemption", "https://bibleproject.com/videos/redemption/")] },
  { day: 120, book: "Isaiah", chapters: "45-48", psalm: "119:33-64", videos: [v("Jesus Fulfills the Law", "https://bibleproject.com/explore/video/jesus-fulfills-the-law/")] },
  { day: 121, book: "Isaiah", chapters: "49-51", psalm: "119:65-96", videos: [] },
  { day: 122, book: "Isaiah", chapters: "52-54", psalm: "119:97-128", videos: [v("Gospel of the Kingdom", "https://bibleproject.com/explore/video/gospel-kingdom/")] },
  { day: 123, book: "Isaiah", chapters: "55-57", psalm: "119:129-152", videos: [] },
  { day: 124, book: "Isaiah", chapters: "58-60", psalm: "119:153-176", videos: [] },
  { day: 125, book: "Isaiah", chapters: "61-64", psalm: "120", videos: [v("Isaiah 61", "https://bibleproject.com/videos/isaiah-61/")] },
  { day: 126, book: "Isaiah", chapters: "65-66", psalm: "121", videos: [] },

  // Jeremiah (Days 127-141)
  { day: 127, book: "Jeremiah", chapters: "1-3", psalm: "122", videos: [v("Jeremiah", "https://bibleproject.com/explore/video/jeremiah/")] },
  { day: 128, book: "Jeremiah", chapters: "4-6", psalm: "123", videos: [] },
  { day: 129, book: "Jeremiah", chapters: "7-9", psalm: "124", videos: [v("Matthew 5:33-37: Oaths and Truth-Telling", "https://bibleproject.com/videos/matthew-5-33-37-oaths/")] },
  { day: 130, book: "Jeremiah", chapters: "10-13", psalm: "125", videos: [] },
  { day: 131, book: "Jeremiah", chapters: "14-17", psalm: "126", videos: [v("Vocab Insight: Ets / Tree", "https://bibleproject.com/videos/vocab-insight-ets-tree/")] },
  { day: 132, book: "Jeremiah", chapters: "18-22", psalm: "127", videos: [v("Justice", "https://bibleproject.com/explore/video/justice/")] },
  { day: 133, book: "Jeremiah", chapters: "23-25", psalm: "128", videos: [v("Vocab Insight: Torah / Instruction", "https://bibleproject.com/videos/vocab-insight-torah/")] },
  { day: 134, book: "Jeremiah", chapters: "26-29", psalm: "129", videos: [] },
  { day: 135, book: "Jeremiah", chapters: "30-33", psalm: "130", videos: [] },
  { day: 136, book: "Jeremiah", chapters: "34-36", psalm: "131", videos: [] },
  { day: 137, book: "Jeremiah", chapters: "37-39", psalm: "132", videos: [] },
  { day: 138, book: "Jeremiah", chapters: "40-44", psalm: "133", videos: [] },
  { day: 139, book: "Jeremiah", chapters: "45-48", psalm: "134", videos: [v("Vocab Insight: Erets / Land", "https://bibleproject.com/videos/vocab-insight-erets-land/")] },
  { day: 140, book: "Jeremiah", chapters: "49-50", psalm: "135", videos: [v("Vocab Insight: Ga'al / Redeem", "https://bibleproject.com/videos/gaal-redeem/")] },
  { day: 141, book: "Jeremiah", chapters: "51-52", psalm: "136", videos: [v("Vocab Insight: Shamayim / Skies", "https://bibleproject.com/videos/vocab-insight-shamayim-skies/")] },

  // Ezekiel (Days 142-155)
  { day: 142, book: "Ezekiel", chapters: "1-3", psalm: "137", videos: [v("Ezekiel 1-33", "https://bibleproject.com/explore/video/ezekiel-1-33/")] },
  { day: 143, book: "Ezekiel", chapters: "4-7", psalm: "138", videos: [] },
  { day: 144, book: "Ezekiel", chapters: "8-11", psalm: "139", videos: [] },
  { day: 145, book: "Ezekiel", chapters: "12-14", psalm: "140", videos: [v("Avon / Iniquity", "https://bibleproject.com/explore/video/avon-iniquity/")] },
  { day: 146, book: "Ezekiel", chapters: "15-17", psalm: "141", videos: [] },
  { day: 147, book: "Ezekiel", chapters: "18-20", psalm: "142", videos: [v("Pesha / Transgression", "https://bibleproject.com/videos/pesha-transgression/")] },
  { day: 148, book: "Ezekiel", chapters: "21-24", psalm: "143", videos: [] },
  { day: 149, book: "Ezekiel", chapters: "25-28", psalm: "144", videos: [v("Elohim", "https://bibleproject.com/videos/elohim/")] },
  { day: 150, book: "Ezekiel", chapters: "29-30", psalm: "145", videos: [v("Chaos Dragon", "https://bibleproject.com/videos/chaos-dragon/")] },
  { day: 151, book: "Ezekiel", chapters: "31-33", psalm: "146", videos: [] },
  { day: 152, book: "Ezekiel", chapters: "34-37", psalm: "147", videos: [v("Ezekiel 34-48", "https://bibleproject.com/explore/video/ezekiel-34-48/")] },
  { day: 153, book: "Ezekiel", chapters: "38-39", psalm: "148", videos: [] },
  { day: 154, book: "Ezekiel", chapters: "40-43", psalm: "149", videos: [v("Temple", "https://bibleproject.com/explore/video/temple/")] },
  { day: 155, book: "Ezekiel", chapters: "44-48", psalm: "150", videos: [v("Tree of Life", "https://bibleproject.com/explore/video/tree-of-life/")] },

  // Hosea (Days 156-158)
  { day: 156, book: "Hosea", chapters: "1-5", psalm: "1", videos: [v("Hosea", "https://bibleproject.com/explore/video/hosea/")] },
  { day: 157, book: "Hosea", chapters: "6-10", psalm: "2", videos: [] },
  { day: 158, book: "Hosea", chapters: "11-14", psalm: "3", videos: [] },

  // Joel (Day 159)
  { day: 159, book: "Joel", chapters: "1-3", psalm: "4", videos: [v("Joel", "https://bibleproject.com/explore/video/joel/")] },

  // Amos (Days 160-161)
  { day: 160, book: "Amos", chapters: "1-5", psalm: "5", videos: [v("Amos", "https://bibleproject.com/explore/video/amos/")] },
  { day: 161, book: "Amos", chapters: "6-9", psalm: "6", videos: [] },

  // Obadiah (Day 162)
  { day: 162, book: "Obadiah", chapters: "1", psalm: "7", videos: [v("Obadiah", "https://bibleproject.com/explore/video/obadiah/")] },

  // Jonah (Day 163)
  { day: 163, book: "Jonah", chapters: "1-4", psalm: "8", videos: [v("Jonah", "https://bibleproject.com/explore/video/jonah/")] },

  // Micah (Days 164-165)
  { day: 164, book: "Micah", chapters: "1-4", psalm: "9", videos: [v("Micah", "https://bibleproject.com/explore/video/micah/")] },
  { day: 165, book: "Micah", chapters: "5-7", psalm: "10", videos: [] },

  // Nahum (Day 166)
  { day: 166, book: "Nahum", chapters: "1-3", psalm: "11", videos: [v("Nahum", "https://bibleproject.com/explore/video/nahum/")] },

  // Habakkuk (Day 167)
  { day: 167, book: "Habakkuk", chapters: "1-3", psalm: "12", videos: [v("Habakkuk", "https://bibleproject.com/explore/video/habakkuk/")] },

  // Zephaniah (Day 168)
  { day: 168, book: "Zephaniah", chapters: "1-3", psalm: "13", videos: [v("Zephaniah", "https://bibleproject.com/explore/video/zephaniah/")] },

  // Haggai (Day 169)
  { day: 169, book: "Haggai", chapters: "1-2", psalm: "14", videos: [v("Haggai", "https://bibleproject.com/explore/video/haggai/")] },

  // Zechariah (Days 170-172)
  { day: 170, book: "Zechariah", chapters: "1-4", psalm: "15", videos: [v("Zechariah", "https://bibleproject.com/explore/video/zechariah/")] },
  { day: 171, book: "Zechariah", chapters: "5-8", psalm: "16", videos: [] },
  { day: 172, book: "Zechariah", chapters: "9-14", psalm: "17", videos: [v("Day of the Lord", "https://bibleproject.com/explore/video/day-of-the-lord/")] },

  // Malachi (Days 173-174)
  { day: 173, book: "Malachi", chapters: "1-2", psalm: "18", videos: [v("Malachi", "https://bibleproject.com/explore/video/malachi/")] },
  { day: 174, book: "Malachi", chapters: "3-4", psalm: "19", videos: [] },

  // Psalms (Day 175)
  { day: 175, book: "Psalms", chapters: "1-2", psalm: "20", videos: [v("Psalms", "https://bibleproject.com/explore/video/psalms/")] },

  // Proverbs (Days 176-185)
  { day: 176, book: "Proverbs", chapters: "1-3", psalm: "21", videos: [v("Proverbs", "https://bibleproject.com/explore/video/proverbs/")] },
  { day: 177, book: "Proverbs", chapters: "4-6", psalm: "22", videos: [v("Vocab Insight: Kopher / Ransom", "https://bibleproject.com/videos/kopher-ransom/")] },
  { day: 178, book: "Proverbs", chapters: "7-9", psalm: "23", videos: [v("Proverbs 8", "https://bibleproject.com/explore/video/proverbs-8/")] },
  { day: 179, book: "Proverbs", chapters: "10-12", psalm: "24", videos: [] },
  { day: 180, book: "Proverbs", chapters: "13-15", psalm: "25", videos: [] },
  { day: 181, book: "Proverbs", chapters: "16-18", psalm: "26", videos: [] },
  { day: 182, book: "Proverbs", chapters: "19-21", psalm: "27", videos: [v("Poetic Metaphor", "https://bibleproject.com/explore/video/metaphor-biblical-poetry/")] },
  { day: 183, book: "Proverbs", chapters: "22-24", psalm: "28", videos: [] },
  { day: 184, book: "Proverbs", chapters: "25-27", psalm: "29", videos: [v("Wisdom in Relationships", "https://bibleproject.com/videos/wisdom-in-relationships")] },
  { day: 185, book: "Proverbs", chapters: "28-31", psalm: "30", videos: [v("Wisdom: Proverbs", "https://bibleproject.com/explore/video/wisdom-proverbs/")] },

  // Job (Days 186-197)
  { day: 186, book: "Job", chapters: "1-3", psalm: "31", videos: [v("Job", "https://bibleproject.com/explore/video/job/")] },
  { day: 187, book: "Job", chapters: "4-7", psalm: "32", videos: [v("Shalom / Peace", "https://bibleproject.com/explore/video/shalom-peace/")] },
  { day: 188, book: "Job", chapters: "8-10", psalm: "33", videos: [] },
  { day: 189, book: "Job", chapters: "11-14", psalm: "34", videos: [] },
  { day: 190, book: "Job", chapters: "15-19", psalm: "35", videos: [] },
  { day: 191, book: "Job", chapters: "20-24", psalm: "36", videos: [] },
  { day: 192, book: "Job", chapters: "25-28", psalm: "37", videos: [] },
  { day: 193, book: "Job", chapters: "29-31", psalm: "38", videos: [v("Poetry", "https://bibleproject.com/explore/video/art-biblical-poetry/")] },
  { day: 194, book: "Job", chapters: "32-34", psalm: "39", videos: [v("Vocab Insight: Tse'aqah / Outcry", "https://bibleproject.com/videos/vocab-insight-tseaqah-outcry/")] },
  { day: 195, book: "Job", chapters: "35-37", psalm: "40", videos: [] },
  { day: 196, book: "Job", chapters: "38-39", psalm: "41", videos: [] },
  { day: 197, book: "Job", chapters: "40-42", psalm: "42", videos: [v("Wisdom: Job", "https://bibleproject.com/explore/video/wisdom-job/")] },

  // Ecclesiastes (Days 198-200)
  { day: 198, book: "Ecclesiastes", chapters: "1-4", psalm: "43", videos: [v("Ecclesiastes", "https://bibleproject.com/videos/ecclesiastes/")] },
  { day: 199, book: "Ecclesiastes", chapters: "5-8", psalm: "44", videos: [] },
  { day: 200, book: "Ecclesiastes", chapters: "9-12", psalm: "45", videos: [v("Wisdom: Ecclesiastes", "https://bibleproject.com/explore/video/wisdom-ecclesiastes/")] },

  // Song of Songs (Days 201-202)
  { day: 201, book: "Song of Songs", chapters: "1-4", psalm: "46", videos: [v("Song of Songs", "https://bibleproject.com/explore/video/song-songs/")] },
  { day: 202, book: "Song of Songs", chapters: "5-8", psalm: "47", videos: [v("The Books of Solomon", "https://bibleproject.com/explore/video/books-solomon/")] },

  // Lamentations (Days 203-205)
  { day: 203, book: "Lamentations", chapters: "1-2", psalm: "48", videos: [v("Lamentations", "https://bibleproject.com/explore/video/lamentations/")] },
  { day: 204, book: "Lamentations", chapters: "3", psalm: "49", videos: [] },
  { day: 205, book: "Lamentations", chapters: "4-5", psalm: "50", videos: [] },

  // Esther (Days 206-207)
  { day: 206, book: "Esther", chapters: "1-5", psalm: "51", videos: [v("Esther", "https://bibleproject.com/explore/video/esther/")] },
  { day: 207, book: "Esther", chapters: "6-10", psalm: "52", videos: [] },

  // Daniel (Days 208-211)
  { day: 208, book: "Daniel", chapters: "1-3", psalm: "53", videos: [v("Daniel", "https://bibleproject.com/explore/video/daniel/")] },
  { day: 209, book: "Daniel", chapters: "4-6", psalm: "54", videos: [v("The Way of the Exile", "https://bibleproject.com/explore/video/the-way-of-the-exile/")] },
  { day: 210, book: "Daniel", chapters: "7-9", psalm: "55", videos: [v("Son of Man", "https://bibleproject.com/explore/video/son-of-man/")] },
  { day: 211, book: "Daniel", chapters: "10-12", psalm: "56", videos: [] },

  // Ezra (Days 212-214)
  { day: 212, book: "Ezra", chapters: "1-3", psalm: "57", videos: [v("Ezra-Nehemiah", "https://bibleproject.com/explore/video/ezra-nehemiah/")] },
  { day: 213, book: "Ezra", chapters: "4-6", psalm: "58", videos: [v("Exile", "https://bibleproject.com/explore/video/exile/")] },
  { day: 214, book: "Ezra", chapters: "7-10", psalm: "59", videos: [] },

  // Nehemiah (Days 215-219)
  { day: 215, book: "Nehemiah", chapters: "1-4", psalm: "60", videos: [] },
  { day: 216, book: "Nehemiah", chapters: "5-7", psalm: "61", videos: [] },
  { day: 217, book: "Nehemiah", chapters: "8-9", psalm: "62", videos: [v("Public Reading of Scripture", "https://bibleproject.com/explore/video/public-reading-scripture/")] },
  { day: 218, book: "Nehemiah", chapters: "10-11", psalm: "63", videos: [] },
  { day: 219, book: "Nehemiah", chapters: "12-13", psalm: "64", videos: [] },

  // 1 Chronicles (Days 220-225)
  { day: 220, book: "1 Chronicles", chapters: "1-9", psalm: "65", videos: [v("1-2 Chronicles", "https://bibleproject.com/explore/video/chronicles/")] },
  { day: 221, book: "1 Chronicles", chapters: "10-14", psalm: "66", videos: [] },
  { day: 222, book: "1 Chronicles", chapters: "15-17", psalm: "67", videos: [v("David the Priestly King", "https://bibleproject.com/explore/video/david-priestly-king/")] },
  { day: 223, book: "1 Chronicles", chapters: "18-21", psalm: "68", videos: [] },
  { day: 224, book: "1 Chronicles", chapters: "22-24", psalm: "69", videos: [] },
  { day: 225, book: "1 Chronicles", chapters: "25-29", psalm: "70", videos: [v("Angels and Cherubim", "https://bibleproject.com/explore/video/angels-cherubim/")] },

  // 2 Chronicles (Days 226-235)
  { day: 226, book: "2 Chronicles", chapters: "1-4", psalm: "71", videos: [] },
  { day: 227, book: "2 Chronicles", chapters: "5-8", psalm: "72", videos: [v("The Book of Psalms", "https://bibleproject.com/explore/video/book-of-psalms/")] },
  { day: 228, book: "2 Chronicles", chapters: "9-12", psalm: "73", videos: [v("How to Read Biblical Narrative", "https://bibleproject.com/explore/video/setting-biblical-narrative/")] },
  { day: 229, book: "2 Chronicles", chapters: "13-17", psalm: "74", videos: [] },
  { day: 230, book: "2 Chronicles", chapters: "18-20", psalm: "75", videos: [] },
  { day: 231, book: "2 Chronicles", chapters: "21-24", psalm: "76", videos: [v("The City", "https://bibleproject.com/videos/the-city/")] },
  { day: 232, book: "2 Chronicles", chapters: "25-27", psalm: "77", videos: [] },
  { day: 233, book: "2 Chronicles", chapters: "28-31", psalm: "78", videos: [v("Vocab Insight: Gehenna / Valley of Wailing", "https://bibleproject.com/videos/vocab-insight-gehenna-valley-wailing/")] },
  { day: 234, book: "2 Chronicles", chapters: "32-34", psalm: "79", videos: [] },
  { day: 235, book: "2 Chronicles", chapters: "35-36", psalm: "80", videos: [v("Messiah", "https://bibleproject.com/explore/video/messiah/")] },

  // Matthew (Days 236-249)
  { day: 236, book: "Matthew", chapters: "1-2", psalm: "81", videos: [v("New Testament Overview", "https://bibleproject.com/explore/video/new-testament-overview/")] },
  { day: 237, book: "Matthew", chapters: "3-4", psalm: "82", videos: [v("Intro to the Sermon on the Mount", "https://bibleproject.com/videos/intro-to-the-sermon-on-the-mount/")] },
  { day: 238, book: "Matthew", chapters: "5-6", psalm: "83", videos: [v("Matthew 5-7: Sermon Overview", "https://bibleproject.com/videos/matthew-5-7-sermon-overview/")] },
  { day: 239, book: "Matthew", chapters: "7-8", psalm: "84", videos: [v("Matthew 7:12: The Golden Rule", "https://bibleproject.com/videos/matthew-7-12-golden-rule/")] },
  { day: 240, book: "Matthew", chapters: "9-10", psalm: "85", videos: [] },
  { day: 241, book: "Matthew", chapters: "11-12", psalm: "86", videos: [] },
  { day: 242, book: "Matthew", chapters: "13-14", psalm: "87", videos: [v("Matthew 1-13", "https://bibleproject.com/explore/video/matthew-1-13/")] },
  { day: 243, book: "Matthew", chapters: "15-16", psalm: "88", videos: [v("Matthew 14-28", "https://bibleproject.com/explore/video/matthew-14-28/")] },
  { day: 244, book: "Matthew", chapters: "17-18", psalm: "89", videos: [v("Mountain", "https://bibleproject.com/explore/video/the-mountain/")] },
  { day: 245, book: "Matthew", chapters: "19-20", psalm: "90", videos: [v("Passage Insight: Jesus in the Divorce Debate", "https://bibleproject.com/videos/passage-insight-jesus-divorce-debate/")] },
  { day: 246, book: "Matthew", chapters: "21-22", psalm: "91", videos: [] },
  { day: 247, book: "Matthew", chapters: "23-24", psalm: "92", videos: [v("Warnings About Religious Practices", "https://bibleproject.com/videos/warnings-about-religious-practices/")] },
  { day: 248, book: "Matthew", chapters: "25-26", psalm: "93", videos: [v("Lord's Prayer", "https://bibleproject.com/explore/video/lords-prayer/")] },
  { day: 249, book: "Matthew", chapters: "27-28", psalm: "94", videos: [v("Martus / Witness", "https://bibleproject.com/explore/video/martus-witness/")] },

  // Mark (Days 250-257)
  { day: 250, book: "Mark", chapters: "1-2", psalm: "95", videos: [v("Mark", "https://bibleproject.com/explore/video/mark/")] },
  { day: 251, book: "Mark", chapters: "3-4", psalm: "96", videos: [v("The Parables of Jesus", "https://bibleproject.com/explore/video/how-to-read-the-bible-the-parables-of-jesus/")] },
  { day: 252, book: "Mark", chapters: "5-6", psalm: "97", videos: [] },
  { day: 253, book: "Mark", chapters: "7-8", psalm: "98", videos: [v("The Gospel", "https://bibleproject.com/explore/video/how-to-read-gospel/")] },
  { day: 254, book: "Mark", chapters: "9-10", psalm: "99", videos: [v("Wealth and Worry", "https://bibleproject.com/explore/video/wealth-and-worry/")] },
  { day: 255, book: "Mark", chapters: "11-12", psalm: "100", videos: [] },
  { day: 256, book: "Mark", chapters: "13-14", psalm: "101", videos: [] },
  { day: 257, book: "Mark", chapters: "15-16", psalm: "102", videos: [] },

  // John (Days 258-266)
  { day: 258, book: "John", chapters: "1-2", psalm: "103", videos: [v("John 1", "https://bibleproject.com/explore/video/john-1/")] },
  { day: 259, book: "John", chapters: "3-4", psalm: "104", videos: [v("Eternal Life", "https://bibleproject.com/explore/video/eternal-life/")] },
  { day: 260, book: "John", chapters: "5-6", psalm: "105", videos: [] },
  { day: 261, book: "John", chapters: "7-8", psalm: "106", videos: [v("Water of Life", "https://bibleproject.com/explore/video/water-of-life/")] },
  { day: 262, book: "John", chapters: "9-10", psalm: "107", videos: [] },
  { day: 263, book: "John", chapters: "11-12", psalm: "108", videos: [v("John 1-12", "https://bibleproject.com/explore/video/john-1-12/")] },
  { day: 264, book: "John", chapters: "13-15", psalm: "109", videos: [v("John 13-21", "https://bibleproject.com/explore/video/john-13-21/")] },
  { day: 265, book: "John", chapters: "16-18", psalm: "110", videos: [v("God", "https://bibleproject.com/explore/video/god-video/")] },
  { day: 266, book: "John", chapters: "19-21", psalm: "111", videos: [v("Matthew 6:9-13: The Prayer of Jesus", "https://bibleproject.com/videos/matthew-6-9-13-prayer-jesus/")] },

  // Luke (Days 267-278)
  { day: 267, book: "Luke", chapters: "1", psalm: "112", videos: [v("Luke 1-9", "https://bibleproject.com/explore/video/luke-1-9/")] },
  { day: 268, book: "Luke", chapters: "2-3", psalm: "113", videos: [v("The Birth of Jesus: Luke 1-2", "https://bibleproject.com/explore/video/gospel-luke-1/")] },
  { day: 269, book: "Luke", chapters: "4-5", psalm: "114", videos: [v("The Baptism of Jesus: Luke 3-9", "https://bibleproject.com/explore/video/gospel-luke-2/")] },
  { day: 270, book: "Luke", chapters: "6-7", psalm: "115", videos: [v("Passage Insight: Speech at the Exit", "https://bibleproject.com/videos/passage-insight-speech-at-the-exit/")] },
  { day: 271, book: "Luke", chapters: "8-9", psalm: "116", videos: [v("The Prodigal Son: Luke 9-19", "https://bibleproject.com/videos/gospel-luke-3")] },
  { day: 272, book: "Luke", chapters: "10-11", psalm: "117", videos: [v("Luke 10-24", "https://bibleproject.com/explore/video/luke-10-24/")] },
  { day: 273, book: "Luke", chapters: "12-13", psalm: "118", videos: [] },
  { day: 274, book: "Luke", chapters: "14-16", psalm: "119:1-32", videos: [] },
  { day: 275, book: "Luke", chapters: "17-18", psalm: "119:33-64", videos: [] },
  { day: 276, book: "Luke", chapters: "19-20", psalm: "119:65-96", videos: [v("The Crucifixion of Jesus: Luke 19-23", "https://bibleproject.com/explore/video/gospel-luke-4/")] },
  { day: 277, book: "Luke", chapters: "21-22", psalm: "119:97-128", videos: [] },
  { day: 278, book: "Luke", chapters: "23-24", psalm: "119:129-152", videos: [v("The Resurrection of Jesus: Luke 24", "https://bibleproject.com/explore/video/gospel-luke-5/")] },

  // Acts (Days 279-292)
  { day: 279, book: "Acts", chapters: "1-2", psalm: "119:153-176", videos: [v("Acts 1-12", "https://bibleproject.com/explore/video/acts-1-12/")] },
  { day: 280, book: "Acts", chapters: "3-4", psalm: "120", videos: [v("Holy Spirit", "https://bibleproject.com/explore/video/holy-spirit/")] },
  { day: 281, book: "Acts", chapters: "5-6", psalm: "121", videos: [v("Pentecost: Acts 1-7", "https://bibleproject.com/explore/video/gospel-acts-1/")] },
  { day: 282, book: "Acts", chapters: "7-8", psalm: "122", videos: [v("The Apostle Paul: Acts 8-12", "https://bibleproject.com/explore/video/gospel-acts-2/")] },
  { day: 283, book: "Acts", chapters: "9-10", psalm: "123", videos: [] },
  { day: 284, book: "Acts", chapters: "11-12", psalm: "124", videos: [] },
  { day: 285, book: "Acts", chapters: "13-14", psalm: "125", videos: [v("Acts 13-28", "https://bibleproject.com/explore/video/acts-13-28/")] },
  { day: 286, book: "Acts", chapters: "15-16", psalm: "126", videos: [] },
  { day: 287, book: "Acts", chapters: "17-18", psalm: "127", videos: [v("Passage Insight: Jesus and Short Prayers", "https://bibleproject.com/videos/passage-insight-jesus-short-prayers/")] },
  { day: 288, book: "Acts", chapters: "19-20", psalm: "128", videos: [v("Paul's Missionary Journeys: Acts 13-20", "https://bibleproject.com/explore/video/gospel-acts-3/")] },
  { day: 289, book: "Acts", chapters: "21-22", psalm: "129", videos: [v("Bound for Rome: Acts 21-28", "https://bibleproject.com/videos/gospel-acts-4/")] },
  { day: 290, book: "Acts", chapters: "23-24", psalm: "130", videos: [v("Yakhal / Hope", "https://bibleproject.com/explore/video/yakhal-hope/")] },
  { day: 291, book: "Acts", chapters: "25-26", psalm: "131", videos: [] },
  { day: 292, book: "Acts", chapters: "27-28", psalm: "132", videos: [v("Euangelion / Gospel", "https://bibleproject.com/explore/video/euangelion-gospel/")] },

  // Romans (Days 293-300)
  { day: 293, book: "Romans", chapters: "1-2", psalm: "133", videos: [v("Romans 1-4", "https://bibleproject.com/explore/video/romans-1-4/")] },
  { day: 294, book: "Romans", chapters: "3-4", psalm: "134", videos: [] },
  { day: 295, book: "Romans", chapters: "5-6", psalm: "135", videos: [v("Romans 5-16", "https://bibleproject.com/explore/video/romans-5-16/")] },
  { day: 296, book: "Romans", chapters: "7-8", psalm: "136", videos: [v("Vocab Insight: Dikaiosune / Righteousness", "https://bibleproject.com/videos/vocab-insight-dikaiosune-righteousness/")] },
  { day: 297, book: "Romans", chapters: "9-11", psalm: "137", videos: [] },
  { day: 298, book: "Romans", chapters: "12-13", psalm: "138", videos: [] },
  { day: 299, book: "Romans", chapters: "14-15", psalm: "139", videos: [] },
  { day: 300, book: "Romans", chapters: "16", psalm: "140", videos: [v("New Testament Letters: Historical Context", "https://bibleproject.com/explore/video/new-testament-letters-epistles-historical-context/")] },

  // 1 Corinthians (Days 301-308)
  { day: 301, book: "1 Corinthians", chapters: "1-2", psalm: "141", videos: [v("1 Corinthians", "https://bibleproject.com/explore/video/1-corinthians/")] },
  { day: 302, book: "1 Corinthians", chapters: "3-4", psalm: "142", videos: [] },
  { day: 303, book: "1 Corinthians", chapters: "5-6", psalm: "143", videos: [v("New Testament Letters: Literary Context", "https://bibleproject.com/explore/video/new-testament-letters-literary-context/")] },
  { day: 304, book: "1 Corinthians", chapters: "7-8", psalm: "144", videos: [] },
  { day: 305, book: "1 Corinthians", chapters: "9-10", psalm: "145", videos: [] },
  { day: 306, book: "1 Corinthians", chapters: "11-12", psalm: "146", videos: [] },
  { day: 307, book: "1 Corinthians", chapters: "13-14", psalm: "147", videos: [v("Vocab Insight: Teleios / Whole", "https://bibleproject.com/videos/vocab-insight-teleios-whole/")] },
  { day: 308, book: "1 Corinthians", chapters: "15-16", psalm: "148", videos: [v("Psalm 148", "https://bibleproject.com/explore/video/psalm-148/")] },

  // 2 Corinthians (Days 309-314)
  { day: 309, book: "2 Corinthians", chapters: "1-2", psalm: "149", videos: [v("2 Corinthians", "https://bibleproject.com/explore/video/2-corinthians/")] },
  { day: 310, book: "2 Corinthians", chapters: "3-4", psalm: "150", videos: [v("Image of God", "https://bibleproject.com/explore/video/image-of-god/")] },
  { day: 311, book: "2 Corinthians", chapters: "5-6", psalm: "1", videos: [v("Psalm 1", "https://bibleproject.com/explore/video/psalm-1/")] },
  { day: 312, book: "2 Corinthians", chapters: "7-8", psalm: "2", videos: [] },
  { day: 313, book: "2 Corinthians", chapters: "9-10", psalm: "3", videos: [v("Generosity", "https://bibleproject.com/explore/video/generosity/")] },
  { day: 314, book: "2 Corinthians", chapters: "11-13", psalm: "4", videos: [] },

  // Galatians (Days 315-317)
  { day: 315, book: "Galatians", chapters: "1-2", psalm: "5", videos: [v("Galatians", "https://bibleproject.com/explore/video/galatians/")] },
  { day: 316, book: "Galatians", chapters: "3-4", psalm: "6", videos: [] },
  { day: 317, book: "Galatians", chapters: "5-6", psalm: "7", videos: [] },

  // Ephesians (Days 318-320)
  { day: 318, book: "Ephesians", chapters: "1-2", psalm: "8", videos: [v("Psalm 8", "https://bibleproject.com/videos/psalm-8/"), v("Ephesians", "https://bibleproject.com/explore/video/ephesians/")] },
  { day: 319, book: "Ephesians", chapters: "3-4", psalm: "9", videos: [v("The Satan and Demons", "https://bibleproject.com/explore/video/satan-demons/")] },
  { day: 320, book: "Ephesians", chapters: "5-6", psalm: "10", videos: [] },

  // Philippians (Days 321-322)
  { day: 321, book: "Philippians", chapters: "1-2", psalm: "11", videos: [v("Philippians", "https://bibleproject.com/explore/video/philippians/")] },
  { day: 322, book: "Philippians", chapters: "3-4", psalm: "12", videos: [v("Chara / Joy", "https://bibleproject.com/explore/video/chara-joy/")] },

  // Colossians (Days 323-324)
  { day: 323, book: "Colossians", chapters: "1-2", psalm: "13", videos: [v("Colossians", "https://bibleproject.com/explore/video/colossians/")] },
  { day: 324, book: "Colossians", chapters: "3-4", psalm: "14", videos: [v("The New Humanity", "https://bibleproject.com/explore/video/new-humanity/")] },

  // 1 Thessalonians (Days 325-327)
  { day: 325, book: "1 Thessalonians", chapters: "1-2", psalm: "15", videos: [v("1 Thessalonians", "https://bibleproject.com/explore/video/1-thessalonians/")] },
  { day: 326, book: "1 Thessalonians", chapters: "3-4", psalm: "16", videos: [] },
  { day: 327, book: "1 Thessalonians", chapters: "5", psalm: "17", videos: [] },

  // 2 Thessalonians (Day 328)
  { day: 328, book: "2 Thessalonians", chapters: "1-3", psalm: "18", videos: [v("2 Thessalonians", "https://bibleproject.com/explore/video/2-thessalonians/")] },

  // 1 Timothy (Days 329-331)
  { day: 329, book: "1 Timothy", chapters: "1-2", psalm: "19", videos: [v("1 Timothy", "https://bibleproject.com/explore/video/1-timothy/")] },
  { day: 330, book: "1 Timothy", chapters: "3-4", psalm: "20", videos: [] },
  { day: 331, book: "1 Timothy", chapters: "5-6", psalm: "21", videos: [v("Matthew 5:17-20: Righteousness and Jesus' Bible", "https://bibleproject.com/videos/matthew-5-17-20-righteousness-and-jesus-bible/")] },

  // 2 Timothy (Day 332)
  { day: 332, book: "2 Timothy", chapters: "1-4", psalm: "22", videos: [v("2 Timothy", "https://bibleproject.com/explore/video/2-timothy/")] },

  // Titus (Day 333)
  { day: 333, book: "Titus", chapters: "1-3", psalm: "23", videos: [v("Titus", "https://bibleproject.com/explore/video/titus/")] },

  // Philemon (Day 334)
  { day: 334, book: "Philemon", chapters: "1", psalm: "24", videos: [v("Philemon", "https://bibleproject.com/explore/video/philemon/")] },

  // Hebrews (Days 335-340)
  { day: 335, book: "Hebrews", chapters: "1-2", psalm: "25", videos: [v("Hebrews", "https://bibleproject.com/explore/video/hebrews/")] },
  { day: 336, book: "Hebrews", chapters: "3-4", psalm: "26", videos: [] },
  { day: 337, book: "Hebrews", chapters: "5-6", psalm: "27", videos: [] },
  { day: 338, book: "Hebrews", chapters: "7-8", psalm: "28", videos: [v("Jesus the Royal Priest", "https://bibleproject.com/videos/jesus-the-royal-priest/")] },
  { day: 339, book: "Hebrews", chapters: "9-10", psalm: "29", videos: [] },
  { day: 340, book: "Hebrews", chapters: "11-13", psalm: "30", videos: [v("Beatitudes", "https://bibleproject.com/explore/video/the-beatitudes/")] },

  // James (Days 341-342)
  { day: 341, book: "James", chapters: "1-3", psalm: "31", videos: [v("James", "https://bibleproject.com/explore/video/james/")] },
  { day: 342, book: "James", chapters: "4-5", psalm: "32", videos: [] },

  // 1 Peter (Days 343-344)
  { day: 343, book: "1 Peter", chapters: "1-2", psalm: "33", videos: [v("1 Peter", "https://bibleproject.com/explore/video/1-peter/")] },
  { day: 344, book: "1 Peter", chapters: "3-5", psalm: "34", videos: [v("The Royal Priesthood", "https://bibleproject.com/explore/video/royal-priesthood/")] },

  // 2 Peter (Day 345)
  { day: 345, book: "2 Peter", chapters: "1-3", psalm: "35", videos: [v("2 Peter", "https://bibleproject.com/explore/video/2-peter/")] },

  // 1 John (Days 346-347)
  { day: 346, book: "1 John", chapters: "1-2", psalm: "36", videos: [v("1-3 John", "https://bibleproject.com/explore/video/1-3-john/")] },
  { day: 347, book: "1 John", chapters: "3-5", psalm: "37", videos: [v("Agape / Love", "https://bibleproject.com/explore/video/agape-love/")] },

  // 2 & 3 John (Day 348)
  { day: 348, book: "2 & 3 John", chapters: "1, 1", psalm: "38", videos: [] },

  // Jude (Day 349)
  { day: 349, book: "Jude", chapters: "1", psalm: "39", videos: [v("Jude", "https://bibleproject.com/explore/video/jude/")] },

  // Revelation (Days 350-358)
  { day: 350, book: "Revelation", chapters: "1-3", psalm: "40", videos: [v("Revelation 1-11", "https://bibleproject.com/explore/video/revelation-1-11/")] },
  { day: 351, book: "Revelation", chapters: "4-5", psalm: "41", videos: [v("Apocalyptic Literature", "https://bibleproject.com/explore/video/apocalyptic-literature/")] },
  { day: 352, book: "Revelation", chapters: "6-9", psalm: "42", videos: [] },
  { day: 353, book: "Revelation", chapters: "10-11", psalm: "43", videos: [] },
  { day: 354, book: "Revelation", chapters: "12-14", psalm: "44", videos: [v("Revelation 12-22", "https://bibleproject.com/explore/video/revelation-12-22/")] },
  { day: 355, book: "Revelation", chapters: "15-16", psalm: "45", videos: [] },
  { day: 356, book: "Revelation", chapters: "17-18", psalm: "46", videos: [] },
  { day: 357, book: "Revelation", chapters: "19-20", psalm: "47", videos: [] },
  { day: 358, book: "Revelation", chapters: "21-22", psalm: "48", videos: [v("Heaven & Earth", "https://bibleproject.com/explore/video/heaven-and-earth/")] },
];

// Unique books in reading order
export const booksInOrder: string[] = [...new Set(readingPlan.map(d => d.book))];

// Total counts for stats
export const totalVideos = readingPlan.reduce((sum, d) => sum + d.videos.length, 0);
export const totalChapters = readingPlan.reduce((sum, d) => {
  const parts = d.chapters.split(",").map(s => s.trim());
  let count = 0;
  for (const part of parts) {
    const range = part.match(/^(\d+)-(\d+)$/);
    if (range) count += parseInt(range[2]) - parseInt(range[1]) + 1;
    else count += 1;
  }
  return sum + count;
}, 0);
