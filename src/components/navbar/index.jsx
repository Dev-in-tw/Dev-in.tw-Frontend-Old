/* eslint-disable @next/next/no-img-element */
import styles from "@/components/navbar/index.module.css";

export default function Navbar() {
    return (
        <div className={styles.main + " logo"}>
            <div className={styles.logo}>
                <img src={"/images/logo.svg"} alt={"logo"} />
            </div>
            <div className={styles.frame}>
                <button
                    className={
                        "items-center justify-center w-24 h-10 gap-1 bg-black border border-white relative inline-flex"
                    }
                >
                    <p className="text-sm font-bold text-center">登入/註冊</p>
                    <div className="absolute bottom-0 left-0 border-8 border-transparent border-l-white border-b-white"></div>
                    <div className="absolute top-0 right-0 border-8 border-transparent border-r-white border-t-white"></div>
                    <div className="absolute top-0 right-0 border-[7px] border-transparent border-r-black border-t-black"></div>
                </button>
                <button
                    className={
                        "items-center justify-center w-10 h-10 gap-1 bg-black border border-white relative inline-flex"
                    }
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="mask0_21_345"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="30"
                            height="30"
                        >
                            <rect width="30" height="30" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_21_345)">
                            <path
                                d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"
                                fill="white"
                            />
                        </g>
                    </svg>
                    <div className="absolute top-0 right-0 border-8 border-transparent border-r-white border-t-white"></div>
                </button>
            </div>
        </div>
    );
}
