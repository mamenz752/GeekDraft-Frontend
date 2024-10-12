import { M_PLUS_1 } from 'next/font/google'
import ShareIcon from '../common/icons/ShareIcon';
import TrashIcon from '../common/icons/TrashIcon';

export const m_plus_1 = M_PLUS_1({
    subsets: ["latin"],
    weight: ['400', '700'],
    style: 'normal',
    display: 'swap'
})

const MemoBlock = () => {
    return (
        <div className="p-8 border border-geek-gray-20 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
                <p className={`${m_plus_1.className} tracking-widest text-geek-gray-60`}>更新日：20XX年YY月ZZ日</p>
                <div className="flex justify-between gap-8">
                    <ShareIcon />
                    <TrashIcon />
                </div>
            </div>
            <h2 className="mt-8 font-bold text-2xl tracking-wider">タイトル</h2>
            <ul className="mt-8 flex gap-4">
                <li className="inline-block py-3 px-6 bg-geek-orange-tag-gradient font-bold text-white tracking-widest rounded-md">タグタグ</li>
                <li className="inline-block py-3 px-6 bg-geek-orange-tag-gradient font-bold text-white tracking-widest rounded-md">タグタグ</li>
                <li className="inline-block py-3 px-6 bg-geek-orange-tag-gradient font-bold text-white tracking-widest rounded-md">タグタグ</li>
            </ul>
        </div>
    );
}

export default MemoBlock;
