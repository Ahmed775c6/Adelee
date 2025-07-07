// Types
import { GlassButtonProps } from "@/lib/Types101";

const GlassButton: React.FC<GlassButtonProps> = ({ color, icon,  onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group
          overflow-hidden backdrop-blur-lg rounded-xl p-3 
          justify-center  text-center mb-4 mr-4 inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
      style={{
        background: `linear-gradient(135deg, ${color}80, ${color}40)`,
        boxShadow: `0 4px 30px ${color}20`,
        border: `1px solid ${color}40`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-center justify-center text-center z-10   text-white">
        <div className="">{icon}</div>

      </div>
    </button>
  );
};
export default GlassButton;