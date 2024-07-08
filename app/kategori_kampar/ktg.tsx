import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import KK1 from '../../public/assets/kk-1.png';
import KK2 from '../../public/assets/kk-2.png';
import KK3 from '../../public/assets/kk-3.png';
import KK4 from '../../public/assets/kk-4.png';
import KK5 from '../../public/assets/kk-5.png';
import KK6 from '../../public/assets/kk-6.png';
import KK7 from '../../public/assets/kk-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriKampar () {
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
                        <span>Berita Kampar</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

               
                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={KK1} alt="KK1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    Pemkab Kampar Bersama Kemenhub Gelar Bimtek Keselamatan Jalan Anak Usia Sekolah
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Rabu, 5 Juni 2024 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>
             
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK2} alt="KK2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Konflik Gajah dengan Manusia Kembali Terjadi di Kampar, BBKSDA Riau Cek Lokasi
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Rabu, 12 Juni 2024 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK3} alt="KK3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Plt Kepsek Beberkan Alasan Ruang Bekas Toilet Disulap Jadi Kelas Belajar Siswa SDN 002 Kamp
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Rabu, 12 Juni 2024 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK4} alt="KK4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Serentak Se-Indonesia, Pemkab Kampar Ikuti Gerakan Pengukuran dan Intervensi Stunting
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Kamis, 13 Juni 2024 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK5} alt="KK5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Wakili Provinsi Riau, Karmilatun Nisa Siswa SMAN II Gunung Sahilan Kampar, Terpilih Sebagai Paskibraka Nasional
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Rabu, 26 Juni 2024 | 15:03:37
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK6} alt="KK6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Pj Gubri SF Hariyanto Himbau Sekolah Waspadai Aktivitas Judol di Kalangan Remaja
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 2  Juni 2024 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KK7} alt="KK7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                155 Pembalap Motor Ramaikan Kejurnas Motoprix Region A Sumatra Putaran II Riau
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Minggu, 19 Mei 2024 | 15:03:37
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