import React from "react";
import { motion } from "framer-motion";

/**
 * NeonButton Component
 *
 * A reusable button with a neon glow effect, supporting animations and optional icons.
 *
 * @param {Object} props
 * @param {string} [props.href] - Optional URL. If provided, renders as an anchor tag.
 * @param {string} [props.className] - Additional classes.
 * @param {React.ComponentType} [props.icon] - Optional icon component to render.
 * @param {React.ReactNode} props.children - Button content.
 * @param {Function} [props.onClick] - Click handler (if not a link).
 * @param {Object} [props...rest] - Other props passed to the motion component.
 */
const NeonButton = ({
    children,
    href,
    icon: Icon,
    className = "",
    onClick,
    ...rest
}) => {
    // Determine the base component
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-slate-900 font-bold tracking-wide hover:opacity-90 transition-all duration-300 neon-glow-cyan ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...rest}
        >
            {/* Icon (Left side by default, can be flexible if needed, but standard is left or right) */}
            {/* If the user wants specific positioning they can embed icon in children, but 'icon input system' implies a prop */}

            <span>{children}</span>

            {Icon && (
                <Icon className="w-5 h-5" />
            )}
        </Component>
    );
};

export default NeonButton;
