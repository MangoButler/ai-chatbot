// lib/chat-model-context.tsx
'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { chatModels, type ChatModel } from '@/lib/ai/models';

type ChatModelContextType = {
  selectedModel: ChatModel;
  setSelectedModel: (model: ChatModel) => void;
};

const ChatModelContext = createContext<ChatModelContextType | undefined>(
  undefined,
);

export function ChatModelProvider({ children }: { children: ReactNode }) {
  const [selectedModel, setSelectedModel] = useState<ChatModel>(chatModels[0]);

  return (
    <ChatModelContext.Provider value={{ selectedModel, setSelectedModel }}>
      {children}
    </ChatModelContext.Provider>
  );
}

export function useChatModel() {
  const ctx = useContext(ChatModelContext);
  if (!ctx) {
    throw new Error('useChatModel must be used inside <ChatModelProvider>');
  }
  return ctx;
}
