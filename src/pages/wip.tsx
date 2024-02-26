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
                  <Text color="black">Presentation</Text>
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
        {/* Cards */}
        <Container>
          <Spacer y={2} />
          <Row justify="center">
            <CardItemText
              header={"Capstone Project"}
              imgURL={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRQZGRgYGhobGhoYGhsaHBgbGhgaGhkYGhsbJC0kGx0qHxsaJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHzMqIyozMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAwQFBwABAgj/xABNEAACAAMFAwcHCAcGBQUAAAABAgADEQQFEiExBkFREyJhcYGRoSMyQlJyscEHFGKCkrLR8BUWM1OiwuEkNHOT0vElQ1Rjs4OjtMPi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEBAQACAgIBAwMFAQAAAAAAAAECERIhAzFBBFFhBROBFCJxkaEV/9oADAMBAAIRAxEAPwACwxlIO12JX1zHSbFLvJiucLjXdjoZwFfRX7wERG2N3mUUzJDFjnuNFqB0ZRIWWW6T8hiLFVGgw87qrSJq+Lla04eUIAStMPTTXujOXVXZuKuKwRbIqKza8F9zROjYpfWMafZ3kVOCYVx1qddBpn1mKyzliZjZTW2WUvZjMDGiyjUcaoIDKRZlhu1plnMuoCsCuQ0FKUhmdi09Ywsc5BcbQVdIpPlng4PYMz4QcXUqTJjjIqz1FdDzQND0g90aTZJJZEwE8znddM4f2ey8owwHCUzNMq13HvhZZbvR4zSu77Wk+YPpRI7KOVM0hSxwjmjU66QT23ZpSxJAxMczQRlguUWZ8QNScj74q5TWimN3sKbU0WySpZYF0mZjeBhfMjUbu+OrmfDZa9BgktWyyWl+Vb0v5eb8IdStl1WXyY0ieXWla7CVyWxXcgLSHm23my+v4RO2PZJZZJXIwveuz/LBQ3ow+U3saulX4YzDFhfqXL6e8/jHH6lp095iv3InjVf0gn2l/u8rrH3YmDsUlNT3w+tmzYmS1Rjkv4QrnNnMaq8iOSsWEdik4nvjDsQnE98Vzhcag5Q/4e3UffAoVi0pWzNJRlV5phkdh5fE98TM5FaoFuUeXTr+EL38P7S3Uvug4s2xaIyuK1Ed2rY9Jkwu2pA8IOc2NU8ug+RHs/CA+/P7xJ6z8IN5Vm5NSnBfhEXJuRJ7codUNB3AxEp0A36PLN1D3QvYh/ZZnb7oN7bshLdsR139NI4mbMpLQgea2sVyhaqskGY6xEtfM4pNRtSFGvXBi2ysoMtATWh6jD60bJyplC+ZApByg40KWy+AZcsMi0cUPhpDS9bjlJKxoWrSu+nVBodkZRwgk83NeiH73RWXgLkqdQQDWJ5a9HxUpSMi2v1Rs/qxuK5wuFF8bEbjIhQSs+U4dMxR/FBaTAlJpyw4417efugsdqQUo5lTA2kML781frfdh3Z1oxG45xFX3eaKwWhJQmudBUilNIrxePLO6xjPzeXHxTeVPrlylCvrND6sCdn2gaWMKy0pWueMnP68OF2qp58oEb8LFT/FiEdF+j8n4cs/UPF+f9CC1Hyb+y3uhjdPnH2fjDSdfHMeYSjWdlXA9Cjhi2B5czMgOtV0FDUHOuS10zlIMxGxKykg9IbMEbiD+c4wvjyxm7/h04eXHO6l71tKTxDG8xza/SHuMcva24Q2t9q5mfEH3wscLlZIvPOYY3LL1D+6j5MdBb7xh6IEUvyYoogUDqr76woNpJo1VG6CpHipEdX9Fn+HD/6Xj+1FcY0DEzadZaLNc4kdymGgxyyqgslRQPqGBIzDUyIrBMrAgEGoIqDxB0Mc2fjuPt2ePy45+mQk04CFTCCy86mMMrl6jbHXyVU1jZjaiNkRcImYyOiI1DDUajukc0gDUZCkmXiNKgde+F/mnFwICtiCt4zf2fhHFwjmv7X8oiYnWWTmWmajPMQlZvm8sEKDQmvpZ9JrBouUbJgSsG0w5WfZ7SyKUciW4yDrXIEesBqdNdKZmJt8oaSyeuEBeCKSVlgV6YehyM7OuIggVGEUIzB4UMcTZM/EcINN2UPmvhtyqO+EXvebxA7IOI5G9nsc/ECwJEP/AJpM9UwwmXpM3zKdwiPn7RIvn2tF63UfGHxHKp/5lM9XxjIFv1qk/wDWJ/mf1jIXEcqMAY3DGXaAmINkBnnCEy9qEADI6GI5Rcwt9ImQPL9Tr9//AHgnnNu6IE0mUmYjuYE9WKpgik2hZlCpyh5FjDiziucAtsmYnY8ST3mD9aCK8n5Eg6jUbxHo/p/z/Dyv1P3j/LSKtGqaEDmjic8u+g7a7s0pkdRy5yjuk1bd+/8AjyyLWmlktUticGOzTDTdWbhYjpw4e4RPfJ9KKG0yHNTJnOleOYWvUeTr2wKW1D83tRocJSQK0NK8uuVdIMNkFYWq2sVNHaQwJBoxaWWah35mPN+o916/0vqCW0yFArSIO/FARabyfAD8YnrW2VI4S4ltKlcZUrQggBgcVdR2CMfp85j5Jll6dX1fjyz8Nxx99AZGoQSK9B3xy+/806ILn2Fm+jOQ9asvurGJsLMPnTkHsqze8iPT/f8AFve3if0nm+yvrQodXQ6YiV6HNmtBU/alp3RY2zkwtZLOx1MmX9xYHdo9nksrSiHZy9olhqgAUEm06AdZ3wT3VIWVIlS1JoqIorrQKNY87z5zK7j1/pcLj1fsexqNYozFHO7GxGzCEy1KpoTnGntaAA110gBYxlIRNqTDirlxjfzlcs9dIAVjkwk9sQVqdMo6kTQ5ouvugDbJi5vHgadtd3XFfvtY1ltMyzWkmYqNQTR52EgMuNfS5rCpFDloYM78veXZpZJOfif6RWuzt0NbrS9qnDyeOtDo7ClE6VUAV40pxi8Z90W7qwpM0TFDr5hoVyIxV0NDnSFCY3SNGANExyY2Y00MEnNM4rDaPa2ZNdlkzGSWCQCpws9PSLDMA7gKZawR7f3xyUoSUPPmg4uhND9o5dQaK1QZ1hwqdybHaJ5OFXmEUqSa0rpUsct8LWe45zTWkhQsxVxMrMBzct4qD5wg+uC7uRlKjDnHnv7RGnYKDshoSEvVfpyPdX/RE8u0ygWRdxdQwZc661GhpwjccW1TLmOgGSuyjqDERkWO11T7csx2B00Ecu8sKKmtNIhCjj0oTdX9aOL29ThJOjx3FW6ficjDeTMZDVWIhdNG9kDL3xylyzTLx4t2ka1zeOyb2kLFfDgjFmN8WVa7Oj+eisPpKG98U8kkqACxqYt2z2gPKSZXJkVq9aisPx27L6jCdGbXHZTrZ5f2F/CFZV2SE8yTLXpCL76RqdNlsyET1Uqa0DrzhUVBFcxl4w5WcrVCsp6iD7o255Xq1xzDHfqAb5S/7nP/APQ/86RrZSarS2dcw3J4TQitEw7+qOtu54Midn5rWX/5Ck+4QxuRHWzoimj4fcqj3kxFvWlzHeW/wd268JizRLZcm808eiCfZiaSXxChoPA/1geEpmCNMAxKYei3NKq6UqKZHQgkAiIjW+hdOxYTgpi3Yq07aR0K0z1pnTSu+kAN/wC20qzsvK2QuXJAZcBzXjioffpETa/lTkopeXYmDAUqSi6+zU0i2fykvlAAdpK/9+WRQ71RwfBzE2i81fZXwAgOue8vneObO9CapQDRaoQfCJ97xTcTEXL4VjO9pIUjVRWkRlmnBzqQYTtbuoJBJNYW16PJyHlMQWopSEpliYgUyNaxGpbZm8t3R1OtswDmk9sLnBo/NmYoEpTPM8Y6WQ4AyBwmoiM+fzqZaxk+8Jqy2aoL1ARKkFzmSA1CAaDKuXEgZwTOWipb5uxzpmWBpC9vtaSJbMxAyqx+AjuW4ly8cxxUCpJyA/P51irdr9o2tMwS5YJWuFQNXYmgNOJ0HCNccdsssnNrmzbxtAlLUJq7DRJYP3j4noBiwLHZUly1ly1wogAUdHxPTEdszcwssoKaF350xuLeqPoroO074mIq05HJjRjoxyYRuTCU2YFBYmgAJJ4ACpMNb2vAyQjFaoXVZjVpgVsg/SMRUHoMQ23ttMuyFRkZrBPq5s3eFI7YCVzfl4G0TnmnRjzRwUZKO7xJjm7Jyy5qO64lR1YjjQ19+fZDVUJOkLfN34GNJEVaku+JYUPM5gbzKjUag1EQ19OovCyOCKMrLXrBp9+G+zrvMswRlLYHK5itFIqBCO1NiEprKy1AEwDMnKpQ9mhjLWqJaHtqrNS1zqDIsD3qD8YyCi23GXctxp4AD4RkTzh6onNimEYsOUcPYpmHFhygps680rGjK5hUxnwdv71C6pQkb+aP4qQV2YcxR0QMunlCcR84ae3oYJVmBciRGjnRdvubE2Jcs6xJ2a1TLPKVBRhU5Nu5rMQDwqPGEpl5IN9YYTrwMw4aZUY9yNEzUp5Z246pnb/lNWVNeW9kYsmRKstDXPfn/tEdb/lYIQmXZaHTnMPhA9eSB7XajSuCZJHg5PhGtp7DLFjaYqAMCmYHFgD7410yS2z15Pa2tDTM6y0bDuBE1D8B3QTXZMOFSNaMNOkQGbBtQTv8Ef8AlQQWWNyEQji3vjLLra8StueYWpXSkcujc8lq6ZQ2tMxmZjXhHSVq1eiMZbuLQ+2YDTbOp3/OD3L/AFiP2jlKbA7YRiGDPrdAffEhtxYZbIkxsRmK+GWFYDEzNWhqDkKVyzygTt9+sZU6yzFXFoGQkqcJxb/Z8Y64xGGw+HkZmIV58v7jQS8oo0WBbYRvITPbl/ceCUxy+T3WuPp3844LD5BiURGiHkqYqr50GFGTdsljD0wwZTSOnmV31jXKQsrunOnIlxKWS7VZCXAz3EAgjpB1hlZyKkkVAFT8PGEb9vkS0qCaUBJqdDoAARv90Xhj80cbl1HN+3S88YROwDoSv80Q1xbJLItHKPM5QqtVGDDhZjTF5xqaAjorEJeN9T1QuldxzaZ5p9IDH0g57ojtntqJku0q06YzI3MfExIQMRRhXShA7KxvjludF5PBl47qrYAjDGKY00NDljHDNFV7TW60i0TFaY4IchQrsqqpPMoAQM1Iz4wyuq3HntOtdoRUHNCO2J24CtQBl4wXoTsa7UWybKWcXl8rZ3lhaVVSjNzcz5xFc655kaUhhI/4jd4XEOVlEAk185BTEaZ85Ce2sBVovidMUy3mu0smuFzXQ5VPEGJzYGbMS0EqpMthhc5UUjND0nOnU0MjobE2rIiZIO8HFM7D5kdvshbPWk9jv8Ug7ljCcPonzeg6lfiO0bhDikPlS1sAydn7fKFJUwSwcyFnMKniaIIb3hcN5TQBMfHhbEMU7FQgaiuh6YsRiOMcVHGFscYAmsF7H/mTP84f6oyDykZD2OMEwsq6xjWYcYdRxGS9guZIAnOPpU/jMErXTLPHviBn/tn/AMT+eC+kKwbRRuKX098NrfdcuWhZa1AbfxRon6QwvkeSbqP3Wgkmy2p/aCTNs9qmTXZRJnOCRXM4RRctaip0yz6Y3e94S5timBHUnmmlRioHUmq6jQxzfF5crOmzFXlMBMqUgFdah3A36Maj6PCAsqwLAgrQ5qaihz1B4ZjtjSXaVjfJpLDtMU6GQT3Op+EGdxyVmABuDHxEB3yU/tXH/Zf7ywcbODnD2W96xGU2qH5uSV059MJWu6paS3Za1ArEzWG145y39kxPGHuq32vlzGmIyebKSdMOYFDVQDnrlWlOBiv2sKPMm8jUoqFlxGrUAANT1kwdbTXkst54c18kstVFKln5Spz3AMCeqBDZq1y5c1hMYAMhWp0rVTnw0jSIHvyW2dZkqaGrQGWR2q8HIuiX098BnyRLRLSuuF0X7PKAeFO+LEiLjLVSo79ESuB742Lol8D3xIRlYXGHumP6Jler4mNfomVwPfD6sbpD4wt1DW+xKi8wa6g51pnT3wD2y0yppdJkkuoYgcnMHogetSupNdx6osS9V5gI3Gvw+MDlpuaRMzeSjE1qaUOfSM4XH7NfF5Jj7mw48izCXRuWUCqUbAxpkKZE1HwgcnXXYlYry7gjjLrl2dEHX6q2XQI4B3CbMp3FoRfYuysakPXjyjE95rDwxuNdHl8+GeMne4U2TvJJkvkhMxmWAAxUqWSmRIbOo809h3wQGIOwbMSpMxZkt5gZa6spBBFCGGHMRNkxbky1voLbYbOfOVDy6CauWeQda1wk7iCSQek8cq7bZ61BjLEkl1JxAFDqARvpSlD9aLXv+2PKs8yYgqyISAdK8T0DXsgD2Uvia1rAmHGZynEaAEEKCGGGgAogHYIqekIF9nLZXOzv3D4GC3Ya5Z8tnaahRGUAK1KlgfOoNMqjtg3VIUVYRk2lAih/2O4jpEcJUgg5MuvA8GpwP4jdDmkJTkOTL5w3esN6/h09sAIOszcVPZCDCbuCdoh+rgio0MJtADbyn0PGMhaMhAXxyYzH0HujWLoPdEgJ2oeWb2zX7UF8CNsI5VyR6Z3fSgs7D4wB1DG+SBJcncCf4TD6vQYgttZ5Swz2FQcGEHgXIQH+KAKztdlEmyCejOWrLdcRBwY3VyFoBkQQDWvm8MogLssonNOJGZVm7WbXxiS2mvpTLWzy6FcK42zyZSDhXqI1iL2evJZUxi1SrJhNAcsxn1fjFz0kV/JVNAnOTvkkdpdEA+1B5s8Od2N/LFdbIynE6eJaklQjqKUJQz5M1SAdeaH64sTZ6vKU3jGPuxFVBLEFtle3zaxvMoC7URAd7vkCegCrH2YmmmUitvlftfk7PLzGJnfuCoPCYYIQL+bPOYcoWZjRjirViyhgzcBQg06QIXGz81DjlIGp61CGqKMrKdVIJEPNnhjxudTgUdiKPhBgkugAiyA93bRzbM2OUx5rIXVszMlgMqo/FkBZC30Ei7LttqzpSTU810DDoqMx2HLsihL4UJaXFOaXYEdDip/nP1otH5MbYWu6WDU4GmL/ABlqfxRNMZ1jdIQ5YeqYzl/omEZeMhDl/onwjlrUBqKV4/0gDLaKrESyUh1aLVXIeENCYcgbAjcbpSNYYoMrHDCNkwjMmd0AZMAIoc4H7jsctZtpKy0DCdhBCgELyUtsI4CpJp0xE39t3LlkpIAmMPSJ5gPRTN+yg6YCLbfNocluUZeUOJwhKqWoFrQfRUDsggXM09RqwHWQI0lpU6MD1EGKGoSanPrzjQTgYNDa/uUjfKRSVjv61SjzJzU9VjiXqwtUDsgvuXbtXIS0KEP7xalfrLqvXn2QtDY2ZsJr6LHPoY7+o+/rMdMYSSYrrUEMrDUUIIPTvEalzKc0nMaHiPxGh7DvhApWMjmojIRjKvT4mNE9J7zG6HgftRyQeB+1AkJW4eVf2z96C786mBC8D5V/aO/6VdYL8/y0B1v874q/5SL+ZpxsiGiSwjTMzz3ZlKL1KCD1noizwPziigrxmmda7Q1c3mtTqMxivcqLDhGVhu4zM2NWNCa+iDmMuPRuh2t1TpbGZKWoG/KjA5MrL6SkVBBypEnc8rya8XNezdBLgoKRRAeTbyqukslap5M1OJUdg3J4tapOVcJ3Vc74PtgL9NpPO89VOOmVd2LoqVPhFdXvL5Oe1MueadUxc+5hX60EXyezQl44F815VRwJaXLf4NCsVFt0irfliPlLP7D/AH0/ARadIrf5XrIW+bMNKunaxRl+60TPYqJ2Tzln/E92UF9IDNjmrLYcJle+DYL1+EWSsdrcpzn6X8h/GLG+Swf2Jv8AFfxCxXm1uc+YOFT3rQeJEWl8n1lMuxJUZuWb3L/LE0QSRkdRkI3MN7YvN6odQyt84gooQkNixNuTCMq9JJAHbAZiwrGxHJrWOgYYK4xGAwlWNhooic5jup2xWG2u1Jms0iS1Jakh2H/MIyI9gePVSCnbu9zIs5VTR5pKKRqFpz2HZl1sIqeWu+CBpU4wo+g6viY7lSmdgqipOg00FSSTkAACSdwEHuw1xWd0ebMCzWWYEUkHABgRiQjAZ4mYVI9HKkFujAcixzZgLS5buBqVRmA6yBQRuZYZqiplOBxwGneMouPaZ6WKeoyHJsO8UgCuSbyV2WqcQMbuqIaCo80VU7iMTGv0YWxYEAY5ZYPtnNmltllaZPZg7NSW4piAUUJb1wWqKHPm5EQJX3dEyyzDLmDPVWHmsvrL+G6HuFo/2W2jazMJbkmSTmNcBPpL0cR8Ys6odQykbmVhmMxkekEHuMUiwg9+T+9iyNZ2OaDEns15y9hI7+iCwhhy6ek1DvBIyjI3gB1HgIyEY1rGVjXdGiIz2ApeI8q+fpH3wXYjAZep8o4zPOgvAh2h2z0BPDOPO1xMWnJU1JYV6fJOT749DOtQRxFO+PO1wGk+X7RH/t4fjDwKi26F5sofQHuibbWIO6nGGUSfQX3RMGctfOHfGhAnaYUnMfZ+8sLbCzf+I2b7PYJcxR4UhLan9o31fvCN/J8tbws1M6Mx7kmmJpr7AEDm3t2mfYpgQVeXSamWdU5xA6SuIU6Yny59XvNPdWELVMcKTVFFDVnrQDju+ERs1L7KW1eUmAZB6MBwOpXxIHsxYDzlWXjZgFAqSdwgTvDZlZczlLLNRgdVeuBz6RUqSQCc6DMVyIiMvG2Wl1Ep1lS1GuFnNekmYWPcR01iiRyYrXbAoBrNmUAoTQFqqDTSgUEngGO6L+s0hZaLLWmFFCjqApAP8mlilpywTnvSWzPSpr5QZcNT4welSP8AaFabeXERqo4iOWem+OHYb+6J2CpI/OkNrTmrammeQO7hCoBOunD8Y6Ir1Q9gKWi9wox4C6aY0IIBBzDDLCYQTaSzk0LlTwZG94FIdbT3SwraLLVZo89VFVmr9NPSI4jOkClmtNknthmy+Sm6EY3VWP0SCAD0EA9cLv4bYft2f3b/AIFtlvOTNOGXMRmpXCrAtTjTWmcOHI3RF2ORKlCktAvGgzPWTme2HXKxUqMpN9elZ/KLa8dr5OuUtFWn0m5x8CvdA0chD/aSbjts4/8AcI+xzf5YYGLiE9s81lTK1YgJykBk9BQ2FS2+hZW3HzVrlDuw3fa7PS12Y45TFgaVY4FdlUzEAzBABy0ruibtVyyGu+S5lAzmlyklsCQWeYAFxUyYAmuY0BjUvZS1WVi1itCsGIxK9RWnEZq3hC2o5m3ytssM/kxR1Qh0rWh1yI84GhoYGplpWZZLLZZRDzGZi6jPCaELiG6mOv1OiCCx3Ta5dpe1TRLRXUKyoeaSQoBIoBqC1Sa7t8NpvJ2KXNnWeUpmVC4icQQEnnCjNRa0yqM8iBhhDYxsclJEpJdQFRQtSaaDUk8Tn2wM7Y26x2mVyYnK04Gsopzhi0wllyAbTXWnCB82Gzzgsy03nVmUMVw1KEipWlSARWmQGkal2W6pZqLVOdhmMKkCozB8zj0wTHsWhCJDZ618lapT7sQVvZbmn317Ib3gtJrilKOw7mMNWi0LwjIaSJmJVb1lU94BjUIx5U/n/aNV6BAtO27sg80O/UoH3iIYTvlDl+hIJ9qYF9wMZ8MvsW4eXq3lX6z8ILQxgGFs5YCaRTGoagzArTfviNG39pOiSuoK5/niuFotkWZnFD2uyGTejSzlhnMR7Lgsn8JEHNkv68Z/7NUQcWllR3vWBPbCyWqVPl2q0MjFiFxoVI5tciFApzSaezBMdDezrZ+eeTkkEjm0NDTTLdBO9ofTG1PaMAez1pwqZZPmPUdVaHxgutVsSXLMxjkBpvY8B0xRAvadwZzDhT3Yj92E9kb0Wy2hZrBSApXnFgFLrXGcIJNK0+tDGcZk2YxVSzsHdgudBQl+wLl2xbeyexkuXZlE9Byrgs+tRj9A50NFoCKa1hbnyDM7aTGNJa1/w5ZJ/jJr3RG3leNrn0DyphQHIOuEV4miosFkm7ZchhLmgvKJpLmOclJ0lPT+Fjroc9ZhLlswNRZ5dRoTLUkdRIJEHLGfA1fuqoXdNc0WQWPCW6uR1hWJHaImbv2JnNR3lqv0HmCvQSFUjp1iyFlhcgAB0AD3RtjT8KRNzEgZuy6rZImI6OMKsCV5QlSNGBWgrlWCabMZyWLdoAp2cY5bix7B+czGZnWo6Im3anKADJczvJz747VAN+ZjSkaAACN4gOuEHfXGQnjHbGYuJgDsnuiPvK6JFoFJspH6SKMOphmO+HNotSIKvMVF4uwXxNIhbbtdY5YPlgxAyCKz16AVFK9sVA0NnZUlSVmzFRR5rsHVQN4LDEOqsCNo2qkpMwBXKVHlDSlD6VBU039UbPyk1JVrPhB9c1Fd9RTrp0wz2jWy2teWkzUWco56MRL5QDeA9AHXhvAG+HJ9z7KvsOrNMtHKLMLF3RKYUYtiZkLV84YgVOhoNxEV8ykGh1BoR0xZOx9vfkTKKzXKtRBLQtzaVw4zRFXFWhZhrlArtndjyZ5dpaos4s6qr4wufOQtQc7eR9LImHL3oaEWzt5SzJlTbRMVJdlUy5a1qzzAtC+EZkhGCgU3seEbn37Pt002exlkl4as4BxDOlGY5IPZqcsiYBLI6nybkqpIOIZlGHpAbwRUHsO6Ca876CILFYUZcRAeZSkyazerprXXfoKDMlgh9d9gX9IS5SWiZPCy25dnNVagIKqa5riK11oQMydOhetolTLTNkLLazSHKTJfpEAhcVaYiRmakkU3ZGCfZi5BZZfOzmuByja6DJAfVHvgVkzls16TZLgcnaeaQdPKVZa9GJivbBsaTVmuOwWyWs9ZIGPUKzLhYaqQhAqP6w3tWxdhRWZldVUEkhzkAKnzq7ogbovBrutkyTNJ5JmAJJ0BHk5g+rQN28Id7c7QDCbPLYEt+0IPmrrgrxO/o64Oz3AFapuN2elMTM1OGIk08YQaFVUsQACSSAABUknIAAamJFtnLZ/0k/8Ay3/CLSPLmtP9nlV/dp90RkA6XbbwKCVagBoBLm0HVlGQjFv6Ckc8ohegNByh5pGlADiIyPnAaGoAjVquiUlSZZVdAWJc4qsDniYU/DLURYKWKXMp/Z1y0LqwpppmeA7ob2mTZZecx7OmYOYwmoJIOb5mpO7fGWsr8tuWE+EHIUIihQAADkNAK5DuiHWwrL5zmYK+s1UZjmpFagajKgpvrE3a5qFqyyCjZqQKAjLTohS03jIUf3QCn71hLJ31zY1PSeiKuOVnSMM8ZbtFGa4wy5WOr1wjC2HXMeaMOeeZGXXEparnlvZiLTMVSy5osyvP3HESQW0OWVSYZDaaXKU8nKlS61yVFmVO6rLMy7oH7feYnOXmMSx0qMl6FFchBj47Cz8svokl0mQx5iT1A5pxvKem5Ww1VhTfSvSBSI68bXOmnDyaS1GQUMSB0ksWZj4dEPHnKf8AmN3f1hxZrmMyjlHZDnXk3ow6CNRF2Mtpn5OrGkudiyLsjivZWg7c4s/EBqYriwPNszAykCEcJIBPEE4K0PXFlm8jNlphTCGVSQwzBIBIHCM7FG80IylWCsrChBoQQdQREarTJGS1myhotQZkscAT+0UcCcQ6Ykyx45xyzU1NTwA+ESCFlvFJteTcGnnDRl30ZDRlPWIWEzcvaYbWm70m0MxBiGjDJ19lxzl7DCX6OdaCVPmKOD4Jg73XGT9aAH6JTViTxy/CMap3kfZ8aiGPza0DSelemTX/AOyOTZLQfOtKj2ZNPvMYNA6tNqWWuJ5gVeLYRU7gABmeqIa8dpRLWoQKDo9oYSEPUGrMbsQw4nXBylOVnTnoagYklgdXJqpHfCVsuiXLXyNnl4iecxQMw+kSaknrg6Ac/WefODcjPUg+lLl1puIAwzJjdstK8d8JyrLMehnzrXOrqC6WSWK7iGcP3LEtPQ0o7Mabjnn0Lu7ITm3PNC8oqyiRQqs1iqKNatQHd+RFnrRneFgaXLV5diszGtFVUe1Ow4tMcLQ9POivZk9g5LIlQ2amWtK1zUrTLPKkWRYdppjTmsdrlrKbzQUqOqhJ0pQimoFNaRH7YbP8qyzFZVnE4ZgzCzBSqzBQGjUpXWoodaxUuvZewjOs0uacUsKtQcSYsOAigqh3g1yB4GvSS7Fz7JLlnlVGNXPPaWWLBWOE1INKimkQ8vZibQh3UCvolj16r1Q4l7PMB+000FTlCs2qLKl35JfzZiADc1V6dDSIXaC22O2yXlTJqChqrgNVHAyZQRnrQ56VEBky5HOQmDpPO8MoSe55qiisvQAWhaHQXtchpTlGoaHIrmGG5lPAw9ui92kOrhVfDUKHGag64W1XxGuUPp1wzSM8JrqS3uroIYts9PGiA/XT8YshrZdvJRHPDoekBx2Fc/AQO7W3lJtMyXNlzCCqYW5jA5MSpWtBXM51GgiHNzWgZcmexlPuaOGuu0fum7KH3GFJBs8vi+2nursi41ULjI5xpnWlSAa1O+lcqRCu8OTd0792/dGC7pv7t/smGQv+T6w2ZHFonzkEwfs0J806Y23V4DdrwpZ0u0pM8x8Q4qQR1axQfzOaPQfuMLymtCVwmYtdaFhXrpE2bOVfePpMZFBcvO9Z/GNwuJ7E02+bS5q8x3+iW5v2ahfCE0mWv0FwV3pycsntSh8Y1GR12RjBTYbstjIhmSmqAKlnRieJJxkmGkjZVSaAs7VzAdZefbLYeMZGRzy3s7EkmxrbpEodMyZMbwlkCJCy7InIkyBTclnRu5phLDrjIyFyp8YlZWztmBxtKV3y5zjFpwU80dgiXGQoBQDhujUZEWqdRzUnTIRkZEgliNSF7SfzrG1QLnU1OpqfhGRkBlMJO+kcljuPhGRkBOsVIyldT3RkZAGqE6E98aNR+R+EZGQ4AJtntc8qZyUimNc3dlBoPVUMIY7N7XzJswyrRRgwJFFAOQqcxoQMx2jfUZGRrqcSPtqbnEyTVc3lgNKmDmth1Es6c2ma6YDkMomLnu4zpMuZPLGZhWtCBoCCcst+kZGRC4fLccutat0VOnhHL3Gm5iONc/wjIyAiLXCKZOO1P/1CQ2dbeVr2xkZAHH6vMfSSn1o4mbPuNCh7x8IyMgDj9XZg0wfaP+mETcEw+iuX0/HzY1GQzJzLgnZDkxnwZf6Qk+z0793/ABJ+MZGQgbm4ZhzwHvT/AFQ1nXO4NCpBOfo6djRqMglIn+iW4H+H8YyMjIo3/9k="
              }
              text={
                "Recently, California Governor Gavin Newsom passed a bill that aims to make California a 100% EV state by 2030. Researchers have estimated that by that date, California may have over 5.4 million domestic EVs (as well as a couple hundred thousand heavier vehicles). Currently, we do not have the infrastructure to charge that many vehicles. Our solution is straightforward- we want to help reduce the amount of charging stations the Californian government has to build by outsourcing private charging stations to the public via an app. The app would allow EV owners to search for charging stations (public or private) that fit their vehicle's model similar to how Google Maps works now. On the app, drivers may pay to unlock a person's private (at-home) charging station and fully charge their vehicle. "
              }
              url1={
                "https://docs.google.com/presentation/d/1ZL9UQtw2rGnE144ZDfEuaTJelkqS-V47FCaSaTBcnzI/edit?usp=sharing"
              }
              url2={
                "https://docs.google.com/document/d/1P8Y3zAC-_z67PM4EMe6LFAf-Qpe-EfAg8l11zB3elAk/edit?usp=sharing"
              }
            />
          </Row>
        </Container>
      </div>
      <Contact />
    </div>
  );
}
