import storyWords from './word-pool';
import twists from './plot-twists';

export interface RoundModifiers {
  words: string[];
  plotTwist: string | null;
}

/**
 * Generate random words and (sometimes) a plot twist.
 */
function generateRoundModifiers(count = 3): RoundModifiers {
  // Shuffle and slice words
  const words = [...storyWords].sort(() => Math.random() - 0.5).slice(0, count);

  // 🎲 Chance of a plot twist (adjust probability as needed)
  let plotTwist: string | null = null;
  if (Math.random() < 0.8) {
    plotTwist = twists[Math.floor(Math.random() * twists.length)];
  }
  console.log('Generated words:', words, 'Plot twist:', plotTwist);

  return { words, plotTwist };
}

/**
 * Build the system prompt for the story game.
 * - Round 1: no random words or plot twist
 * - Round >=2: random words + maybe a plot twist
 */
export function buildStoryGamePrompt(
  basePrompt: string,
  roundNumber: number,
  wordCount = 3,
): string {
  let prompt = `${basePrompt}\n(Current round: ${roundNumber})`;

  if (roundNumber > 1) {
    const { words, plotTwist } = generateRoundModifiers(wordCount);

    prompt += `\nThe player must include the following words in their story: ${words.join(', ')}.`;

    if (plotTwist) {
      prompt += `\n⚡ Plot twist: ${plotTwist}`;
    }
  }

  return prompt;
}
