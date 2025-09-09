import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 10000,
    availableChatModelIds: [
      'chat-model',
      'chat-model-reasoning',
      'character-fight-simulator',
      'story-game',
    ],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 100000,
    availableChatModelIds: [
      'chat-model',
      'chat-model-reasoning',
      'character-fight-simulator',
      'story-game',
    ],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
