import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const VirtualTour = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: { ar: 'جولة افتراضية', fr: 'Visite Virtuelle', en: 'Virtual Tour' },
    description: {
      ar: 'استكشف حرمنا الجامعي من منزلك. انقر على الفيديو أدناه لبدء جولتك.',
      fr: 'Explorez notre campus depuis le confort de votre maison. Cliquez sur la vidéo ci-dessous pour commencer votre visite.',
      en: 'Explore our campus from the comfort of your home. Click the video below to start your tour.',
    },
    videoPlaceholder: {
      ar: 'فيديو الجولة الافتراضية',
      fr: 'Vidéo de la visite virtuelle',
      en: 'Virtual Tour Video',
    },
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{content.description[currentLanguage]}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Placeholder for an embedded video. Replace with a real video URL. */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualTour;
