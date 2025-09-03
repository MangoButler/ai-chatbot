// import {
//   customProvider,
//   extractReasoningMiddleware,
//   wrapLanguageModel,
// } from 'ai';
// import { xai } from '@ai-sdk/xai';
// import {
//   artifactModel,
//   chatModel,
//   reasoningModel,
//   titleModel,
// } from './models.test';
// import { isTestEnvironment } from '../constants';

// export const myProvider = isTestEnvironment
//   ? customProvider({
//       languageModels: {
//         'chat-model': chatModel,
//         'chat-model-reasoning': reasoningModel,
//         'title-model': titleModel,
//         'artifact-model': artifactModel,
//       },
//     })
//   : customProvider({
//       languageModels: {
//         'chat-model': xai('grok-2-vision-1212'),
//         'chat-model-reasoning': wrapLanguageModel({
//           model: xai('grok-3-mini-beta'),
//           middleware: extractReasoningMiddleware({ tagName: 'think' }),
//         }),
//         'title-model': xai('grok-2-1212'),
//         'artifact-model': xai('grok-2-1212'),
//       },
//       imageModels: {
//         'small-model': xai.imageModel('grok-2-image'),
//       },
//     });

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { google } from '@ai-sdk/google'; // ✅ Gemini provider
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { isTestEnvironment } from '../constants';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        // ✅ Gemini model IDs
        'chat-model': google('gemini-1.5-pro'),
        'chat-model-reasoning': wrapLanguageModel({
          model: google('gemini-1.5-flash'), // lighter reasoning-friendly model
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': google('gemini-1.5-flash'),
        'artifact-model': google('gemini-1.5-flash'),
      },
      imageModels: {
        'small-model': google.imageModel('gemini-1.5-pro'), // ✅ Gemini Vision/Image
      },
    });
