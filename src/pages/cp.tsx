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
  const CardItemText = ({
    header,
    text,
    imgURL,
    url1,
    url2,
  }: {
    header: string;
    imgURL: string;
    text: string;
    url1: string;
    url2: string;
  }) => {
    return (
      <Card css={{ mw: "600px", h: "auto" }} variant="bordered">
        <Card.Header css={{ height: "50px" }}>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ height: "250px" }}>
          <Row justify="center">
            <Image
              width={400}
              height={200}
              src={imgURL}
              alt="description of image"
            />
            <Spacer x={0.5} />
            <Col>
              <Spacer y={1} />
              <Text>{text}</Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row align="center">
            <Spacer x={4} />
            <Button>
              {" "}
              <Row justify="center">
                <Link href={url1}>
                  <Text color="black">Learn More</Text>
                </Link>
              </Row>
            </Button>
            <Spacer />
            <Button>
              {" "}
              <Row justify="center">
                <Link href={url2}>
                  <Text color="black">Research Doc</Text>
                </Link>
              </Row>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };

  const styling = {
    backgroundColor: "#CBC3E3",
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
  };
  //Main Return
  return (
    <div>
      <div style={styling}>
        {/* What it says in webpage */}
        <Head>
          <title>Home | WorksInProgress</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/fYIB37N3_400x400.ico" />
        </Head>
        <Image
          width={1}
          height={30}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACgCAMAAADpVSNoAAAAA1BMVEWQ7pBqm8gMAAAAQ0lEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvg2yIAAB+R0FCwAAAABJRU5ErkJggg=="
          alt="PLTW Logo"
        />
        {/* Welcome Card */}
        <Container>
          <Row justify="center">
            <Card css={{ height: "190px", mw: "700px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Row justify="center">
                    <Text size="45px" weight="bold" color="black">
                      Welcome to Completed Projects
                    </Text>
                  </Row>
                  <Row justify="center">
                    <Text h5 color="black">
                      Here you can find the projects that I have completed.
                    </Text>
                  </Row>
                </Col>
              </Card.Header>
              <Card.Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxMTITEhJSkrLi4uFx8zPjMsNygtLisBCgoKDQ0NDw0NDysZFRkrKzctLTcrKy0rNy0tKysrKysrLS0rLSsrKy0rKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAACAQADBgUHBP/EABoQAQEBAQEBAQAAAAAAAAAAAAABERICEwP/xAAZAQEBAQADAAAAAAAAAAAAAAAAAQIDBAX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQES/9oADAMBAAIRAxEAPwD9XbCxsd0HGwsalAxsLGwVzsSw8RQcTCxsWgYmHjYtAxMPEwqjg2HYmKBiWHg2KBUKxLGgKNOjWsAo06FawGhToemsAolRrWKgUqNaEorUUZFaAjLjIr1mNhYuPLrMDEw8bFpAxMdMSlIA2OmJYtAxMLGxQK2FiYA4mHg2KBYh1GlCoVFQaNKjWsAo06NawChToVrAKNKhWsBo1fQ1vAalKoqimEuFBxZFwpEoGM6cslV6lsXGx5rKMrALYSUBxMJFBo00UFMLEqgpSo1QaNKjVxRo0qNaBGlQrWA0aVCt4DRq0a0oUaVGtYg0bCRpQxsLFwoGLIeLIm6QZ5KRZDkZ3Vgcs6csz0sekxsXGdBxpiEgIioqolW0bVGRkqjUa1o2qNaNa0bWsGo1rRtaxWtG1LRtawa0bWtG1pYlo1aNawShSqVoBLDxMWgYmOmNhSBjYeNhVgyFPKyFIzuiSLIUhSM7qjyzpIzNV91h1tdNxKiNqqui2pVGo1aNVWtGtaNqjWjrWprRGtC1aFq4rWja1Gt4JRWjVGoUkrRBqElWgVDxMKDjYWNi0HGwsXEqjiyLhSFB5KRcKRndUcORZDkY3QcZ0xEo+myajgYVkbQbUtRKqxrRtapaqpo1aNUjWjatGrhEo1aNawSiVFoGpSsTFoKHiYtAxsPEwqjjYWNhQcbDxsKBi4eNIlBxcORpEoMhSFIUiVRkKQsKRndBkUpFZo/pZJWYZiozBGStaiiUaVGqqUaqANSlRrWA1KTYoGDYaLVDGw8YoGNh42FAxsPGwoGNh42FAxsPFwoGLhYuJQcaQ8XEoMhSLIUhRJFkXCkZomMWMgcrJFQZmYGRkqiVKqANQqmAiFiKDYhpi0FMPGwo542HjYtBxMPGwoONhY2FBxsLGxKDi4WNhQcXCkbCgyFi4siUGQpFxYDSLI0hRkRiYQVXEFZFYEZWAcTDsTAHEw8bADEw+WxaOeLh4mFAxsPGwoGNh42FAxsPGwoGNh42FAxsdMTCg42HjclBxsPGxKBiyHI2FExsLFwBVVQFlYFsHHSiJgsWNgqITYILYWNgUcbDxsAMbCxsAcbCxsAcbCxcBzxsdMbADGwsXADGw8bAoY2HjYAYuFjBRbCYKOLiqJRxcXGwKmNVGouIiWsrUPW1znpeiMw2CeinoCUZVlBWxW1ERlYEZU0GZU0GxsbW6BUS+m7gEwdt9CENnPteyENg7WeghNg9L0Csmtois2toMyal9CxrQ9VPXoPXprMazGtYLUajS9LPSMbiLPRSswLPRT0zMos9N0zLCL0nTMkI3adqywg32l9qxCDfafRmIsT6DfbM1FiX9G+jMswjdt2zHOEXtZ7ZkhFn6F9GZIkafovaskIvadqxCJfQ30zEIN9BazNZjSazMqx//9k="
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
              />
            </Card>
          </Row>
        </Container>
        {/* Cards */}
        <Container>
          <Spacer y={2} />
          <Row justify="center">
            <CardItemText
              header={"Project #1 - Paper into a Basket Challenge"}
              imgURL={
                "data:image/jpeg;base64,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"
              }
              text={
                "This project revolves around this years JPL invention challenge. In short, this year the objective is to use seven subsequent activities, ranging across different power sources, to travel a minimum distance of 5 meters away in order to get a piece of paper into a wastebasket in the fastest time possible."
              }
              url1={
                "https://www.jpl.nasa.gov/jpl-and-the-community/team-competitions/invention-challenge"
              }
              url2={
                "https://docs.google.com/document/d/18aijS_sescWfNT_c3vflO_yUaHFq9Fgh5N6pf2M0MOk/edit?usp=sharing"
              }
            />
          </Row>
        </Container>
      </div>
      <Contact />
    </div>
  );
}
