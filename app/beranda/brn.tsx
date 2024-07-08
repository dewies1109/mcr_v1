import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import Brn from '../../public/assets/brn.png';
import Brt2 from '../../public/assets/brt2.png';
import Brt3 from '../../public/assets/brt3.png';
import Brt4 from '../../public/assets/brt4.png';
import Brt5 from '../../public/assets/brt5.png';
import Brt1 from '../../public/assets/brt1.png';
import Page from '../../public/assets/page.png';


export function Beranda () {
    return (
        <div className="font-sans" style={{ 
            backgroundImage: `url(${BgLeft.src})`, 
            backgroundSize: 'auto 350px', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'left 0rem', 
            width: '100%', 
            height: 'auto', 
            display: 'flex', 
            flexDirection: 'column' 
        }}>
            <div className='mt-12 px-10'>
                <Image src={Brn} alt="Brn" className="w-full" />
            </div>

            <div className="text-black/90 font-bold text-xl w-full px-14 mt-12">
                <div className="flex items-center">
                    <span>Berita Terbaru</span>
                    <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                </div>
            </div>

            <div className='mt-8 px-14'>
                <div className='flex'>
                    <div className='flex-none'>
                        <Image src={Brt1} alt="Brt1" className="w-52" />
                    </div>
                    <div className='ml-6'>
                        <div className='text-lg font-semibold hover:underline'>
                            Penuhi Kebutuhan Siswa Masuk Sekolah Negeri, Gubri Syamsuar Resmikan SMK Negeri 1 Tempuling
                        </div>
                        <div className='mt-2 text-xs font-normal'>
                            Rabu, 21 Juni 2023 | 12:09:03
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 mx-14 " />

            <div className='mt-8 px-14'>
                <div className='flex'>
                    <div className='flex-none'>
                        <Image src={Brt2} alt="Brt2" className="w-52" />
                    </div>
                    <div className='ml-6'>
                        <div className='text-lg font-semibold hover:underline'>
                            Dubes Swiss Audiensi dengan Gubernur Syamsuar, Ini Tujuannya
                        </div>
                        <div className='mt-2 text-xs font-normal'>
                            Selasa, 20 Juni 2023 | 20:25:19
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 mx-14 " />

            <div className='mt-8 px-14'>
                <div className='flex'>
                    <div className='flex-none'>
                        <Image src={Brt3} alt="Brt3" className="w-52" />
                    </div>
                    <div className='ml-6'>
                        <div className='text-lg font-semibold hover:underline'>
                            Gubernur Syamsuar Perjuangkan Tenaga Honorer di Riau
                        </div>
                        <div className='mt-2 text-xs font-normal'>
                            Selasa, 18 Juni 2023 | 17:14:06
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 mx-14 " />

            <div className='mt-8 px-14'>
                <div className='flex'>
                    <div className='flex-none'>
                        <Image src={Brt4} alt="Brt4" className="w-52" />
                    </div>
                    <div className='ml-6'>
                        <div className='text-lg font-semibold hover:underline'>
                            Blok Pengendali Narkoba Lapas Kelas II A Pekanbaru Dirazia, Hasilnya Bikin Kaget
                        </div>
                        <div className='mt-2 text-xs font-normal'>
                            Sabtu, 16 Juni 2023 | 17:21:11
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 mx-14 " />

            <div className='mt-8 px-14'>
                <div className='flex'>
                    <div className='flex-none'>
                        <Image src={Brt5} alt="Brt5" className="w-52" />
                    </div>
                    <div className='ml-6'>
                        <div className='text-lg font-semibold hover:underline'>
                            Riau Peringkat 2 Nasional Realisasi PMDN Triwulan II 2023
                        </div>
                        <div className='mt-2 text-xs font-normal'>
                            Jumat, 15 Juni 2023 | 15:03:37
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 mx-14 " />

            <Image src={Page} alt="Page" className="w-full px-14 my-12" />
        </div>
    )
} 