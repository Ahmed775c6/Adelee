    export const hexColorMap = {
    blue: '#3B82F6',
    pink: '#ec4899',
    green: '#22C55E',
    white: '#FFFFFF',
  };

  export type Social = {
    platform: string;
    color: keyof typeof hexColorMap;
    link: string;
    delay: number;
  };
  export interface GlassButtonProps {
  color: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}
