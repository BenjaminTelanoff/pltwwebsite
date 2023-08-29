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
    setVis,
  }: {
    header: string;
    text: string;
    setVis: any;
  }) => {
    return (
      <Card css={{ mw: "330px", h: "auto" }} variant="bordered">
        <Card.Header css={{ height: "50px" }}>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ height: "250px" }}>
          <Text>{text}</Text>
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
      <Container>
        <Row justify="center" align="center">
          <Text h1>Spread of Information</Text>
        </Row>
        <Spacer />
        <Text>
          The method that data was shared and disseminated was revolutionized by
          ARPANET, which had a significant impact on how quickly information
          spread. It introduced a decentralized network architecture that made
          it possible to transmit information quickly and effectively across
          very long distances. As it can instantaneously access data, it was
          seen as a development in communication technology. Now, the prior
          issues of space and time were solved for the transmission of
          information. And by providing a platform for people, groups, and
          institutions to easily share knowledge, cooperate, and access
          resources, ARPANET lay the groundwork for the Internet. It enabled the
          quick distribution of ideas, news, and research by creating a global
          network that linked people from many locations and backgrounds. It is
          impossible to exaggerate the significance of ARPANET for the
          dissemination of information because it sparked a paradigm change in
          communication and paved the way for the information age we live in
          today.
        </Text>
        <Spacer />
        <Row justify="center" align="center">
          <Grid.Container gap={2} justify="center" alignContent="center">
            <Grid>
              <CardItemImage
                header={"Geographic Map"}
                imgURL={
                  "http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
                }
                setVis={setVisible}
              />
            </Grid>
            <Grid>
              <CardItemImage
                header={"GEOGRAPHIC MAP"}
                imgURL={
                  "https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
                }
                setVis={setVisible2}
              />
            </Grid>
            <Grid>
              <CardItemText
                header={"Growing Community"}
                text={
                  "“By the end of 1975, twenty-nine sites were connected to the ARPANET. This early network is now an operational resource supporting a large and growing research community in the computer science and related disciplines. -Vint Cerf and Robert Kahn”"
                }
                setVis={setVisible3}
              />
            </Grid>
            <Grid>
              <CardItemText
                header={"The Arpanet and Its Impact on the State of Networking"}
                text={
                  "“I sit down at my desk and I try to log in, and it said, “One prior failed attempt.” I knew that it wasn’t me, but I knew we had logs that kept track. I asked the system administrator to look into it. He identified that the failed attempt came from a military research laboratory on the other side of the country. -STEVE CROCKER”"
                }
                setVis={setVisible4}
              />

              <Grid>
                <CardItemText
                  header={"Quote"}
                  text={
                    "In the early days of the military Arpanet, my daughter was studying in Nicaragua. Because the U.S. was essentially at war with them, contact was difficult. I managed to use MIT's Arpanet connection, and she found one, so we could communicate thanks to the Pentagon! -Noam Chomsky"
                  }
                  setVis={setVisible5}
                />
              </Grid>
            </Grid>
          </Grid.Container>
        </Row>
      </Container>

      {/* MODAL SETUP BELOW */}
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings5}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Quote by Noam Chomsky, A-zquotes.com
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            In the early days of the military Arpanet, my daughter was studying
            in Nicaragua. Because the U.S. was essentially at war with them,
            contact was difficult. I managed to use MIT's Arpanet connection,
            and she found one, so we could communicate thanks to the Pentagon!
          </Text>
          <Spacer />
          <Text b>
            {" "}
            While prior technology such as phone calls could be compromised by
            governments listening to the line, ARPANET completely revolutionized
            the way individuals could communicate, as it provided a secure way
            for the spread of information. In this way ARPANET was a new
            frontier for communication - individuals could now communicate all
            across the world (given there was a computer on both ends) using
            secure packets that where extremely difficult to intercept.{" "}
          </Text>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            ARPA Network, Grographic Map(1973)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
          />
          <Text id="modal-description">
            From the original two university computers roughly a decage earlier,
            ARPANET has grown masivvely, as can be seen by the sheer quantity of
            nodes in the presented map. The 1973 map is populated with many
            houses of academia, all wanting in on the new intercommunications
            project. Each professor that would join the network would be able to
            share all of their research and colloborate with other more easily
            and safely. This is why so many professors gravitated towrds the
            project.
          </Text>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        width="600px"
        aria-labelledby="n"
        aria-describedby="d"
        {...bindings2}
      >
        <Modal.Header>
          <Text id="n" size={18}>
            ARPANET GEOGRAPHIC MAP(1980)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
          />
          <Text id="d">
            By this point, ARPANET is so popular that officials are looking at
            commercial options. The reason the government project has had such
            success is because of it's ability to keep over 100 servers of
            people at the various marked locations up to date with eachother,
            despite miles of physical distance. Even simular technology, such as
            phones, could not service to so many individuals at once. The 1980's
            map shows ARPANETS most busy time befofe it finally gets replaced in
            1990 officially.
          </Text>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        width="600px"
        aria-labelledby="n"
        aria-describedby="d"
        {...bindings3}
      >
        <Modal.Header>
          <Text id="n" size={18}>
            Growing Community
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            “By the end of 1975, twenty-nine sites were connected to the
            ARPANET. This early network is now an operational resource
            supporting a large and growing research community in the computer
            science and related disciplines.” -Vint Cerf and Robert Kahn
          </Text>
          <Text id="d" b>
            The quote highlights ARPANET's pioneering role and expanding
            capabilities in spreading information. By the end of 1975, ARPANET
            connected twenty-nine sites, marking the early stages of a
            groundbreaking network. It became an operational resource,
            supporting a large and growing research community in computer
            science and related disciplines. This demonstrates ARPANET's
            significance in facilitating information exchange and collaboration,
            enabling researchers to share knowledge and advance their fields.
            ARPANET's impact on information dissemination and its role in
            supporting the research community solidified its position as a
            pioneering and influential network.{" "}
          </Text>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        width="600px"
        aria-labelledby="n"
        aria-describedby="d"
        {...bindings4}
      >
        <Modal.Header>
          <Text id="n" size={18}>
            Primary - Steve Croker(2019)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            “I sit down at my desk and I try to log in, and it said, “One prior
            failed attempt.” I knew that it wasn’t me, but I knew we had logs
            that kept track. I asked the system administrator to look into it.
            He identified that the failed attempt came from a military research
            laboratory on the other side of the country.”
          </Text>
          <Text id="d">
            This quote by Steve Croker, one of the original creators of ARPANET,
            is the beginning to a longer interview in which he and other ARPANET
            colleagues discuss the 'dark side' of ARPANET. Croker brings up this
            point to illustrate that with the spread of information comes both
            good and bad. Croker was shocked to have experienced an attack so
            early in the phases of ARPANET, and from then on he was convinced
            that ARPANET had the power to unite people and share their ideas in
            both good and bad ways. This is the dark side that it brought, the
            potential for the "spread" of evil.
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}
