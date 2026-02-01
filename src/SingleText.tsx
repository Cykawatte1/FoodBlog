import Header from "./Header.tsx";

interface singleTextProps {
    textJSON: textData;
}

export interface textData {
    id: string;
    title: string;
    text: string;
    date: string;
}

export default function singleText({ textJSON }: singleTextProps) {
    return(
        <>
            <Header/>
            <div className="background-white">
                <div className={"text-container"}>
                    <div className={"texts-container"}>
                        <h1>{textJSON.title}</h1>
                        <p>{textJSON.date}</p>
                        <p>{textJSON.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}