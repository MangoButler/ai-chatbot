// import { useChatModel } from '@/lib/chat-model-context';
// import { motion } from 'framer-motion';
// import { useTheme } from 'next-themes';

// export const Greeting = () => {
//   const { resolvedTheme } = useTheme();
//   const selectedChatModel = useChatModel().selectedModel;

//   const imageSrc =
//     resolvedTheme === 'dark'
//       ? '/images/chatbot-img.png'
//       : '/images/chatbot-img.png';

//   return (
//     <div
//       key="overview"
//       className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col items-center justify-center"
//     >
//       <motion.img
//         src={imageSrc}
//         alt="Game Bot Icon"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 10 }}
//         transition={{ delay: 0.4 }}
//         className="w-[30vw] max-w-[180px] dark:mb-2 rounded-md aspect-square object-contain"
//       />
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 10 }}
//         transition={{ delay: 0.5 }}
//         className="text-2xl font-semibold"
//       >
//         Welcome to the Chat Game Bot
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 10 }}
//         transition={{ delay: 0.6 }}
//         className="text-2xl text-zinc-500"
//       >
//         Let&apos;s get started!
//       </motion.div>
//     </div>
//   );
// };

import { useChatModel } from '@/lib/chat-model-context';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export const Greeting = () => {
  const { resolvedTheme } = useTheme();
  const selectedChatModel = useChatModel().selectedModel;

  const imageSrc =
    resolvedTheme === 'dark'
      ? '/images/chatbot-img.png'
      : '/images/chatbot-img.png';

  let title = '';
  let subtitle = '';

  switch (selectedChatModel.id) {
    case 'story-game':
      title = 'Story Game';
      subtitle = "Set your players (e.g. 'Players: James, John')";
      break;

    case 'character-fight-simulator':
      title = 'Fight Simulator';
      subtitle = 'Pick your opponents and let the battle begin!';
      break;

    case 'chat-model':
      title = 'Sass Chat';
      subtitle = "Ask me anything—I'll answer, but with attitude 😏";
      break;

    case 'chat-model-reasoning':
      title = 'Reasoning Model';
      subtitle = 'Give me a tough problem and watch me think.';
      break;

    default:
      title = 'Welcome to the Chat Game Bot';
      subtitle = "Let's get started!";
      break;
  }

  return (
    <div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col items-center justify-center"
    >
      <motion.img
        src={imageSrc}
        alt="Bot Icon"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.4 }}
        className="w-[30vw] max-w-[180px] dark:mb-2 rounded-md aspect-square object-contain"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500 text-center"
      >
        {subtitle}
      </motion.div>
    </div>
  );
};
