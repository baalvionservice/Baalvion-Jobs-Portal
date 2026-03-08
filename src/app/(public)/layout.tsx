'use client';
import { motion } from 'framer-motion';
import { PublicFooter } from '@/components/layout/public-footer';
import { PublicHeader } from '@/components/layout/public-header';
import { FloatingJobButton } from '@/components/layout/FloatingJobButton';
import { SkipToContent } from '@/components/system/SkipToContent';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <SkipToContent />
      <PublicHeader />
      <motion.main
        id='main-content'
        className='flex-1'
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <FloatingJobButton />
      <PublicFooter />
    </div>
  );
}
