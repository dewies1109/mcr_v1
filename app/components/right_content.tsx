import '@fontsource/poppins';
import Image from 'next/image';
import BgRight from '../../public/assets/bg_right.png';
import Yt1 from '../../public/assets/yt1.png';
import Yt2 from '../../public/assets/yt2.png';
import Link from 'next/link';

export function RightContent() {
    return (
        <div className="font-sans px-10 mt-12" style={{ 
            backgroundImage: `url(${BgRight.src})`, 
            backgroundSize: 'auto 493px', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'right 28rem', 
            width: '100%', 
            height: 'auto',
            display: 'flex', 
            flexDirection: 'column' 
        }}>
            <div className="text-black/90 font-semibold text-xl w-full">
                <div className="flex items-center">
                    <span>Kategori Berita Daerah</span>
                    <div className="flex-grow border-t-2 border-[#316D31] ml-4"></div>
                </div>
            </div>

            <div className='mt-6'>
                <Link href='/kategori_bengkalis'>
                    <button type="button" className="py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Bengkalis</button>
                </Link>
                <Link href='/kategori_dumai'>
                    <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Dumai</button>
                </Link>
                <Link href='/kategori_indragiri_hilir'>
                    <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Indragiri Hilir (Inhil)</button>
                </Link>
                <Link href='/kategori_indragiri_hulu'>
                    <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Indragiri Hulu (Inhu)</button>
                </Link>
                <Link href='/kategori_kampar'>
                    <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Kampar</button>
                </Link>
                <Link href='/kategori_kepulauan_meranti'>
                    <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Kepulauan Meranti</button>
                </Link>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Kuantan Singingi (Kuansing)</button>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Pekanbaru</button>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Pelalawan</button>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Rokan Hilir (Rohil)</button>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Rokan Hulu (Rohul)</button>
                <button type="button" className="mt-3.5 py-2 pl-4 text-left text-lg font-medium text-[#487D48] focus:outline-none bg-white rounded-md border-2 border-[#487D48] hover:bg-[#487D48] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#487D48]/10 active:bg-[#487D48] active:text-white active:ring-4  active:ring-[#487D48]/10 w-full">Siak</button>
            </div>

            <div className="text-black/90 font-bold text-xl w-full mt-48">
                <div className="flex items-center">
                    <span>Video</span>
                    <div className="flex-grow border-t-2 border-[#316D31] ml-4"></div>
                </div>
                <div className='mt-6 mb-12'>  
                    <Image src={Yt1} alt='Yt1' className='w-full'/>
                    <Image src={Yt2} alt='Yt2' className='w-full mt-3.5'/>
                </div>
            </div>
        </div>
    );
}
