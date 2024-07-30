import React from 'react';

function Footer() {
    return (
        <div className="font-roboto flex mt-3 max-lg:flex-col gap-4 max-sm:gap-2 justify-center dark:border-gray-700 items-center h-[20%] text-[1rem] max-lg:text-[13px] max-sm:text-[10px] p-4 max-sm:pt-2 border-t border-solid">
            <div className="flex gap-2  text-center sm:text-left flex-nowrap">
                <p>© 2022 NewsBuzz. All rights reserved.</p>
                <p>Powered by World NewsAPI</p>
            </div>
            <div className="flex gap-2  text-center sm:text-right flex-nowrap">
                <p>Contact Us: 123-456-7890</p>
                <p>Email: support@newsbuzz.com</p>
            </div>
        </div>
    );
}

export default Footer;
