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
      <Navbar.Content activeColor="secondary" hideIn="xs" variant="underline">
        <Spacer x={-38.5} />
        <Link href={"/resources"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/resources"}>
            Resources
          </Navbar.Link>
        </Link>
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
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
              $$dropdownItemHeight: "30px",
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
            <Dropdown.Item
              key="autoscaling"
              icon={icons.user}
              //showFullDescription
              //description="Here you could see the projects that I have completed over the year. Click on the words 'completed projects' to get there"
            >
              <Link href={"/cp"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/cp"}>
                  Completed Projects
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              key="usage_metrics"
              icon={icons.server}
              //showFullDescription
              //description="Here you could see the projects that I'm currently working on. Click on the words 'Work in Progress' to get there"
            >
              <Link href={"/wip"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/wip"}>
                  Works in Progress
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              key="99_uptime"
              icon={icons.flash}
              //showFullDescription
              //description="Here you could see the process writing for my projects. Click on the words 'Process Writing' to get there"
            >
              <Link href={"/pw"} passHref legacyBehavior>
                <Navbar.Link isActive={router.pathname == "/pw"}>
                  Process Writing
                </Navbar.Link>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href={"/blog"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/blog"}>Blog</Navbar.Link>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}
