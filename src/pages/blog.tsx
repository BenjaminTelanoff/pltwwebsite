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
    backgroundColor: "#ADD8E6",
    width: "100%",
    height: "100vh",
    margin: 0, // Remove any default margins
    padding: 0, // Remove any default padding
  };
  return (
    <div>
      <div className="team" style={styling}>
        <Head>
          <title>Home | Blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/fYIB37N3_400x400.ico" />
        </Head>
        <Image
          width={1}
          height={30}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAA1BMVEWt2OZ2UvuzAAAAH0lEQVRoge3BgQAAAADDoPlTX+EAVQEAAAAAAAAA8BohbAABVJpSrwAAAABJRU5ErkJggg=="
          alt="PLTW Logo"
        />
        <Container>
          <Row justify="center">
            <Card css={{ height: "190px", mw: "700px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Row justify="center">
                    <Text h1>Welcome to my Blog</Text>
                  </Row>
                  <Row justify="center" color="white">
                    <Text h5>
                      Here you can learn about my life through my blog!
                    </Text>
                  </Row>
                </Col>
              </Card.Header>
              <Card.Image
                src="data:image/jpeg;base64,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"
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
              />
            </Card>
          </Row>
        </Container>
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
