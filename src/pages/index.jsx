import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/index.module.css";

export default function Home() {
    const [validInputSyntax, setValidInputSyntax] = useState(true);
    const [validInputLength, setValidInputLength] = useState(true);
    const [emptyInput, setEmptyInput] = useState(true);

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
                                        className={joinClasses("focus:outline-none bg-transparent flex-1", (emptyInput || (validInputSyntax && validInputLength) ? "text-white" : "text-red-500"), styles.input)}
                                        onInput={checkInputOnInput}
                                        onKeyDown={(event) => {
                                            if (!emptyInput && (validInputSyntax && validInputLength)) return;
                                            event.key === "Enter" ? event.preventDefault() : "";
                                        }}
                                    />
                                    <p className="text-gray-400 font-[400] text-[18px] font-roboto flex-none ml-[10px]">
                                        .dev-in.tw
                                    </p>
                                    {
                                        !emptyInput && (validInputSyntax && validInputLength) ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-none ml-[20px] w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-none ml-[20px] w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )
                                    }
                                </form>
                                <div className={styles.checkList}>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" name="syntax" checked={validInputSyntax && !emptyInput} readOnly />
                                        Only contain English alphabet, Numbers, and Hyphen
                                    </label>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" name="length" checked={validInputLength && !emptyInput} readOnly />
                                        Maximum length: 63 characters
                                    </label>
                                </div>
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
            setEmptyInput(false);

            // The following state needs to be improved (can't start or ends with Hyphen?)
            if (inputValue.match(/[a-zA-Z0-9-]+/gu)[0] === inputValue) {
                console.log("Valid input");
                setValidInputSyntax(true);
            }
            else {
                setValidInputSyntax(false);
            }

            if (inputValue.length <= 63) {
                setValidInputLength(true);
            }
            else {
                setValidInputLength(false);
            }
            return;
        }
        else if (inputValue === "") {
            console.log("Valid input (Empty)");
            setEmptyInput(true);
            setValidInputSyntax(false);
            setValidInputLength(false);
            return;
        }
        console.warn("Invalid input value");
        setEmptyInput(false);
        setValidInputSyntax(false);
        setValidInputLength(false);
    }
}

function joinClasses(...classes) {
    return [...classes].join(" ");
}