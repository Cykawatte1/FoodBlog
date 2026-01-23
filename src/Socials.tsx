export default function Socials() {
    return(
        <>
            <div className="socials-container">
                <div className="socials-box">

                    <div className="insta">
                        <a href="http://instagramm.com"><img src={`${import.meta.env.BASE_URL}insta.svg`}/></a>
                    </div>


                    <div className="x">
                        <a href="http://x.com"><img src={`${import.meta.env.BASE_URL}x.svg`}/></a>
                    </div>

                    <div className="youtube">
                        <a href="http://youtube.com"><img src={`${import.meta.env.BASE_URL}youtube.svg`}/></a>
                    </div>

                </div>
            </div>

            <div className="logo-container">
                <img src={`${import.meta.env.BASE_URL}FullLogo_Transparent.png`} className="logo"/>
            </div>
        </>
    )
}