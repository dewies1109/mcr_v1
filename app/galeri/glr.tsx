import '@fontsource/poppins';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import G1 from '../../public/assets/g-1.png';
import G2 from '../../public/assets/g-2.png';
import G3 from '../../public/assets/g-3.png';
import G4 from '../../public/assets/g-4.png';
import G5 from '../../public/assets/g-5.png';
import G6 from '../../public/assets/g-6.png';
import G7 from '../../public/assets/g-7.png';
import G8 from '../../public/assets/g-8.png';
import Page from '../../public/assets/page.png';

export function Galeri () {
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

            <div className='bg-white mt-8 pt-4 rounded-md bg-contain mx-10 px-4 shadow-lg mb-16'>
                <div className="text-black/90 font-extrabold text-xl w-full" style={{ fontFamily: 'Poppins', fontWeight: 800 }}>
                    <div className="flex items-center">
                        <span>Galeri</span>
                        <div className="flex-grow border-t-2 border-[#FDCB2C] ml-4"></div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 my-8'>
                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>01/2024</div>
                        <Image src={G1} alt="G1" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Kunjungan Kerja Gubernur Riau ke Kabupaten Inhil</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>12/2023</div>
                        <Image src={G2} alt="G2" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Gubernur Riau Hadiri Penanaman Cabai di Pelalawan</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>10/2023</div>
                        <Image src={G3} alt="G3" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Senam Sehat Dalam Rangka Haornas 2022</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>10/2023</div>
                        <Image src={G4} alt="G4" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Peninjauan Masjid Raya Provinsi Riau</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>09/2023</div>
                        <Image src={G5} alt="G5" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Gubri Syamsuar Hadiri Acara Kenduri Riau</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>07/2023</div>
                        <Image src={G6} alt="G6" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Gubri Tinjau pemugaran Cagar Budaya Rumah Batin Senapelan</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>06/2023</div>
                        <Image src={G7} alt="G7" className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Persemian Bank Riau Kepri Syariah</div>
                    </div>

                    <div className='bg-white w-full h-auto rounded-md border-2 border-[#1A5D1A]/50 relative mb-4'>
                        <div className='z-10 bg-[#316D31] h-auto w-fit absolute -top-1.5 right-3.5 text-white font-thin text-sm px-3.5 py-1 rounded-bl-md rounded-br-md'>04/2023</div>
                        <Image src={G8} alt="G8 " className="h-auto w-full z-0" />
                        <div className='text-base font-semibold hover:underline  m-3.5'>Gubri Sambut Kedatangan Wakil Presiden RI</div>
                    </div>
                </div>

                <Image src={Page} alt="Page" className="w-full my-12" />
            </div>
        </div>
    )
} 