import {
  Card,
  Container,
  Text,
  Row,
  Col,
  Modal,
  useModal,
  Button,
  Image,
  Spacer,
  Grid,
} from "@nextui-org/react";
import Head from "next/head";
import React from "react";
export default function About() {
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  const { setVisible: setVisible3, bindings: bindings3 } = useModal();
  const { setVisible: setVisible4, bindings: bindings4 } = useModal();
  return (
    <div>
      <Head>
        <title>Economy | Arpanet</title>
      </Head>
      <Container>
        <Grid.Container></Grid.Container>
        <Row justify="center" align="center">
          <Text color="#85bb65" h1>
            Economy
          </Text>
        </Row>
        <Text>
          The early internet, ARPANET, had a significant effect on the economy.
          ARPANET established the framework for an international network that
          transformed information sharing and business procedures by
          facilitating data transfer and communication between computers. The
          ability to quickly and effectively transmit data helped businesses to
          increase their client base and operational efficiency, which in turn
          enabled the growth of electronic commerce. ARPANET had created a
          platform in which new companies and technology allowed for innovation
          and entrepreneurship. The ARPANET has a positive economic impact on
          industry, services, and finance. This is because it increased
          productivity, decreased prices for transactions, and provided a
          market. In the end, the economic revolution brought about by the
          ARPANET paved the path for the digital age and still has an impact on
          our current networked society.
        </Text>
        <Spacer y={1} />
        <Row justify="center" align="center">
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>Evolution of Ecommerce Industry</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "250px", py: "$10" }}>
              <Image
                width={200}
                height={200}
                src="https://www.agileinfoways.com/wp-content/uploads/2018/02/The-Evolution-of-E-Commerce-Industry-in-the-Last-few-Years.jpg"
              />
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      THE EVOLUTION OF E-COMMERCE INDUSTRY IN THE LAST FEW
                      YEARS(2018)
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="https://www.agileinfoways.com/wp-content/uploads/2018/02/The-Evolution-of-E-Commerce-Industry-in-the-Last-few-Years.jpg"
                    />
                    <Text id="modal-description">
                      This image exemplifies the enduring impact that ARPANET
                      had on the economy. It had a pivotal role in the creation
                      of e-commerce not only since it aided in the creation of
                      the internet, but by being able to expand and reach new
                      markets, revolutionize consumer behavior, and drive
                      significant economic transactions through online
                      platforms, turning the traditional economy into a digital
                      marketplace.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer x={2} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>INTERNET ECONOMY GDP</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "250px", py: "$10" }}>
              <Image
                width={10000}
                height={200}
                src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
              />
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
                      adoption of the internet, stemming from ARPANET's
                      innovation, have transformed various sectors, fostering
                      economic growth, innovation, and new business
                      opportunities, contributing to the overall GDP of
                      countries worldwide.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer x={2} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>ARPANET MANAGEMENT STUDY</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "250px", py: "$10" }}>
              <Text>
                "We recommend that the commercial packet switching industry be
                encouraged to provide the additional capacity that ARPA and new
                governmental applications will be seeking from this present
                ARPANET, rather than permit an open-ended expansion of the
                ARPANET communications network.”{" "}
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible3(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings3}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Baran, Paul.(1974) Arpanet Management Study
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      "We recommend that the commercial packet switching
                      industry be encouraged to provide the additional capacity
                      that ARPA and new governmental applications will be
                      seeking from this present ARPANET, rather than permit an
                      open-ended expansion of the ARPANET communications
                      network.”
                    </Text>
                    <Text id="modal-description">
                      Even in the earlier stages of ARPANET, Baran was already
                      envisioning a wide-scale use of packet switching
                      technology inluding its use in the commercial sector. This
                      demonstrates the economical potential perceived and shows
                      why this technology had introduced the idea of e-commerce.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer x={2} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>
                The Arpanet and Its Impact on the State of Networking
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "228px", py: "$10" }}>
              <Text>
                "I like to argue that the Arpanet was the first of the shared
                economy systems, a system similar to Airbnb and Uber that used
                resources that were otherwise idle.”
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible4(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="n"
                  aria-describedby="d"
                  {...bindings4}
                >
                  <Modal.Header>
                    <Text id="n" size={18}>
                      Primary - Leonard Kleinrock(2019)
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      "I like to argue that the Arpanet was the first of the
                      shared economy systems, a system similar to Airbnb and
                      Uber that used resources that were otherwise idle.”
                    </Text>
                    <Text id="d">
                      According to the claim, the ARPANET was a model of the
                      shared economy before Airbnb and Uber, where unused
                      resources were used wisely. This highlights the economic
                      contribution of the ARPANET by pioneering the idea of
                      resource-sharing and developing a platform for optimum
                      resource usage, resulting in financial gains and
                      improvements in efficiency.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
