import Header from "./Header.tsx";
import Text from "./Text.tsx";
import veganuaryExp from "./texts/veganuaryExp.json"

export default function Texts() {
    return (
        <>
            <Header />
            <div className="background-white">
                <div className={"text-container"}>
                    <div className={"texts-container"}>
                        <Text textJSON={veganuaryExp} />
                        <div className={"text-container"}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}