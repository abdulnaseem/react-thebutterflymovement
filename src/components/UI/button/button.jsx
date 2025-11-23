// src/components/UI/button/button.jsx
import './button.css';

const Button = ({ className = '', children, ...props }) => {
  const baseClasses =
    // layout
    'inline-flex items-center justify-center ' +
    // shape & spacing
    'rounded-full px-8 py-3 ' +
    // typography
    'mma-logo-font-normal text-xs sm:text-sm tracking-[0.18em] uppercase ' +
    'font-semibold ' +
    // colors
    'bg-[#f5b400] text-[#0b0d10] ' +
    // effects
    'shadow-[0_8px_20px_rgba(0,0,0,0.45)] ' +
    'hover:bg-[#ffcd45] hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] ' +
    'transform hover:-translate-y-0.5 ' +
    // focus / accessibility
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400] ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-black ' +
    // transition
    'transition-colors transition-transform transition-shadow duration-200';

  return (
    <button
      type="button"
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
