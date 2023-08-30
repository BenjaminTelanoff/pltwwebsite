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
  return (
    <div>
      <Head>
        <title>Home | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fYIB37N3_400x400.ico" />
      </Head>
      <Container>
        <Row justify="center">
          <Spacer />
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
            wedding with a reception at the beach, but we as well got to do some
            sightseeing. I got to see Tillamook, a relaxing beach, an aquarium,
            museums, and more. Another thing that I did for a lot of the summer
            was working, averaging around 20-30 hours a week as a lifeguard with
            the city of Santa Monica. A nice, fun, and relaxing way to gain some
            money in my free time. It’s a very different way of living during
            summer break than there is while school is in session. You have a
            lot less duties and a lot more free time which creates this amazing
            atmosphere of quite literally nothingness.
          </Text>
          <Text h5>
            But that being said, school still brings about a bunch of
            opportunities. Now that school is back in session, I’m looking
            forward to the engineering class/program I’m participating in. The
            numerous labs and experiments we do leading up to our competitions
            will certainly be entertaining and fulfilling. But perhaps the
            biggest thing I’m looking forward to is the Capstone project that we
            will do this year, looking to create a project that will be
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
      <Contact />
    </div>
  );
}
