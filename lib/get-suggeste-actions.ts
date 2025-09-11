import { useSelectedChatModel } from '@/hooks/get-selected-chat-model';

type SuggestedAction = {
  title: string;
  label: string;
  action: string;
};

export function useSuggestedActions() {
  const selectedChatModel = useSelectedChatModel();

  let suggestedActions: SuggestedAction[] = [];

  switch (selectedChatModel.id) {
    case 'chat-model': // Sass Chat
      suggestedActions = [
        {
          title: 'Give me a sassy answer',
          label: 'about pineapple pizza',
          action: 'What do you think about pineapple on pizza?',
        },
        {
          title: 'Roast me',
          label: 'for using tabs instead of spaces',
          action: 'Roast me for preferring tabs over spaces in code.',
        },
        {
          title: 'Explain quantum physics',
          label: 'like I am five',
          action: 'Explain quantum physics like I am five, but be sassy.',
        },
      ];
      break;

    case 'chat-model-reasoning': // Reasoning model
      suggestedActions = [
        {
          title: 'Solve a logic puzzle',
          label: 'about knights and knaves',
          action:
            'Solve this: On an island, knights always tell the truth and knaves always lie...',
        },
        {
          title: 'Explain step by step',
          label: 'how to balance a binary search tree',
          action: 'Explain step by step how to balance a binary search tree.',
        },
        {
          title: 'Reason about philosophy',
          label: 'like utilitarianism vs deontology',
          action:
            'Compare utilitarianism and deontology with logical reasoning.',
        },
      ];
      break;

    case 'character-fight-simulator': // Fight Simulator
      suggestedActions = [
        {
          title: 'Who would win',
          label: 'Gandalf vs Darth Vader',
          action: 'Simulate a fight between Gandalf and Darth Vader.',
        },
        {
          title: 'Who would win',
          label: 'Sherlock Holmes vs Batman',
          action: 'Simulate a fight between Sherlock Holmes and Batman.',
        },
        {
          title: 'Who would win',
          label: 'Godzilla vs King Kong',
          action: 'Simulate a fight between Godzilla and King Kong.',
        },
      ];
      break;

    case 'story-game': // Story Game
      suggestedActions = [];
      break;

    default:
      suggestedActions = [];
  }

  return { selectedChatModel, suggestedActions };
}
