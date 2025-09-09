// import { z } from 'zod';
// import type { getWeather } from './ai/tools/get-weather';
// import type { createDocument } from './ai/tools/create-document';
// import type { updateDocument } from './ai/tools/update-document';
// import type { requestSuggestions } from './ai/tools/request-suggestions';
// import type { InferUITool, UIMessage } from 'ai';

// import type { ArtifactKind } from '@/components/artifact';
// import type { Suggestion } from './db/schema';

// export type DataPart = { type: 'append-message'; message: string };

// export const messageMetadataSchema = z.object({
//   createdAt: z.string(),
// });

// export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

// type weatherTool = InferUITool<typeof getWeather>;
// type createDocumentTool = InferUITool<ReturnType<typeof createDocument>>;
// type updateDocumentTool = InferUITool<ReturnType<typeof updateDocument>>;
// type requestSuggestionsTool = InferUITool<
//   ReturnType<typeof requestSuggestions>
// >;

// export type ChatTools = {
//   getWeather: weatherTool;
//   createDocument: createDocumentTool;
//   updateDocument: updateDocumentTool;
//   requestSuggestions: requestSuggestionsTool;
// };

// export type CustomUIDataTypes = {
//   textDelta: string;
//   imageDelta: string;
//   sheetDelta: string;
//   codeDelta: string;
//   suggestion: Suggestion;
//   appendMessage: string;
//   id: string;
//   title: string;
//   kind: ArtifactKind;
//   clear: null;
//   finish: null;
// };

// export type ChatMessage = UIMessage<
//   MessageMetadata,
//   CustomUIDataTypes,
//   ChatTools
// >;

// export interface Attachment {
//   name: string;
//   url: string;
//   contentType: string;
// }

import { z } from 'zod';
import type { getWeather } from './ai/tools/get-weather';
import type { createDocument } from './ai/tools/create-document';
import type { updateDocument } from './ai/tools/update-document';
import type { requestSuggestions } from './ai/tools/request-suggestions';
import type {
  pickRandomPlayer,
  getRandomWords,
} from './ai/tools/story-game-tools';
// import type { getRandomWords } from './ai/tools/story-game-tools';
import type { InferUITool, UIMessage } from 'ai';

import type { ArtifactKind } from '@/components/artifact';
import type { Suggestion } from './db/schema';

export type DataPart = { type: 'append-message'; message: string };

export const messageMetadataSchema = z.object({
  createdAt: z.string(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

// ---- Built-in tools ----
type weatherTool = InferUITool<typeof getWeather>;
type createDocumentTool = InferUITool<ReturnType<typeof createDocument>>;
type updateDocumentTool = InferUITool<ReturnType<typeof updateDocument>>;
type requestSuggestionsTool = InferUITool<
  ReturnType<typeof requestSuggestions>
>;

// ---- Story game tools ----
type pickRandomPlayerTool = InferUITool<ReturnType<typeof pickRandomPlayer>>;
type getRandomWordsTool = InferUITool<ReturnType<typeof getRandomWords>>;

export type ChatTools = {
  getWeather: weatherTool;
  createDocument: createDocumentTool;
  updateDocument: updateDocumentTool;
  requestSuggestions: requestSuggestionsTool;

  // 👇 new story game tools
  pickRandomPlayer: pickRandomPlayerTool;
  getRandomWords: getRandomWordsTool;
};

export type CustomUIDataTypes = {
  textDelta: string;
  imageDelta: string;
  sheetDelta: string;
  codeDelta: string;
  suggestion: Suggestion;
  appendMessage: string;
  id: string;
  title: string;
  kind: ArtifactKind;
  clear: null;
  finish: null;

  // 👇 custom events emitted by your tools
  chosenPlayer: string; // name of the player selected
  words: string[]; // list of random words generated
  plotTwist?: string; // 👈 added
};

export type ChatMessage = UIMessage<
  MessageMetadata,
  CustomUIDataTypes,
  ChatTools
>;

export interface Attachment {
  name: string;
  url: string;
  contentType: string;
}
