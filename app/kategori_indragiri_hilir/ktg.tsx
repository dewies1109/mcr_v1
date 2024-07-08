import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import KIHI1 from '../../public/assets/kihi-1.png';
import KIHI2 from '../../public/assets/kihi-2.png';
import KIHI3 from '../../public/assets/kihi-3.png';
import KIHI4 from '../../public/assets/kihi-4.png';
import KIHI5 from '../../public/assets/kihi-5.png';
import KIHI6 from '../../public/assets/kihi-6.png';
import KIHI7 from '../../public/assets/kihi-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriIndragiriHilir () {
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
                        <span>Berita Indragiri Hilir</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                
                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={KIHI1} alt="KIHI1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    PLN Masuk Dusun Terpencil, Anak-anak di Inhil Kini Bisa Mengaji Malam Hari
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Sabtu, 15 Juni 2024 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>
              
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI2} alt="KIHI2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Anak Terjatuh di Sungai Indragiri Ditemukan Meninggal Dunia
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Minggu, 17 Maret 2024 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI3} alt="KIHI3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Ditaja KKIH, Belasan Warga Inhil Dapatkan Tabungan Haji
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 26 Maret 2024 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI4} alt="KIHI4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Rahmad Tewas Diterkam Harimau saat Bekerja di Hutan Tanaman Industri
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 10 Mei 2024 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI5} alt="KIHI5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Pemkab Inhil dan Petani Sepakat Inhil Tidak Jual Gabah ke Daerah Lain
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Sabtu, 11 Mei 2024 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI6} alt="KIHI6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Menyala! 4 Dusun Terpencil di Indragiri Hilir Riau Kini Bisa Menikmati Listrik
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Kamis, 23 Mei 2024 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHI7} alt="KIHI7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                PLN Klaim PLTU Tembilahan Terangi 87 Juta Rumah
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Kamis, 23 Mei 2024 | 15:03:37
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