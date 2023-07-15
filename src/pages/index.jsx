/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/index.module.css";
import ArrowDown from "@/components/icons/ArrowDown";
import SearchEye from "@/components/icons/SearchEye";

export default function Home() {
    return (
        <div className={styles["background-image"] + " h-[100svh]"}>
            <div className={styles.content + " h-full"}>
                <div className="h-[calc(100%-80px)] pt-[90px]">
                    <div className="flex flex-col w-[52%] h-full mx-auto my-auto align-middle">
                        <div className="my-auto text-center">
                            <h1 className="text-[84px] text-center text-white font-major-mono font-bold">
                                Dev-in.tw
                            </h1>
                            <div className="pt-[60px] text-center items-center w-full">
                                <form
                                    className={joinClasses(
                                        "w-full border-t-[5px] p-[1.3rem] h-[70px]",
                                        styles.form
                                    )}
                                >
                                    <input
                                        placeholder="搜尋可用子網域"
                                        className={joinClasses(
                                            "focus:outline-none bg-transparent flex-1",
                                            styles.input
                                        )}
                                    />
                                    <p className="text-gray-400 font-[400] text-[18px] font-roboto flex-none ml-[10px]">
                                        .dev-in.tw
                                    </p>
                                    <div className="flex-none ml-[20px] hover:cursor-pointer">
                                        <SearchEye
                                            className={"h-[30px] w-[30px]"}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={joinClasses(
                        styles.scroll,
                        "h-[80px] hover:cursor-pointer"
                    )}
                >
                    <ArrowDown />
                </div>
            </div>
        </div>
    );
}

function joinClasses(...classes) {
    return [...classes].join(" ");
}
