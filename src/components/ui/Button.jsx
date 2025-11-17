/* Reusable Fruitpod button */

function Button({
  variant = "primary",
  as: Component = "button",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fp-green";

  const variants = {
    primary: "bg-fp-green text-white hover:bg-fp-green/90",
    outline:
      "border border-fp-green text-fp-green bg-white hover:bg-fp-green/5",
    ghost: "text-fp-dark hover:bg-fp-green/10",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Button;
