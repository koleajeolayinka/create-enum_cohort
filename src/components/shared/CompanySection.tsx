import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const CompanySection = () => {
    const imageUrl: string = '/img.png';
    const companyName: string = 'Semicolon Africa';
    const companyFirstLetter: string = companyName.charAt(0);
    return (
        <section
            className="bg-center flex items-center bg-cover bg-no-repeat w-full relative h-36 mt-2  "
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <article className="grid gap-[10px] ml-16 p-[8px] w-[205px] backdrop-blur-[4px] bg-enumTransparentWhite rounded-[4px] ">
                <div className={'flex gap-[9px] items-center'}>
                    <div
                        className={
                            'h-[32px] w-[32px] bg-enumPurple rounded-[2.287px] grid place-items-center border-[1.7px] border-solid border-[#fff]'
                        }
                    >
                        <h1 className="text-white text-base font-bold">{companyFirstLetter}</h1>
                    </div>
                    <h1 className="text-white font-bold">{companyName}</h1>
                </div>
                <button
                    className={
                        'flex items-center gap-[10px] p-[8px] rounded-[4px] bg-[#fff] text-enumGray2 font-bold leading-normal text-base justify-center'
                    }
                    style={{ boxShadow: '0px 4px 8px 0px rgba(56, 113, 131, 0.08)' }}
                >
                    <h1>View Profile</h1>
                    <FaArrowRight />
                </button>
            </article>
        </section>
    );
};

export default CompanySection;
