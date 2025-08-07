import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";
import MKStudioLogo from "../../assets/image/logo2.jpg";

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <Image
        src={MKStudioLogo}
        alt="Logo MK Studio Auto Detailing"
        width={100}
        height={70}
      />
    </Link>
  </div>
);

export default Logo;
