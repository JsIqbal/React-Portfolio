const SocialIcons = () => {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "22px",
            padding: "10px",
            transition: "0.2s ease-in",
        },
    };

    return (
        <div className="socialIcons" style={styles.socialIcons}>
            <a
                className="icon"
                style={styles.icon}
                href="https://github.com/JsIqbal"
                target="_blank"
            >
                <i
                    className="fa-brands fa-github"
                    aria-hidden="true"
                    title="Iqbal's GitHub Profile"
                ></i>
            </a>
            <a
                className="icon"
                style={styles.icon}
                href="https://www.linkedin.com/in/jsiqbal/"
                target="_blank"
            >
                <i
                    className="fa-brands fa-linkedin"
                    aria-hidden="true"
                    title="Iqbal's LinkedIn Profile"
                ></i>
            </a>
            <a
                className="icon"
                style={styles.icon}
                // target="_blank"
                // href="https://www.instagram.com/michael.yeates/"
            >
                <i
                    className="fa-brands fa-instagram"
                    aria-hidden="true"
                    title="Iqbal's Instagram Profile coming soon"
                ></i>
            </a>
            <a
                className="icon"
                style={styles.icon}
                href="https://twitter.com/JavascriptIqbal"
                target="_blank"
            >
                <i
                    className="fa-brands fa-twitter"
                    aria-hidden="true"
                    title="Iqbal's Twitter Profile"
                ></i>
            </a>
        </div>
    );
};

export default SocialIcons;
