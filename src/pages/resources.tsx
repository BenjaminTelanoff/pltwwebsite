import {
  Card,
  Container,
  Text,
  Row,
  Col,
  Modal,
  useModal,
  Button,
  Textarea,
  Image,
  Link,
  Spacer,
  Grid,
} from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import Contact from "@/components/contact";
export default function About() {
  return (
    <div>
      <Head>
        <title>Home | Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fYIB37N3_400x400.ico" />
      </Head>
      <Spacer />
      <Container>
        <Row justify="center">
          <Card css={{ height: "190px", mw: "700px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Row justify="center">
                  <Text h1 color="white">
                    Welcome
                  </Text>
                </Row>
                <Row justify="center">
                  <Text h5 color="white">
                    Here you can find resources that I commonly use and find
                    helpful.
                  </Text>
                </Row>
              </Col>
            </Card.Header>
            {/* <Card.Image
              src="https://v1.nextui.org/images/card-example-4.jpeg"
              objectFit="cover"
              width="100%"
              height={340}
              alt="Card image background"
            /> */}
          </Card>
        </Row>
      </Container>
      <Spacer />
      <Col>
        <Row justify="center">
          <Link href="https://docs.google.com/document/d/1kuX37VltEKn3wY1KqT4bQZomjwtg1iu1XS3z1h0ggFg/edit">
            <Text h3 color="primary">
              PLTW Syllabus
            </Text>
          </Link>
        </Row>
        <Row justify="center">
          <Link href="https://www.samohiengineering.com/">
            <Text h3 color="primary">
              PLTW Website
            </Text>
          </Link>
        </Row>
        <Row justify="center">
          <Link href="https://www.smmusd.org/samohi">
            <Text h3 color="primary">
              Samohi Website
            </Text>
          </Link>
        </Row>
      </Col>
      <Spacer />
      <Contact />
    </div>
  );
}
