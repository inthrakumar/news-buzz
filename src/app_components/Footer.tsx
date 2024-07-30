import React from 'react';

function Footer() {
    return (
        <div className="font-roboto flex flex-col mt-3 sm:flex-row  gap-4 justify-center dark:border-gray-700 items-center h-[20%] text-[1rem] max-sm:text-[14px] p-4 max-sm:pt-2 border-t border-solid">
            <div className="flex gap-2 flex-wrap text-center sm:text-left">
                <p>© 2022 NewsBuzz. All rights reserved.</p>
                <p>Powered by World NewsAPI</p>
            </div>
            <div className="flex gap-2 flex-wrap text-center sm:text-right">
                <p>Contact Us: 123-456-7890</p>
                <p>Email: support@newsbuzz.com</p>
            </div>
        </div>
    );
}

export default Footer;
