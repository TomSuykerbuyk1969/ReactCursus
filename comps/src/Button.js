import className from "classnames";

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) {
     const classes = className(rest.className,'flex items-center px-3 py-1.5 border', {
        'border-sky-500 bg-sky-200 text-black': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-200 text-black': success,
        'border-amber-500 bg-amber-200 text-black': warning,
        'border-rose-500 bg-rose-200 text-black': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-sky-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-amber-500': outline && warning,
        'text-rose-500': outline && danger,
    });
  return <button {...rest} className={classes}>{children}</button>  ;
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);

        if(count > 1) {
            return new Error('Only one of primary, secundary, success, warning and danger can be true');
        }

    }
};

export default Button;