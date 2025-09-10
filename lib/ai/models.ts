export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Sass Chat',
    description: 'All-purpose chat sassy sometimes',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
  {
    id: 'character-fight-simulator',
    name: 'Fight Simulator',
    description: 'Simulates fights between fictional characters',
  },
  {
    id: 'story-game',
    name: 'Story Game',
    description: 'Players take turns writing a story using random words',
  },
];
