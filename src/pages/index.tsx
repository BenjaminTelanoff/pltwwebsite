import Head from "next/head";
import MainNavbar from "@/components/MainNavbar";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useCollection } from "@nandorojo/swr-firestore";
import Contact from "@/components/contact";
import FeedItem from "@/types/FeedItem";

export default function Home() {
  const imageSize = 150;
  const styling = {
    backgroundColor: "#ffffe0",
    width: "100%",
    height: "530px",
    margin: 0, // Remove any default margins
    padding: 0, // Remove any default padding
  };
  <Contact />;
  return (
    <>
      <Head>
        <title>Home | PLTW</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fYIB37N3_400x400.ico" />
      </Head>
      <main>
        <div style={styling}>
          <Container md>
            <Image
              width={imageSize}
              height={imageSize}
              src="fYIB37N3_400x400.svg"
              alt="PLTW Logo"
            />
            <Spacer y={-1} />
            <Row justify="center">
              <Text h1>Welcome to my PLTW website</Text>
            </Row>
            <Spacer y={-1} />
            <Row justify="center" align="center">
              <Text size="$xl">
                {
                  " My name is Benjamin Telanoff, and I am currently a senior at Santa Monica High School(SAMOHI). Having been an active participant in the PLTW program since my freshman year, I’m thrilled to continue this journey this year with the PLTW capstone program. This program is centered around providing technical solutions to real life problems. With this opportunity, I’m hoping to discover a transformative solution to a problem we encounter, that not only propels me and my peers towards revolutionary thinking, but also aligns with my aspiration to advance technology and enhance the quality of living for many."
                }
              </Text>
            </Row>
            <Spacer y={0.2} />
          </Container>
          <Row justify="center">
            <Card css={{ height: "190px", mw: "200px" }}>
              <Card.Body>
                <Text>{"My interests in engineering:"}</Text>
                <Text>-Innovation and Design</Text>
                <Text>-Problem Solving</Text>
                <Text>-Data Analysis</Text>
                <Text>-Automation</Text>
              </Card.Body>
            </Card>
            <Spacer x={4} />
            <Card css={{ height: "190px", mw: "290px" }}>
              <Card.Body>
                <Text>In my free time I enjoy</Text>
                <Text>Coding</Text>
                <Text>Writing</Text>
                <Text>Playing games/spending time with friends</Text>
                <Text>Excercising</Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
        <Spacer y={-0.9} />
        <Contact />
      </main>
    </>
  );
}
