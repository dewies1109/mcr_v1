import Image from 'next/image';
import MotifFoot from '../../public/assets/motif_foot.png'
import '@fontsource/poppins';
import AlmLogo from '../../public/assets/alamat_logo.png'
import TlpLogo from '../../public/assets/telepon_logo.png'
import EmlLogo from '../../public/assets/email_logo.png'
import Logo from '../../public/assets/logo.png'
import Link from 'next/link';

export function Footer() {
    return (
        <div className="h-auto bg-[#316D31] font-sans relative">
            <div className="flex justify-between z-0 relative">
                <Image src={MotifFoot} alt="MotifFoot" className="w-6 " />
                <Image src={MotifFoot} alt="MotifFoot" className="w-6 " />
            </div>

            <div className='z-20 grid grid-cols-9 absolute inset-0 pt-8'>
                <div className='lg:ml-12 lg:-mr-3 mb-8 font-bold text-lg text-white lg:col-span-4 md:col-span-full sm:col-span-full lg:border-r border-white/50 flex justify-between flex-col md:border-r-0 md:ml-32 sm:ml-16'>
                    <Link href='/beranda'>
                        <Image src={Logo} alt="Logo" className="w-fit h-16" />  
                    </Link>                                                                                                
                    <div className='grid grid-cols-5 '>
                        <div className='flex col-span-3'>
                            <Image src={AlmLogo} alt='AlmLogo' className='h-7 w-auto'/> 
                            <div className='ml-3.5 text-base '>
                                <div className='font-semibold'>                                     
                                    Alamat
                                </div>
                                <div className='font-thin mt-1'>
                                    Jl. Diponegoro No. 24A<br />
                                    Kota Pekanbaru, Riau 28116
                                </div>
                            </div>
                        </div>
                        <div className='flex col-span-2'>
                            <Image src={TlpLogo} alt='TlpLogo' className='h-7 w-auto'/> 
                            <div className='ml-3.5'>
                                <div className='text-base font-semibold'>
                                    Telepon
                                </div>
                                <div className='font-thin text-base mt-1'>
                                    (+62) 0761-45505
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image src={EmlLogo} alt='EmlLogo' className='h-7 w-auto'/> 
                        <div className='ml-3.5'>
                            <div className='text-base font-semibold'>
                                Email
                            </div>
                            <div className='font-thin text-base mt-1'>
                                mediacenter@riau.go.id
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-8 font-bold text-lg text-white col-span-2 border-r border-white/50 pr-4 pl-10 hidden lg:block'>
                    Kategori Topik Berita
                    <div className='font-thin mt-6 text-base'>
                        <div className='mb-2'><button className='hover:underline'>Ekonomi</button></div>
                        <div className='mb-2'><button className='hover:underline'>Kesehatan</button></div>
                        <div className='mb-2'><button className='hover:underline'>Olahraga</button></div>
                        <div className='mb-2'><button className='hover:underline'>Pendidikan</button></div>
                        <div className='mb-2'><button className='hover:underline'>Sosial</button></div>
                        <div className='mb-2'><button className='hover:underline'>Stunting</button></div>
                    </div>
                </div>

                <div className='font-bold text-lg text-white  pl-8 col-span-3 hidden lg:block'>
                    Kategori Berita Daerah
                    <div className='grid grid-cols-2 gap-4 text-base mt-6'>
                        <div className='font-thin'>
                            <Link href='/kategori_bengkalis'>
                                <div className='mb-2'><button className='hover:underline'>Bengkalis</button></div>
                            </Link>
                            <Link href='/kategori_dumai'>
                                <div className='mb-2'><button className='hover:underline'>Dumai</button></div>
                            </Link>
                            <Link href='/kategori_indragiri_hilir'>
                                <div className='mb-2'><button className='hover:underline'>Indragiri Hilir</button></div>
                            </Link>
                            <Link href='/kategori_indragiri_hulu'>
                                <div className='mb-2'><button className='hover:underline'>Indragiri Hulu</button></div>
                            </Link>
                            <Link href='/kategori_kampar'>
                                <div className='mb-2'><button className='hover:underline'>Kampar</button></div>
                            </Link>
                            <Link href='/kategori_kepulauan_meranti'>
                                <div className='mb-2'><button className='hover:underline'>Kepulauan Meranti</button></div>
                            </Link>
                        </div>
                        <div className='font-thin ml-4'>
                            <div className='mb-2'><button className='hover:underline'>Kuansing</button></div>
                            <div className='mb-2'><button className='hover:underline'>Pekanbaru</button></div>
                            <div className='mb-2'><button className='hover:underline'>Pelalawan</button></div>
                            <div className='mb-2'><button className='hover:underline'>Rokan Hilir</button></div>
                            <div className='mb-2'><button className='hover:underline'>Rokan Hulu</button></div>
                            <div className='mb-2'><button className='hover:underline'>Siak</button></div>
                        </div>
                    </div>
                </div>

                <div className='col-span-9 text-sm text-white flex items-center font-thin justify-center border-t mx-10 mt-3'>
                  Copyright © 2023 Dinas Komunikasi, Informatika dan Statistik Provinsi Riau
                </div>
            </div>
           
        </div>
    )
}