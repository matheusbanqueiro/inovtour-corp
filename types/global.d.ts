// types/global.d.ts
export {};

declare global {
  interface Window {
    fbq: ((...args: any[]) => void) & {
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: (...args: any[]) => void;
      loaded?: boolean;
      version?: string;
    };
  }
}
