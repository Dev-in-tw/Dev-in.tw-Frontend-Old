/* eslint-disable @next/next/no-img-element */
import styles from "@/pages/index.module.css";

export default function Home() {
    return (
        <div className={styles["background-image"] + " h-[100svh]"}>
            <div className={styles.content + " h-full"}>
                <div className="h-[calc(100%-80px)] pt-[170px]">
                    <div className="flex flex-col w-1/2 h-full mx-auto my-auto align-middle">
                        <div className="my-auto text-center">
                            <h1 className="text-[84px] text-center text-white font-major-mono font-bold">
                                Dev-in.tw
                            </h1>
                            <div className="pt-[60px] text-center items-center w-full">
                                <form
                                    className={
                                        "w-full border-t-[5px] px-[25px] py-[20px] h-[70px] flex " +
                                        styles.form
                                    }
                                >
                                    <input
                                        placeholder="搜尋可用子網域"
                                        className={
                                            "text-white focus:outline-none bg-transparent flex-1 " +
                                            styles.input
                                        }
                                    ></input>
                                    <p className="text-white opacity-40 font-[400] text-[18px] font-roboto flex-none">
                                        .dev-in.tw
                                    </p>
                                    <img
                                        src="/icons/SearchEye.svg"
                                        width="30px"
                                        height="30px"
                                        alt="SearchEye"
                                        className="flex-none ml-[20px]"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.scroll + " h-[80px]"}>123</div>
            </div>
        </div>
    );
}
