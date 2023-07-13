import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="w-full pt-[170px] relative h-full bg-[url('/images/home-bg.jpg')] bg-cover">
                <div className="main h-[calc(100%-90px)]">
                    <div className="title">
                        <h1 className="text-center text-[120px] font-major-mono font-bold">
                            Dev-in.tw
                        </h1>
                    </div>
                    {/* <div className="w-3/4 mx-auto search">
                        <div className="h-[60px] border-2 border-white flex">
                            <form className="w-[calc(100%-90px)] h-full">
                                <input
                                    placeholder="搜尋子網域"
                                    className="w-full h-full pl-[10px] bg-transparent text-lg focus:outline-0"
                                />
                            </form>
                            <p className="text-white opacity-60 w-[90px] m-auto pr-[10px]">
                                .dev-in.tw
                            </p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="next h-[50px] mx-auto w-full border-t-2 border-[#1e1e1e] flex gap-[10px] pb-0 justify-center items-center self-center">
                    <Image
                        src="/icons/ArrowDown.svg"
                        height={50}
                        width={50}
                        alt="ArrowDown"
                    />
                    <span className="material-symbols-outlined">
                        keyboard_double_arrow_down
                    </span>
                    {/* <button className="w-full h-full">
                        <Image
                            src="/icons/ArrowDown.svg"
                            height={50}
                            width={50}
                            alt="ArrowDown"
                            className="w-full h-full m-auto"
                        />
                    </button>
                </div> */}
            </div>
        </>
    );
}
