/* eslint-disable @next/next/no-img-element */
import styles from "@/pages/index.module.css";

export default function Home() {
    return (
        // <div className="h-[100svh] bg-[url('/images/home-bg.jpg')] bg-cover">
        //     <div className="h-full brightness-75">
        //         <p className="opacity-100">
        //             TEST
        //         </p>
        //     </div>
        // </div>
        // <div class="relative h-[100svh] max-h-[100svh]">
        //     <div class="absolute inset-0 bg-black opacity-70"></div>
        //     <img
        //         class="w-full h-full object-cover"
        //         src="/images/home-bg-small.jpg"
        //         alt="Background image"
        //     />
        //     <div class="absolute">123</div>
        // </div>

        // <div class="relative h-[100svh]">
        //     <img
        //         class="w-full h-full object-cover"
        //         src="/images/home-bg.jpg"
        //         alt="Home BG"
        //     />
        //     <div class="absolute inset-0 backdrop-filter backdrop-brightness-[.40]">
        //         <div className="pt-[170px] backdrop-brightness-95">
        //             <h1 class="text-white font-major-mono text-[84px]">
        //                 Dev-in.tw
        //             </h1>
        //         </div>
        //     </div>
        // </div>
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
