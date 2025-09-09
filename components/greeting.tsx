import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export const Greeting = () => {
  const { resolvedTheme } = useTheme();

  const imageSrc =
    resolvedTheme === 'dark'
      ? '/images/chatbot-img.png'
      : '/images/chatbot-img.png';

  return (
    // <div
    //   key="overview"
    //   className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col justify-center"
    // >
    //   <motion.div
    //     initial={{ opacity: 0, y: 10 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 10 }}
    //     transition={{ delay: 0.5 }}
    //     className="text-2xl font-semibold"
    //   >
    //     Hello there!
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, y: 10 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 10 }}
    //     transition={{ delay: 0.6 }}
    //     className="text-2xl text-zinc-500"
    //   >
    //     How can I help you today?
    //   </motion.div>
    // </div>

    <div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col items-center justify-center"
    >
      <motion.img
        src={imageSrc}
        alt="MES Bot Icon"
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
        Welcome to the Chat Game Bot
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500"
      >
        Let&apos;s get started!
      </motion.div>
    </div>
  );
};
