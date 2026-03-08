'use client';

export function useToast() {
  return {
    toast: (options: {
      title?: string;
      description?: string;
      variant?: 'default' | 'destructive';
      action?: React.ReactNode;
    }) => {
      console.log('Toast:', options.title, options.description);
    },
  };
}
