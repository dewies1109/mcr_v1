import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import KD1 from '../../public/assets/kd-1.png';
import KD2 from '../../public/assets/kd-2.png';
import KD3 from '../../public/assets/kd-3.png';
import KD4 from '../../public/assets/kd-4.png';
import KD5 from '../../public/assets/kd-5.png';
import KD6 from '../../public/assets/kd-6.png';
import KD7 from '../../public/assets/kd-7.png';
import Page from '../../public/assets/page.png';
import Link from 'next/link';

export function KategoriDumai () {
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
                        <span>Berita Dumai</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                
                    <div className='mt-8'>
                        <div className='flex'>
                            <div className='flex-none'>
                                <Image src={KD1} alt="KD1" className="w-52" />
                            </div>
                            <div className='ml-6'>
                                <div className='text-lg font-semibold hover:underline'>
                                    Dipimpin Presiden RI, Pj Gubri Hadiri Upacara Peringatan Harlah Pancasila di Dumai
                                </div>
                                <div className='mt-2 text-xs font-normal'>
                                    Sabtu, 1 Juni 2024 | 12:09:03
                                </div>
                            </div>
                        </div>
                    </div>
               
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KD2} alt="KD2" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Warga Dumai Dapat Bansos, Pj Gubri: Jangan Belikan Rokok
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Senin, 10 Juni 2024 | 20:25:19
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KD3} alt="KD3" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Kepala BNN Puji Kinerja Kapolda Riau Gagalkan Narkoba 2 Ton Sabu Selama Menjabat
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Senin, 24 Juni 2024 | 17:14:06
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KD4} alt="KD4" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Mantan Anggota DPRD Dumai Potong Uang Bansos 50 Persen Setiap Proposal
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Senin, 24 Juni 2024 | 17:21:11
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0 " />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KD5} alt="KD5" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Plt Kakanwil Kemenag Riau: Digitalisasi Tanah Wakaf Libatkan Semua Sektor
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
                            <Image src={KD6} alt="KD6" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Kabur saat Akam Ditangkap, Dua Begal di Dumai Ditembak Polisi
                            </div>
                            <div className='mt-2 text-xs font-normal'>
                                Selasa, 2 Juli 2024 | 10:03:17
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 mt-8 bg-[#1A5D1A]/30 border-0" />

                <div className='mt-8'>
                    <div className='flex'>
                        <div className='flex-none'>
                            <Image src={KD7} alt="KD7" className="w-52" />
                        </div>
                        <div className='ml-6'>
                            <div className='text-lg font-semibold hover:underline'>
                                Jual Pil Ekstasi Berlogo Kepala Firaun, Pria Dumai Ditangkap Polisi     
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