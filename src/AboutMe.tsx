import Header from "./Header.tsx";

export function AboutMe() {
    return(
        <>
            <Header />
            <div className={"background-white"}>
                <div className="about-me">
                    <div className={"about-me-description"}>
                        <p>
                            <h1>
                                Hi, ich bin Elias!
                            </h1>

                            Ich studiere aktuell Informatik an der Philipps-Universität in Marburg und bin ein absoluter Technik-Enthusiast. Wenn ich nicht gerade mit Uni und lernen beschäftigt bin, findet man mich meistens in zwei anderen Welten: beim Sport oder in der Küche.

                            Warum diese Mischung? Für mich gibt es viele Parallelen zwischen dem Programmieren und dem Kochen. Ein gutes Rezept ist wie ein perfekt geschriebener Algorithmus: Die Auswahl der richtigen Komponenten und die präzise Ausführung führen zu einem exzellenten Ergebnis.

                            Meine Begeisterung für Ernährung kam vor allem durch den Sport. Wer Leistung bringen will – egal ob im Gym oder beim Denken – braucht den richtigen Treibstoff. Aus der Notwendigkeit, mich gesund zu ernähren, hat sich eine echte Leidenschaft entwickelt. Ich liebe es, klassische Gerichte zu hacken, sie gesünder zu machen und dabei neue Geschmackskombinationen zu entdecken.

                            Was dich hier erwartet: Auf dieser Seite teile ich meine Reise mit dir. Du findest hier:

                            Rezepte - Meine persönlichen Favoriten – gesund, nahrhaft und "informatiker-freundlich" (effizient und lecker).

                            Zudem wirst du hier Gedanken, Meinungen und Fakten zu allem Rund um die Ernährung und Zubereitung finden, sowie wie man einen fitten Lebensstil im Studienalltag meistert.



                        </p>
                        <img src={`${import.meta.env.BASE_URL}me.jpg`} />
                    </div>
                </div>
            </div>
        </>
    )
}