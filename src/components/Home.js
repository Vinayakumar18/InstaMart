import React, { useEffect, useState } from 'react';
import { Category } from '../assets/Category';
import { Data } from '../assets/Data';
import Card from './Card';
import { Header } from './Header';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState(Category[0].id);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        const categorySections = Category.map((category) => ({
            id: category.id,
            offsetTop: document.getElementById(category.id).offsetTop,
            offsetHeight: document.getElementById(category.id).offsetHeight,
        }));

        for (let i = 0; i < categorySections.length; i++) {
            const section = categorySections[i];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (scrollPosition + windowHeight / 2 >= sectionTop && scrollPosition + windowHeight / 2 <= sectionBottom) {
                setActiveCategory(section.id);
                break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='fixed w-full top-0 z-10'>
                <Header />
            </div>
            <div className='flex mt-14 md:mt-14 '>
                <div className='md:w-1/6 z-10'>
                    <div className='md:bg-slate-300 md:w-1/6 bg-white fixed w-full overflow-x-auto'>
                        <div className='flex flex-row md:flex-col justify-start'>
                            {Category.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => scrollToSection(category.id)}
                                    className={`md:py-3 md:pl-6 md:w-full md:h-full w-16 h-10 px-3.5 text-start rounded hover:bg-sky-500 ${
                                        activeCategory === category.id ? 'bg-sky-600' : ''
                                    }`}
                                >
                                    {category.CategoryName}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='md:w-5/6 mt-3 md:ml-3 w-full '>
                    {Category.map((category) => (
                        <div key={category.id} id={category.id}>
                            <h1 id={category.id} className='font-bold text-3xl mt-6'>
                                {category.CategoryName} &gt;
                            </h1>
                            <hr />
                            <div className='grid md:grid-cols-4 md:gap-3 grid-cols-2 gap-1'>
                                {Data.filter((data) => data.CategoryName === category.CategoryName).map((item) => (
                                    <div key={item.id}>
                                        <Card id={item.id} name={item.name} price={item.price} img={item.img} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
