import Image from 'next/image';
import '@fontsource/poppins';
import Link from 'next/link';

import Motif from '../../public/assets/motif_nav.png';
import Logo from '../../public/assets/logo.png';
import Brnlogo from '../../public/assets/beranda_logo.png';
import Ktglogo from '../../public/assets/kategori_logo.png';
import Glrlogo from '../../public/assets/galeri_logo.png';
import Dropdown from './dropdown';

export function Navbar() {
    const daerahItems = [
        { label: 'Bengkalis', href: '/kategori_bengkalis' },
        { label: 'Dumai', href: '/kategori_dumai' },
        { label: 'Indragiri Hilir', href: '/kategori_indragiri_hilir' },
        { label: 'Indragiri Hulu', href: '/kategori_indragiri_hulu' },
        { label: 'Kampar', href: '/kategori_kampar' },
        { label: 'Kepulauan Meranti', href: '/kategori_kepulauan_meranti' },
        { label: 'Kuantan Singigi', href: '' },
        { label: 'Pekanbaru', href: '' },
        { label: 'Pelalawan', href: '' },
        { label: 'Rokan Hilir', href: '' },
        { label: 'Rokan Hulu', href: '' },
        { label: 'Siak', href: '' },
    ];

    const kategoriItems = [
        { label: 'Daerah', href: '', subItems: daerahItems, showOnSmallScreen: true },
        { label: 'Ekonomi', href: '' },
        { label: 'Kesehatan', href: '' },
        { label: 'Olahraga', href: '' },
        { label: 'Pendidikan', href: '' },
        { label: 'Sosial', href: '' },
        { label: 'Stunting', href: '' },
    ];

    return (
        <nav className="font-sans">
            <div className="bg-[#1A5D1A]/80 pt-7 relative pb-6">
                <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#1A5D1A]/80">
                    <Image src={Motif} alt="Motif" className="relative z-0 h-1/2 object-fill" />
                </div>

                <div className="flex z-20 absolute top-0 left-0 w-full mt-6 h-auto">
                    <div className="grid grid-cols-7 items-center w-full ">
                        <div className="col-span-4 items-center">
                            <Link href="/beranda">
                                <div className="flex-none">
                                    <Image src={Logo} alt="Logo" className="h-14 w-auto object-fill ml-10" />
                                </div>
                            </Link>
                        </div>
                     
                        <div className="col-span-3 items-center w-full flex">
                            <div className="flex text-white font-thin text-base mr-10 pl-10 justify-between w-full max-w-full flex-wrap">
                                <Link href="/beranda">
                                    <button className="flex items-center p-4 transition-all duration-200 hover:bg-[#FDCB2C]/60 rounded-md active:bg-[#FDCB2C]/75">
                                        <Image src={Brnlogo} alt="Beranda Logo" className="h-5 w-auto mr-2.5 flex-shrink-0" />
                                        <span className="hidden lg:inline">Beranda</span>
                                    </button>
                                </Link>
                                <Dropdown title={
                                    <div className="flex items-center">
                                        <Image src={Ktglogo} alt="Kategori Logo" className="h-5 w-auto mr-2.5 flex-shrink-0" />
                                        <span className="hidden lg:inline">Kategori</span>
                                    </div>
                                } items={kategoriItems} />
                                <Link href="/galeri">
                                    <button className="flex items-center p-4 transition-all duration-200 hover:bg-[#FDCB2C]/60 rounded-md active:bg-[#FDCB2C]/75">
                                        <Image src={Glrlogo} alt="Galeri Logo" className="h-5 w-auto mr-2.5 flex-shrink-0" />
                                        <span className="hidden lg:inline">Galeri</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-0.5 mt-6 bg-[#FDCB2C] border-0" />

                <div className="mt-6 mr-10 items-center grid grid-cols-7">
                    <div className="col-span-4">
                        <div className="flex-none ml-8 text-base font-medium text-white">
                            Selasa, 28 May 2024 | 21 Zulqaidah 1445 H
                        </div>
                    </div>
                    <div className="col-span-3">
                        <form className="ml-auto w-full pl-16">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="block pl-2.5 pr-10 w-full h-9 z-20 text-sm font-normal text-gray-500 bg-white rounded-md focus:outline-0"
                                    placeholder="Cari berita..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-[#F1C93B] focus:ring-2 focus:ring-[#1A5D1A]/80 focus:rounded-md">
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </form>   
                    </div>
                </div>

            </div>
        </nav>
    );
}
