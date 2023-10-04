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
    setVis,
    date,
  }: {
    header: string;
    imgURL: string;
    text: string;
    setVis: any;
    date: string;
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
          <Row align="center" justify="space-between">
            <Row>
              <Text css={{ opacity: "0.33" }} size={"$sm"} color="">
                {date}
              </Text>
            </Row>
            <Button onPress={() => setVis(true)}>Read Entry</Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  const { setVisible: setVisible3, bindings: bindings3 } = useModal();
  const { setVisible: setVisible4, bindings: bindings4 } = useModal();
  const { setVisible: setVisible5, bindings: bindings5 } = useModal();
  const styling = {
    backgroundColor: "#CBC3E3",
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
  };
  const Resource = ({ link, text }: { link: string; text: string }) => {
    return (
      <Row justify="center">
        <Link href={link}>
          <Text h3 color="primary">
            {text}
          </Text>
        </Link>
      </Row>
    );
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
                      Welcome to my Works in Progress
                    </Text>
                  </Row>
                  <Row justify="center">
                    <Text h5 color="black">
                      Here you can find the projects that I am currently working
                      on.
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
        <Spacer y={2} />
        {/* Resources */}
        <Container>
          <Spacer y={2} />
          <Row justify="center">
            <CardItemText
              header={"Blog #1 - Summer expectation"}
              imgURL={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZHSFGA6pq9PvXptWGFfGqkrWmd2tDM5xhQ&usqp=CAU"
              }
              text={
                "I had quite an eventful summer, but  on top of that, I'm looking to continue this time of happiness into the school year. In this blog I talk about what I did over this summer, and what I'm looking forward to, both in the engineering class and out of it."
              }
              date={"August 29th 2023"}
              setVis={setVisible}
            />
          </Row>
        </Container>
        <Modal scroll width="900px" aria-labelledby="modal-title" {...bindings}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Blog #1
            </Text>
          </Modal.Header>
          <Image
            width={400}
            height={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZHSFGA6pq9PvXptWGFfGqkrWmd2tDM5xhQ&usqp=CAU"
            alt="description of image"
          />
          <Modal.Body>
            <Text h5>
              This summer, my family drove up to Lincoln City, Oregon for my
              uncle's wedding. There, not only did we get to attend a lovely
              wedding with a reception at the beach, but we as well got to do
              some sightseeing. I got to see Tillamook, a relaxing beach, an
              aquarium, museums, and more. Another thing that I did for a lot of
              the summer was working, averaging around 20-30 hours a week as a
              lifeguard with the city of Santa Monica. A nice, fun, and relaxing
              way to gain some money in my free time. It’s a very different way
              of living during summer break than there is while school is in
              session. You have a lot less duties and a lot more free time which
              creates this amazing atmosphere of quite literally nothingness.
            </Text>
            <Text h5>
              But that being said, school still brings about a bunch of
              opportunities. Now that school is back in session, I’m looking
              forward to the engineering class/program I’m participating in. The
              numerous labs and experiments we do leading up to our competitions
              will certainly be entertaining and fulfilling. But perhaps the
              biggest thing I’m looking forward to is the Capstone project that
              we will do this year, looking to create a project that will be
              remembered.
            </Text>
            <Text h5>
              Outside of engineering, I’m looking forward to having a nice
              relaxing senior year at Samohi. Years of education have been put
              into school and I’m now at the very end before the journey that is
              college. After college apps and all the other stressful aspects of
              the first semester, I’m looking forward to what is to come.
            </Text>
          </Modal.Body>
        </Modal>
      </div>
      <Contact />
    </div>
  );
}
