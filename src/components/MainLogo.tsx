import { Image } from "@nextui-org/react";
interface MainLogoProps {
  size: number;
}
export default function MainLogo(props: MainLogoProps) {
  return (
    <Image
      width={props.size}
      height={props.size}
      src="fYIB37N3_400x400.svg"
      alt="Main Logo"
    />
  );
}
