const CSS = {
    colors: {
        primary: 'bg-[#FFFBEB]',
        second: 'bg-[#FFFFFF]',
        third: 'bg-[#0F172A]',
        forth: 'bg-[#FEF3C7]'

    },
    paddings: {
        mobile: 'px-0 py-0',
        tablet: '',
        desktop: 'md:px-20 md:py-6'
    }
}

export const MasterCSS = {
    paddings: `${CSS.paddings.desktop} ${CSS.paddings.tablet} ${CSS.paddings.mobile}`,
    colors: `bg-[#FFFFFF] md:bg-[#FFFBEB]`,
    firstTextColor: 'text-[#0F172A]',
    secondTextColor: 'text-[#78350F]',
    fontRoboto: 'font-roboto'
}