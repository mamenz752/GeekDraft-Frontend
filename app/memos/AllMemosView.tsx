import MemoBlock from "../components/memos/MemoBlock";
import WideButton from "../components/common/WideButton";

const AllMemosView = () => {
    return (
        <main className="absolute top-24 left-[22%] right-[22%] scroll-mt-24">
            <h1 className="my-4 font-bold text-2xl tracking-wider">アイデア一覧</h1>
            <div className="flex flex-col gap-6">
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
                <MemoBlock />
            </div>
            <div className="fixed right-[20%] bottom-10">
                <WideButton />
            </div>
        </main>
    )
}

export default AllMemosView;