import React from 'react';

const ColumnComponent = (props) => {
    return (
        <div className='flex flex-col items-start justify-start'>
            <div>
                <h1 className="text-white text-[16px]/[17.6px] font-medium mb-4">{props.item.title}</h1>
            </div>
            <div className="flex flex-col space-y-3">
                {
                    props.item.links.map((link, index) => (
                        <a key={index} href={link.url} className="text-[#E2E8F0] text-[16px]/[22.4px] hover:text-white transition-colors">
                            {link.title}
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default ColumnComponent;