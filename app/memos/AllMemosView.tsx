import Link from "next/link";
import MemoBlock from "../components/memos/MemoBlock";

const AllMemosView = () => {
    return (
        <main className="absolute top-24 left-[22%] right-[22%] scroll-mt-24">
            <h1 className="my-4 font-bold text-2xl tracking-wider">アイデア一覧</h1>
            <MemoBlock />
            <Link href={"/memos/new"}>
                <></>
                <p>アイデアをメモ</p>
            </Link>
        </main>
    )
}

export default AllMemosView;