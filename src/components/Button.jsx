const Button = ({ text, icon, styles, fn }) => {
	return (
		<button
            onClick={fn}
			className={`py-2 px-4 border ${styles} rounded-md 
                    flex items-center gap-2 hover:transition-colors 
                    hover:duration-50 hover:ease-in`}
		>
            {icon && <img src={icon} alt="" className="w-4 h-4" />}
			<p className="text-base">{text}</p>
		</button>
	);
};

export default Button;
