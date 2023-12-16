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
                  <Text color="black">Video</Text>
                </Link>
              </Row>
            </Button>
            <Spacer />
            <Button>
              {" "}
              <Row justify="center">
                <Link href={url2}>
                  <Text color="black">Final Documentation</Text>
                </Link>
              </Row>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };
  const CardItemText2 = ({
    header,
    text,
    url1,
  }: {
    header: string;
    text: string;
    url1: string;
  }) => {
    return (
      <Card css={{ mw: "600px", h: "auto" }} variant="bordered">
        <Card.Header css={{ height: "50px" }}>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Row justify="center">
            <Spacer y={1} />
            <Text>{text}</Text>
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center">
            <Button>
              {" "}
              <Row justify="center">
                <Link href={url1}>
                  <Text color="black">Final Documentation</Text>
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
    height: "100%",
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
            <Text h2>Physics Labs</Text>
            <Spacer />
          </Row>
          <Row justify="center">
            <CardItemText2
              header={"Project #1 - Puzzle Project"}
              text={
                "For this project, we were tasked to create a multipart puzzle that fit within a 27 cubic inch area. The puzzle had to include a minimum of four parts, each assigned a different color. The parts had to fit together well and stay together when tilted onto a minimum of two sides."
              }
              url1={
                "https://docs.google.com/document/d/1uYx7BblMtNbWZ7VmSrdGGs2eqKdaQZvxofYR_yTRpIQ/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText2
              header={"Project #2 - Roof Rack One Pager"}
              text={
                "For this project, we were tasked with testing, and if needed, altering a design for a roof rack. Given certain constraints and criteria that the design had to meet, the objective was to create a one pager to display the final product."
              }
              url1={
                "https://docs.google.com/presentation/d/1kCtGU3-rmh-0Yc1Sv4HBmlzWE3LO-EW2nLADQYsB1A4/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <Text h2>JPL Wastebasket Challenge</Text>
            <Spacer />
          </Row>
          <Row justify="center">
            <CardItemText
              header={"Project #1 - Paper into a Basket Challenge"}
              imgURL={"/tsets.png"}
              text={
                "This project revolves around this years JPL invention challenge. In short, this year the objective is to use seven subsequent activities, ranging across different power sources, to travel a minimum distance of 5 meters away in order to get a piece of paper into a wastebasket in the fastest time possible."
              }
              url1={"https://www.youtube.com/watch?v=aWdJgH913PU"}
              url2={
                "https://docs.google.com/document/d/18aijS_sescWfNT_c3vflO_yUaHFq9Fgh5N6pf2M0MOk/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
        </Container>
      </div>
      <Contact />
    </div>
  );
}
