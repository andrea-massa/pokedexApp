import "./NavLink.css"



export default function NavLink({label, icon, handleClick, isExpanded}){
    return(
        <li className={`navlink ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <span className="icon">{icon}</span>
            {isExpanded && <span className="label">{label}</span>}                        
        </li>   
    )
}