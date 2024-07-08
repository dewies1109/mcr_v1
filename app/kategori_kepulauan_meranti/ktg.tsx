import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import KM1 from '../../public/assets/km-1.png';
import KM2 from '../../public/assets/km-2.png';
import KM3 from '../../public/assets/km-3.png';
import KM4 from '../../public/assets/km-4.png';
import KM5 from '../../public/assets/km-5.png';
import KM6 from '../../public/assets/km-6.png';
import KM7 from '../../public/assets/km-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriKepulauanMeranti () {
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
            <div className='bg-white mt-8 pt-4 rounded-md bg-contain mx-10 px-4'>
                <div className="text-black/90 font-bold text-xl w-full">
                    <div className="flex items-center">
                        <span>Berita Kepulauan Meranti</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={KM1} alt="KM1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    Arus Balik di Pelabuhan Tanjung Harapan Selatpanjang Padat
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Selasa, 16 April 2024 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>

                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM2} alt="KM2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Jembatan Panglima Sampul Ambruk, Pembangunan Jalur Alternatif di Sungai Perumbi Digesa
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 24 Mei 2024 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM3} alt="KM3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Bawa Kayu Ilegal 70 Ton, Nakhoda Kapal di Meranti Ditangkap Polisi
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Sabtu, 15 Juni 2024 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM4} alt="KM4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Ruko Penyimpanan BBM Pertalite dan Gas Elpiji di Meranti Terbakar
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 28 Juni 2024 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM5} alt="KM5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Ada 60 Kapal yang Beroperasi, Kempang di Meranti akan Disesuaikan dengan Regulasi
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 2 Juli 2024 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM6} alt="KM6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Nelayan di Kepulauan Meranti Hilang Saat Cari Ikan
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 19 Maret 2024 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KM7} alt="KM7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Kapolres Meranti: Tim Gabungan Masih Berjibaku Padamkan Karhutla
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Senin, 25 Maret 2024 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />
            </div>

            <Image src={Page} alt="Page" className="w-full px-14 my-12" />
        </div>
    )
} 