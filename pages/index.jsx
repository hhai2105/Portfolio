import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Hai Nguyen</title>
                <meta name="description" content="I'm a junior at University of Massachusetts, Amherst, majoring in Computer Science." />
                    <link rel="icon" href="/fav.png" />
            </Head>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
