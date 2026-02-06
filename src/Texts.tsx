import Header from "./Header.tsx";
import Text from "./Text.tsx";
import veganuaryExp from "./texts/veganuaryExp.json";
import porridgeTxt from "./texts/porridge.json";

export default function Texts() {
    return (
        <>
            <Header />
            <div className="background-white">
                <div className={"text-container"}>
                    <div className={"texts-container"}>
                        {/*<Text textJSON={veganuaryExp} />*/}
                        <Text textJSON={porridgeTxt} />
                        <div className={"text-container"}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}