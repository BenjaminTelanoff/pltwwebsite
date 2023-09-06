import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";
export default function Contact() {
  return (
    <main>
      <div>
        <Spacer />
        <Container>
          <Row justify="center">
            <Card css={{ height: "60px", mw: "2500px" }}>
              <Row justify="center">
                <Text>Contact Me</Text>
              </Row>
              <Row justify="center">
                <Text>benjamin.telanoff@gmail.com</Text>
              </Row>
            </Card>
          </Row>
        </Container>
        <Spacer y={2} />
      </div>
    </main>
  );
}
