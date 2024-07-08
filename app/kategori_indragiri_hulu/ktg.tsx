import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import KIHU1 from '../../public/assets/kihu-1.png';
import KIHU2 from '../../public/assets/kihu-2.png';
import KIHU3 from '../../public/assets/kihu-3.png';
import KIHU4 from '../../public/assets/kihu-4.png';
import KIHU5 from '../../public/assets/kihu-5.png';
import KIHU6 from '../../public/assets/kihu-6.png';
import KIHU7 from '../../public/assets/kihu-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriIndragiriHulu () {
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
                        <span>Berita Idragiri Hulu</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={KIHU1} alt="KIHU1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    Pengamanan Pleno Tingkat Kabupaten, Polres Inhu Gelar Apel dan Rakor
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Rabu, 28 Februari 2024 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>
          
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU2} alt="KIHU2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Personel Kodim 0302 Inhu Meninggal saat Pleno KPU Inhu
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Kamis, 29 Februari 2024 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU3} alt="KIHU3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Pemprov Riau Gesa Perbaikan Ruas Jalan Cerenti-Air Molek
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Sabtu, 16 Maret 2024 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU4} alt="KIHU4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Abutment Jembatan Teluk Sungkai Alami Abrasi, Pemprov Riau Gerak Cepat Perbaiki
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Senin, 18 Maret 2024 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU5} alt="KIHU5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Gerak Cepat, Abutment Jembatan Teluk Sungkai Kembali Fungsional
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Jumat, 22 Maret 2024 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU6} alt="KIHU6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Jelang Idulfitri, Polisi Pastikan Stok Beras dan BBM di Inhu Aman
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 2  April 2024 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KIHU7} alt="KIHU7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Alat Berat Dinas PUPR Provinsi Riau Terjang Banjir di Inhu
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Minggu, 14  Januari 2024 | 15:03:37
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