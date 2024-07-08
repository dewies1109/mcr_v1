import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import K1 from '../../public/assets/k-1.png';
import K2 from '../../public/assets/k-2.png';
import K3 from '../../public/assets/k-3.png';
import K4 from '../../public/assets/k-4.png';
import K5 from '../../public/assets/k-5.png';
import K6 from '../../public/assets/k-6.png';
import K7 from '../../public/assets/k-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriBengkalis () {
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
                        <span>Berita Bengkalis</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                <Link  href='/berita'>
                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={K1} alt="K1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    Resmikan SMK 5 Mandau, Gubri: Biaya Gratis Jangan Ada Lagi Anak Tidak Sekolah
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Rabu, 21 Juni 2023 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K2} alt="K2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Pemprov Riau Gerak Cepat Lakukan Pemeliharaan Jalan Sontang - Duri
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 20 Juni 2023 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K3} alt="K3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Keren! Puluhan Miniatur Perahu Warna-warni Berlayar di Pantai Lapin Bengkalis
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 18 Juni 2023 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K4} alt="K4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                10 Hektar Lahan di Giam Siak Kecil Terbakar, Tim Gabungan Gerak Cepat Memadami
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Sabtu, 16 Juni 2023 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K5} alt="K5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Polres Bengkalis Gagalkan Penyelundupan 28 Pekerja Migran Ilegal ke Malaysia
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 15 Juni 2023 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K6} alt="K6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                UIN Suska Riau Gelar Sosialisasi PMB Pascasarjana Untuk ASN Kemenag Bengkalis
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Kamis, 13 Juni 2023 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={K7} alt="K7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                SMKN 1 Rupat Jadi Percontohan Penanaman Kelapa Pandan Wangi dan Talas Ungu
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 15 Juni 2023 | 15:03:37
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