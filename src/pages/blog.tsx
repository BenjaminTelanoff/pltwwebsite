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
  const CardItemImage = ({
    header,
    imgURL,
    setVis,
  }: {
    header: string;
    imgURL: string;
    setVis: any;
  }) => {
    return (
      <>
        <Head>
          <title>Spread of Info | Arpanet</title>
        </Head>
        <Card css={{ mw: "330px", h: "auto" }} variant="bordered">
          <Card.Header>
            <Text b>{header}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Image width={200} height={200} src={imgURL} />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center" align="center">
              <Button size="sm" light onPress={() => setVis(true)}>
                Expand
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </>
    );
  };
  const CardItemText = ({
    header,
    text,
    imgURL,
    setVis,
  }: {
    header: string;
    imgURL: string;
    text: string;
    setVis: any;
  }) => {
    return (
      <Card css={{ mw: "600px", h: "auto" }} variant="bordered">
        <Card.Header css={{ height: "50px" }}>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ height: "250px" }}>
          <Row justify="center">
            <Image width={400} height={200} src={imgURL} />
            <Spacer x={0.5} />
            <Col>
              <Spacer y={1} />
              <Text>{text}</Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center" align="center">
            <Button size="sm" light onPress={() => setVis(true)}>
              Expand
            </Button>
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
          <CardItemText
            header={"Geographic Map"}
            imgURL={
              "http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
            }
            text={
              "“By the end of 1975, twenty-nine sites were connected to the ARPANET. This early network is now an operational resource supporting a large and growing research community in the computer science and related disciplines. -Vint Cerf and Robert Kahn”"
            }
            setVis={setVisible}
          />
        </Row>
      </Container>
      <Card css={{ mw: "330px" }} variant="bordered">
        <Card.Header>
          <Text b>INTERNET ECONOMY GDP</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ height: "250px", py: "$10" }}>
          <Row>
            <Image
              width={10000}
              height={200}
              src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
            />
            <Text>JUST TESTING THIS OUT FOR NOW MWAHAHAHAHAHA</Text>
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center" align="center">
            <Button size="sm" light onPress={() => setVisible2(true)}>
              Expand
            </Button>
            <Modal
              scroll
              width="600px"
              aria-labelledby="n"
              aria-describedby="d"
              {...bindings2}
            >
              <Modal.Header>
                <Text id="n" size={18}>
                  INTERNET ECONOMY AS A PERCENTAGE OF 2016 GDP(2012). OECD
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Image
                  width={400}
                  height={300}
                  src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
                />
                <Text id="d">
                  This image signifies how the development and widespread
                  adoption of the internet, stemming from ARPANET's innovation,
                  have transformed various sectors, fostering economic growth,
                  innovation, and new business opportunities, contributing to
                  the overall GDP of countries worldwide.
                </Text>
              </Modal.Body>
            </Modal>
          </Row>
        </Card.Footer>
      </Card>
      <Contact />
    </div>
  );
}
