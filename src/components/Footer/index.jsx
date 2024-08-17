import React from 'react';
import Columns from './columns';
import Bottom from './bottom';
import { ColumnData } from '../../assets/footerData';

const Footer = () => {
    return (
        <footer className="px-20 py-20 bg-[#0F172A]">
            <Columns columns={ColumnData} />
            <Bottom />
        </footer>
    );
}

export default Footer;