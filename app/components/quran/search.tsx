import React, { FC } from 'react'
import Image from 'next/image'
import bismillah2 from '@/public/bismillah2.png'
import { IoSearchCircleSharp } from 'react-icons/io5'
import Link from 'next/link';

interface iSelectedSurah {
    name: string;
    url: string
}

const selectedSurah: iSelectedSurah[] = [
    {
        name: 'Al-Mulk',
        url: '67'
    },
    {
        name: 'Yasin',
        url: '36'
    },
    {
        name: 'Al-Kahf',
        url: '18'
    },
    {
        name: 'Al-Waqi`ah',
        url: '56'
    },
    {
        name: 'Ar-Rahman',
        url: '55'
    }
]

interface TSearch {
    handleChange: (key: string) => void
}

const Search: FC<TSearch> = ({ handleChange }) => {
    const onChange = (key: string) => {
        handleChange(key)
    }
    return (
        <section id='search' className='flex flex-col items-center'>
            <div className='w-3/4 flex flex-col items-center gap-2'>
                <div className='w-1/3'>
                    <Image src={bismillah2} alt='' />
                </div>
                <div className='w-3/4 relative'>
                    <input
                        placeholder='Cari nama atau nomor surah !'
                        className='w-full px-4 py-3 shadow-xl text-greenDark text-xl rounded-full outline-none border-spacing-1 border-b-2 border-r-2 border-green'
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    />
                    <button className='absolute text-5xl text-green top-1/2 -translate-y-1/2 right-1 rounded-full '>
                        <IoSearchCircleSharp />
                    </button>
                </div>
                <div className=' flex gap-3 mt-3 text-white'>
                    {selectedSurah.map((item) => {
                        return (
                            <Link key={item.name} href={`detail/${item.url}`} >
                                <button key={item.name} className='bg-green px-3 py-1 rounded-full'>
                                    {item.name}
                                </button>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Search