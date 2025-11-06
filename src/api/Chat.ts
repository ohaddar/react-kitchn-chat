import responses from "../data/data.json";

export default class Chat {
  private normalizeInput(input: string): string {
    const commonWords = [
      "what",
      "is",
      "are",
      "the",
      "a",
      "an",
      "how",
      "does",
      "do",
      "can",
      "could",
      "would",
      "should",
      "tell",
      "me",
      "about",
      "explain",
      "describe",
      "define",
      "definition",
      "of",
      "to",
      "in",
      "for",
      "with",
      "?",
      "!",
    ];

    let normalized = input.toLowerCase().trim();

    normalized = normalized.replace(/[?!.,;:]/g, " ");

    const words = normalized
      .split(/\s+/)
      .filter((word) => word.length > 0 && !commonWords.includes(word));

    return words.join(" ");
  }

  private calculateMatchScore(
    normalizedInput: string,
    keyword: string,
  ): number {
    const normalizedKeyword = this.normalizeInput(keyword);
    const inputWords = normalizedInput.split(/\s+/);
    const keywordWords = normalizedKeyword.split(/\s+/);

    let score = 0;
    if (normalizedInput === normalizedKeyword) {
      return 100;
    }

    if (normalizedInput.includes(normalizedKeyword)) {
      score += 50;
    }

    if (normalizedKeyword.includes(normalizedInput)) {
      score += 40;
    }

    let matchingWords = 0;
    for (const inputWord of inputWords) {
      for (const keywordWord of keywordWords) {
        if (inputWord === keywordWord) {
          matchingWords++;
          score += 10;
        } else if (
          inputWord.includes(keywordWord) ||
          keywordWord.includes(inputWord)
        ) {
          matchingWords++;
          score += 5;
        }
      }
    }

    if (matchingWords > 1) {
      score += matchingWords * 5;
    }

    return score;
  }

  private findBestMatch(
    normalizedInput: string,
    lowerInput: string,
  ): { response: any; score: number; type: "follow-up" | "main" } | null {
    let bestMatch: any = null;
    let bestScore = 0;
    let matchType: "follow-up" | "main" = "main";

    for (const question of responses.questions) {
      if (question.followUpQuestion?.keywords) {
        for (const keyword of question.followUpQuestion.keywords) {
          const score = this.calculateMatchScore(
            normalizedInput,
            keyword as string,
          );
          if (score > bestScore && score >= 20) {
            bestScore = score;
            bestMatch = question.followUpQuestion;
            matchType = "follow-up";
          }
        }
      }
    }

    for (const question of responses.questions) {
      for (const keyword of question.keywords) {
        const score = this.calculateMatchScore(
          normalizedInput,
          keyword as string,
        );
        if (score > bestScore && score >= 20) {
          bestScore = score;
          bestMatch = question;
          matchType = "main";
        }
      }
    }

    return bestMatch
      ? { response: bestMatch, score: bestScore, type: matchType }
      : null;
  }

  private getDefaultResponse(input: string): string {
    const topics = [
      "**ReactJS** (What is React, React library)",
      "**Components** (Functional vs Class components)",
      "**JSX** (JavaScript XML syntax)",
      "**State & Props** (Data management)",
      "**Redux** (State management)",
      "**useEffect** (Side effects hook)",
      "**useContext** (Context API)",
      "**useCallback** (Performance optimization)",
      "**useMemo** (Memoization)",
    ];

    const exampleQuestions = [
      "- What is ReactJS?",
      "- Explain React components",
      "- Difference between state and props",
      "- How does useEffect work?",
      "- What is Redux?",
    ];

    return `I'm not sure how to answer "${input}".

I can help you with the following **React concepts**:

${topics.join("\n")}

**Try asking questions like:**
${exampleQuestions.join("\n")}

**Tips for better results:**
- Use keywords like "React", "component", "hook", "state", "props"
- Ask about specific concepts (e.g., "useEffect hook", "JSX syntax")
- You can ask "what is...", "how does... work", or just use the keyword directly`;
  }

  public getBotResponse = (input: string): Promise<string> => {
    return new Promise((resolve) => {
      const nbSeconds = Math.floor(Math.random() * 2) + 1;

      setTimeout(() => {
        const lowerInput = input.toLowerCase();
        const normalizedInput = this.normalizeInput(input);

        const match = this.findBestMatch(normalizedInput, lowerInput);

        let response: string;

        if (match && match.score >= 20) {
          if (match.type === "follow-up") {
            response = match.response.response;
          } else {
            const followUpSuggestion =
              match.response.followUpQuestion?.question || "";
            response = `${match.response.response}\n\n${followUpSuggestion}`;
          }
        } else {
          response = this.getDefaultResponse(input);
        }

        resolve(response);
      }, nbSeconds * 1000);
    });
  };
}
