import MainLogo from "@/components/MainLogo";
import { auth } from "@/pages/_app";
import FeedItem from "@/types/FeedItem";
import User from "@/types/User";
import { useCollection, useDocument } from "@nandorojo/swr-firestore";
import {
  Avatar,
  Button,
  Dropdown,
  Input,
  Loading,
  Modal,
  Navbar,
  Row,
  Spacer,
  Text,
  useInput,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { MdEmail, MdLock } from "react-icons/md";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { icons } from "./Icons.js";

export default function MainNavbar() {
  const router = useRouter();
  // For Popup
  const [profileVisible, setProfileVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    setProfileVisible(false);
    console.log("closed");
  };
  const [user] = useAuthState(auth);

  function signOut() {
    auth.signOut();
  }
  const {
    data: userData,
    update: updateUserData,
    error: userDataError,
  } = useDocument<User>(`users/${auth.currentUser?.uid}`);

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn={"xs"} aria-label="toggle navigation" />
        <Link href={"/"} passHref legacyBehavior>
          <Row align="center">
            <MainLogo size={48} />
            <Spacer x={0.33} />
            <Text b color="inherit" hideIn="xs">
              Benjamin Telanoff PLTW 2023-2024
            </Text>
          </Row>
        </Link>
      </Navbar.Brand>
      <Spacer x={-42.5} />
      <Navbar.Content
        enableCursorHighlight
        activeColor={"primary"}
        variant={"highlight"}
      >
        <Link href={"/Resource"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/Resource"}>
            Resource
          </Navbar.Link>
        </Link>
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: "$10",
                py: "$1",
                dflex: "center",
                svg: { pe: "none" },
              }}
              iconRight={icons.chevron}
              ripple={false}
            >
              Projects
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            css={{
              $$dropdownMenuWidth: "100px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item left icon
                svg: {
                  color: "$secondary",
                  mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item key="autoscaling">
              <Link href={"/completed"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/completed"}>
                  Completed Projects
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="autoscaling">
              <Link href={"/workinprogress"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/workinprogress"}>
                  Work in Progress
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item key="autoscaling">
              <Link href={"/writing"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/writing"}>
                  Process Writting
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href={"/Projects"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/Projects"}>
            Projects
          </Navbar.Link>
        </Link>
        <Link href={"/Blog"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/Blog"}>Blog</Navbar.Link>
        </Link>
      </Navbar.Content>
      <Navbar.Brand />
    </Navbar>
  );
}
