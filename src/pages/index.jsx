import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/index.module.css";

export default function Home() {
    const [validInput, setValidInput] = useState(true);

    return (
        <div className={styles["background-image"] + " h-[100svh]"}>
            <div className={styles.content + " h-full"}>
                <div className="h-[calc(100%-80px)] pt-[170px]">
                    <div className="flex flex-col w-[52%] h-full mx-auto my-auto align-middle">
                        <div className="my-auto text-center">
                            <h1 className="text-[84px] text-center text-white font-major-mono font-bold">
                                Dev-in.tw
                            </h1>
                            <div className="pt-[60px] text-center items-center w-full">
                                <form
                                    className={joinClasses("w-full border-t-[5px] p-[1.3rem] h-[70px]", styles.form)}
                                >
                                    <input
                                        placeholder="搜尋可用子網域"
                                        className={joinClasses("focus:outline-none bg-transparent flex-1", (validInput ? "text-white" : "text-red-500"), styles.input)}
                                        onInput={checkInputOnInput}
                                    />
                                    <p className="text-gray-400 font-[400] text-[18px] font-roboto flex-none ml-[10px]">
                                        .dev-in.tw
                                    </p>
                                    <Image width={30} height={30} src="/icons/SearchEye.svg" alt="SearchEye" className="flex-none ml-[20px]" />
                                    {/* The search image have to be changed to svg format */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={joinClasses(styles.scroll, "h-[80px]")}>123</div>
            </div>
        </div>
    );

    /* 
    Input is valid when matching all the following two state:
        - Only contain English alphabet, Numbers, and Hyphen
        - Length is less then 64 (max 63)

    Note: Input will be also valid if it is empty.
    */
    function checkInputOnInput(inputEvent) {
        const inputValue = inputEvent.target.value;

        if (inputValue.match(/[a-zA-Z0-9-]+/gu)) {
            if (inputValue.match(/[a-zA-Z0-9-]+/gu)[0] === inputValue && inputValue.length <= 63) {
                console.log("Valid input");
                setValidInput(true);
                return;
            }
        }
        else if (inputValue === "") {
            console.log("Valid input (Empty)");
            setValidInput(true);
            return;
        }
        console.warn("Invalid input value");
        setValidInput(false);
    }
}

function joinClasses(...classes) {
    return [...classes].join(" ");
}