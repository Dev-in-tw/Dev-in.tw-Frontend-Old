/* eslint-disable @next/next/no-img-element */
import Logo from "../icons/Logo";
import { useRouter } from "next/router";
import styles from "@/components/navbar/index.module.css";
import btnstyles from "@/components/navbar/btn.module.css";

export default function Navbar() {
    const router = useRouter();
    return (
        <div className={styles.main + " logo select-none z-[999999999999999]"}>
            <button
                className={styles.logo}
                onClick={() => {
                    router.push("/");
                }}
            >
                <Logo />
            </button>
            <div className={styles.frame}>
                <div className={btnstyles.signInButton}>
                    <p className={btnstyles.signInButtonText}>登入 / 註冊</p>
                </div>
                <div className={btnstyles.plusButton}>
                    <svg
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className={btnstyles.plusIcon}
                    >
                        <g mask="url(#mask0_21_345)">
                            <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}
