// import { cookies } from 'next/headers';
// import { chatModels } from '@/lib/ai/models';

// export async function getSelectedChatModel() {
//   const cookieStore = await cookies(); // <-- await the promise
//   const selectedModelId =
//     cookieStore.get('selectedChatModel')?.value ?? chatModels[0].id;
//   return (
//     chatModels.find((model) => model.id === selectedModelId) ?? chatModels[0]
//   );
// }

'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { chatModels } from '@/lib/ai/models';

export function useSelectedChatModel() {
  const [selectedModel, setSelectedModel] = useState(chatModels[0]);

  useEffect(() => {
    const cookieValue = Cookies.get('selectedChatModel');
    if (cookieValue) {
      const found = chatModels.find((m) => m.id === cookieValue);
      if (found) setSelectedModel(found);
    }
  }, []);

  return selectedModel;
}
