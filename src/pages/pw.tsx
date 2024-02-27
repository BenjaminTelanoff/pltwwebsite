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
    link,
  }: {
    header: string;
    text: string;
    link: string;
  }) => {
    return (
      <Card css={{ mw: "600px", h: "auto" }} variant="bordered">
        <Card.Header css={{ height: "50px" }}>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Row justify="center">
            <Text>{text}</Text>
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row align="center" justify="center">
            <Button shadow color="warning" auto>
              <Link href={link}>
                <Text>Go to Doc</Text>
              </Link>
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
  const styling = {
    backgroundColor: "#ffcccb",
    width: "100%",
    height: "100%+10px",
    margin: 0, // Remove any default margins
    padding: 0, // Remove any default padding
  };
  return (
    <div>
      <div className="team" style={styling}>
        <Head>
          <title>Home | ProcessWriting</title>
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
                    <Text h1>Welcome to my Process Writing</Text>
                  </Row>
                  <Row justify="center" color="white">
                    <Text h5>
                      Some writing pieces that I worked on this year!
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
              header={"Process Writing #1"}
              text={
                " One essay or writing process piece that you are proud of : I chose my research paper on US v Nixon that I did during Eng 11AP."
              }
              link={
                "https://docs.google.com/document/d/1gj6_RZjaR3khltduAVC6shFBt5KcEvtp069LHFQNYqI/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #2"}
              text={
                "Narrative Writing - Completed Personal Statement or one of the PIQ's for the UC's. I chose to do prompt #2 of the PIQ's."
              }
              link={
                "https://docs.google.com/document/d/1GYABQfVz1nFjboOZOEKYi4Bhw6zoy2-d10Nisml6yJY/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #3"}
              text={
                "Analysis Essay - To showcase my analytical writing, I chose an essay that explored the theme of the novella, 'Metamorphosis.'"
              }
              link={
                "https://docs.google.com/document/d/1iJMlqTwzXXy4_La7OkmccjlNXbaKGsyU55oasLwSQ5I/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #4"}
              text={
                "Expository Essay - To showcase my expository writing, I chose an essay that explored JPL(Jet Propulsion Laboratory)."
              }
              link={
                "https://docs.google.com/document/d/1MhQ30LySxbRR1QAhGPloqAzlIUWb7yG3z24Q0mJiX10/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #5"}
              text={
                "Formal Letter Writing - To showcase my letter writing, I chose a letter pertaining to my thoughts on the JPL invention challenge."
              }
              link={
                "https://docs.google.com/document/d/1HQjK6zroOjMNgiULu6-hPS90aSfBbyaTjmjekAC5PG0/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #6"}
              text={
                "Creative Writing - To showcase my creative writing, I chose the first two short stories of a book I was thinking of writing."
              }
              link={
                "https://docs.google.com/document/d/1yPxZBk71I2pnkIj4BtgThiA7BLBvbGlEQLwn2yf1E1g/edit?usp=sharing"
              }
            />
          </Row>
          <Spacer />
          <Row justify="center">
            <CardItemText
              header={"Process Writing #7"}
              text={
                "Argumentative Writing - To showcase my argumentative writing, I chose an essay that explained how AI is a net benefit to society."
              }
              link={
                "https://docs.google.com/document/d/1Jbw2sS-KkWSBM5kDqTCPMtovQyDU1xgb51mLrYRA7UU/edit?usp=sharing"
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
