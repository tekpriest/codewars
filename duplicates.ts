export const duplicateCount = (text: string): number => {
  let singles: string[] = [];
  let duplicates: string[] = [];

  text = text.trim();
  const words = text.split("");

  if (words.length === 0) return 0;

  words.forEach((s) => {
    if (singles.includes(s.toLowerCase())) {
      if (!duplicates.includes(s.toLowerCase()))
        duplicates.push(s.toLowerCase());
    } else {
      singles.push(s.toLowerCase());
    }
  });

  return duplicates.length;
};

duplicateCount(""); // 0
duplicateCount("abcde"); // 2
duplicateCount("aabbcde"); // 2
duplicateCount("aabBcde"); // 2
duplicateCount("Indivisibility"); // 1
duplicateCount("Indivisibilities"); // 2
