import "../../assets/style/components-style/footer-style/footer.style.css"

export default function Footer(){

    const icons = ["https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png", "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png", "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"]



    return (
        <footer>
            <ul className="footer-icons-list">
                {icons ? icons.map(icon => <li><img src={icon} className="icon"/></li>) : ""}
            </ul>

            <span>2022 | Ugur Yildirim</span>
        </footer>
    )
}