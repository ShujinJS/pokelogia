import "../../assets/style/components-style/footer-style/footer.style.css"

export default function Footer(){

    const icons = ["https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png", "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png", "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"]



    return (
        <footer>
            <ul>
                {icons ? icons.map(icon => <li><img src={icon} className="icon"/></li>) : ""}
            </ul>
            <span>2022 | Ugur Yildirim</span>
        </footer>
    )
}