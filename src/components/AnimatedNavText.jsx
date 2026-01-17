function AnimatedNavText({ text }) {
    return (
        <>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="nav-letter"
                    style={{ transitionDelay: `${i * 30}ms` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </>
    );
}

export default AnimatedNavText;