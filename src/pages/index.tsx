import Head from "next/head";
import MainNavbar from "@/components/MainNavbar";
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useCollection } from "@nandorojo/swr-firestore";
import FeedItem from "@/types/FeedItem";

export default function Home() {
  const imageSize = 150;
  return (
    <>
      <Head>
        <title>Home | NeighborNet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Container md>
            <Spacer y={2} />
            <Image
              width={imageSize}
              height={imageSize}
              src="fYIB37N3_400x400.svg"
              alt="PLTW Logo"
            />
            <Row justify="center">
              <Text h1>Welcome to my PLTW website</Text>
            </Row>
            <Row justify="center" align="center">
              <Text size="$xl">
                {
                  " My name is Benjamin Telanoff, and I am currently a senior at Santa Monica High School(SAMOHI). Having been an active participant in the PLTW program since my freshman year, I’m thrilled to continue this journey this year with the PLTW capstone program. This program is centered around providing technical solutions to real life problems. With this opportunity, I’m hoping to discover a transformative solution to a problem we encounter, that not only propels me and my peers towards revolutionary thinking, but also aligns with my aspiration to advance technology and enhance the quality of living for many."
                }
              </Text>
            </Row>
            <Spacer />
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
            <Spacer x={2} />
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
          <Spacer />
        </div>
      </main>
    </>
  );
}
