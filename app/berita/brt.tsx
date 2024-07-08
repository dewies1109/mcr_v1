import '@fontsource/poppins';
import '@fontsource/poppins/800.css';
import Image from 'next/image';
import BgLeft from '../../public/assets/bg_left.png';
import K1 from '../../public/assets/k-1.png';
import Auth from '../../public/assets/auth.png';
import Date from '../../public/assets/date.png';
import Time from '../../public/assets/time.png';
import See from '../../public/assets/see.png';

export function Berita () {
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
                <div className='text-[#1A5D1A] font-black text-2xl w-full' style={{ fontFamily: 'Poppins', fontWeight: 800 }}>
                    Resmikan SMK 5 Mandau, Gubri: Biaya Gratis Jangan Ada Lagi Anak Tidak Sekolah
                </div>

                <div className='flex mt-6'>
                    <div className='text-xs flex items-center'>
                        <Image src={Auth} alt="Auth" className="h-3.5 w-auto" />
                        <div className='ml-1.5'>Raden Heru</div>
                    </div>
                    <div className='text-xs flex items-center ml-7'>
                        <Image src={Date} alt="Date" className="h-3.5 w-auto" />
                        <div className='ml-1.5'>Rabu, 21 Juni 2023</div>
                    </div>
                    <div className='text-xs flex items-center ml-7'>
                        <Image src={Time} alt="Time" className="h-3.5 w-auto" />
                        <div className='ml-1.5'>12:09:03</div>
                    </div>
                    <div className='text-xs flex items-center ml-7'>
                        <Image src={See} alt="See" className="h-3.5 w-auto" />
                        <div className='ml-1.5'>441</div>
                    </div>
                </div>

                <hr className="h-1 mt-9 bg-[#FDCB2C] border-0 " />

                <Image src={K1} alt="K1" className="h-auto w-full mt-9" />

                <div className=' mt-6 text-justify mb-8 tracking-tight'>
                    <b>PEKANBARU</b> - Gubernur Riau, Syamsuar, meresmikan Sekolah Menengah Kejuruan (SMK) 5 Mandau, Kabupaten Bengkalis, Sabtu (15/7). Gubri berharap dengan diresmikan SMK 5 Mandau ini, tidak ada lagi masyarakat yang tidak bersekolah di daerah perdesaan, terutama di Mandau.

                    <p className="indent-8 mt-3">“Kami sangat peduli terhadap pendidikan bagi masyarakat Riau. Karena itulah kami tidak mengenakan bagi sekolah tingkat SMA/SMK, tidak ada lagi anak-anak membayar uang sekolah setiap bulannya. Karena kami sudah menyiapkan biaya Bantuan operasional sekolah daerah (Bosda),” ujar Gubri kepada ratusan masyarakat dan orangtua siswa yang memadati halaman sekolah SMK 5 Mandau.</p>
                    
                    <p className="indent-8 mt-3">“Jadi tidak ada lagi biaya sekolah, dan tidak ada lagi anak-anak yang tidak sekolah. Apa tujuan kami mengeluarkan Bosda, agar anak-anak kami bersekolah karena biaya sudah dipersiapkan oleh Pemerintah daerah. Anak-anak sekolah wajib belajar 12 tahun, dengan adanya SMK ini dapat mempermudah sekolah yang lebih dekat,” ujar Gubri Syamsuar lagi.</p>
        
                    <p className="indent-8 mt-3">Dijelaskan Gubri, ia berharap jurusan di SMK 5 ini ditambah dari 4 jurusan yang ada. Karena di Provinsi Riau, merupakan salah satu Provinsi yang memiliki sumber daya alam yang besar. Termasuk di Bengkalis, di Kecamatan Mandau ini ada banyak perusahan-perusahaan pertambangan dan perkebunan besar yang beroperasi.</p>
        
                    <p className="indent-8 mt-3">“Kami harapkan Plt Kepala Sekolah, agar bisa bekerjasama dengan perusahaan seperti Pertamina Hulu Rokan (PHR) di sini, untuk menyiapkan jurusan-jurusan yang dimudahkan untuk pekerjaan disini. Harapan kami anak di sini bisa melanjutkan siap bekerja di perusahaan PHR atau perusahaan yang ada di Kota Duri ini,” harap Gubri.</p>
                    
                    <p className="indent-8 mt-3">Sementara itu, Kepala Dinas Pendidikan Provinsi Riau, Kamsol, mengatakan, setelah diresmikannya sekolah SMK 5 Mandau ini, mulai tahun ini sudah menampung siswa perdana. Di mana jumlah siswanya masih terbatas sesuai dengan jumlah siswa yang mendaftar. Dengan lokasi yang cukup jauh dari Kota Duri ini, diharapkan bisa menampung masyarakat di area perkebunan yang ada di Kecamayan Mandau.</p>
                    
                    <p className="indent-8 mt-3">“Kita sudah mendata semua sarana dan prasarana di Sekolah ini untuk penerimaan murid baru itu ada sekitar 50 siswa, disini ada 4 jurusan. Kita harus menyesuaikan lagi kebutuhan peralatan di sekolah ini, mudah-mudahan kita dapat memasukkan kedalam anggaran 2024 atau mungkin dari DAK yang ada kegiatan-kegiatan berkaitan pendidikan sekolah menengah,” kata Kamsol.</p>
        
                    <p className="indent-8 mt-3">Dijelaskan mantan Pj Bupati Kampar ini, selain di SMK 5 Mandau yang diresmikan, Gubernur Riau juga sudah meresmikan beberapa sekolah yang di daerah lain. Ke depan Pemprov Riau tetap akan membangun dan menambah sekolah dan ruang kelas di Kabupaten Kota, untuk menampung masyarakat yang melanjutkan jenjang pendidikan sekolah menengah atas SMA/SMK.</p>
                    
                    <p className="indent-8 mt-3">“Sebenarnya banyak ya kita membangun sekolah baru, itu ada 10. Setelah itu sekolah swasta yang di Negerikan itu, ada SMA 2 sekolah, di Pelalawan dan Kampar, termasuk di Kota Pekanbaru ada 3 sekolah Negri yang akak diresmikan,” kata Kamsol.</p>
        
                    <p className="indent-8 mt-3">Peresmian SMK 5 Mandau, ditandai dengan pemotong pita oleh istri Gubernur Riau, Misnarni Syamsuar, dan pembukaan tirai plang SMK 5 Mandau, didampingi Kadisdik Riau, Kamsol, Plt Kepala Sekolah SMK 5 Mandau, dan kepala Desa.</p>
                </div>
            </div>
        </div>
    )
} 