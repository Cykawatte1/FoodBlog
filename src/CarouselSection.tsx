import Carousel from 'react-bootstrap/Carousel';

export default function CarouselSection() {
    return (
        <div className={"carouselSection"}>
        <Carousel>
            <Carousel.Item>
                <img src={`${import.meta.env.BASE_URL}slider1.png`} className={"carouselSectionImg"} />
                <Carousel.Caption>
                    <h3>Knusprige Pizza</h3>
                    <p>Mit leckerer Pepperoniwurst und Käserand</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`${import.meta.env.BASE_URL}slider2.png`} className={"carouselSectionImg"} />
                <Carousel.Caption>
                    <h3>Leckere Tortelloni</h3>
                    <p>Mit Käse-Sahne Soße und Parmesan</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`${import.meta.env.BASE_URL}slider3.png`} className={"carouselSectionImg"} />
                <Carousel.Caption>
                    <h3>Riesengarnele</h3>
                    <p>Angerichtet mit einem Schwertfischfilet unter einer auswahl frischem Gartengrün</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}
