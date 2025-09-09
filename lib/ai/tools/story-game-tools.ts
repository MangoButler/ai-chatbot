import { tool, type UIMessageStreamWriter } from 'ai';
import { z } from 'zod';
import type { Session } from 'next-auth';
import type { ChatMessage } from '@/lib/types';
import storyWords from '@/lib/word-pool';
import twists from '@/lib/plot-twists';

interface StoryGameToolProps {
  session: Session;
  dataStream: UIMessageStreamWriter<ChatMessage>;
}

/** Tool: Pick a random player from a list */
export const pickRandomPlayer = ({ session, dataStream }: StoryGameToolProps) =>
  tool({
    description: 'Randomly select one player from the list of players.',
    inputSchema: z.object({
      players: z.array(z.string()).nonempty(),
    }),
    execute: async ({ players }) => {
      const chosen = players[Math.floor(Math.random() * players.length)];

      // ✅ Use the `chosenPlayer` type from CustomUIDataTypes
      dataStream.write({
        type: 'data-chosenPlayer',
        data: chosen,
        transient: true,
      });

      return { chosen };
    },
  });

/** Tool: Generate a random set of words to use in the story */
// export const getRandomWords = ({ session, dataStream }: StoryGameToolProps) =>
//   tool({
//     description: 'Generate a random list of words that the player must use.',
//     inputSchema: z.object({
//       count: z.number().min(1).max(5).default(3),
//     }),
//     execute: async ({ count }) => {
//       const wordPool = storyWords;

//       const words = wordPool.sort(() => Math.random() - 0.5).slice(0, count);
//       console.log('Generated words:', words);

//       // ✅ Use the `words` type from CustomUIDataTypes
//       dataStream.write({
//         type: 'data-words',
//         data: words,
//         transient: true,
//       });

//       return { words };
//     },
//   });

export const getRandomWords = ({ session, dataStream }: StoryGameToolProps) =>
  tool({
    description:
      'Generate a random list of words that the player must use. Sometimes also trigger a plot twist.',
    inputSchema: z.object({
      count: z.number().min(1).max(5).default(3),
    }),
    execute: async ({ count }) => {
      const wordPool = storyWords;

      const words = wordPool.sort(() => Math.random() - 0.5).slice(0, count);

      console.log('Generated words:', words);

      // 🎲 2% chance of a plot twist
      let plotTwist: string | null = null;
      if (Math.random() < 0.8) {
        plotTwist = twists[Math.floor(Math.random() * twists.length)];
        console.log('⚡ Plot twist triggered:', plotTwist);
      }

      // ✅ Stream both words and plot twist to the frontend
      dataStream.write({
        type: 'data-words',
        data: words,
        transient: true,
      });

      if (plotTwist) {
        dataStream.write({
          type: 'data-plotTwist',
          data: plotTwist,
          transient: true,
        });
      }
      console.log('Generated words:', words, 'Plot twist:', plotTwist);

      return { words, plotTwist };
    },
  });
