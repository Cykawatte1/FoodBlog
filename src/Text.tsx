import {Link} from "react-router-dom";
import type {textData} from "./SingleText.tsx";

interface textProps{
    textJSON: textData;
}

export default function text({ textJSON }: textProps) {
    return(
        <>
            <div className={"single-text"}>
                <Link to={`/${textJSON.id}`} className={"single-text-link"}>
                    <div className={"text-container-attributes"}>
                        <h1>{textJSON.title}</h1>
                        <p>{textJSON.date}</p>
                    </div>
                    <div className={"text-container-attributes-two"}>
                        <p style={{ whiteSpace: 'pre-line' }}>{textJSON.text}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}