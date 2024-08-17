const CSS = {
    colors: {
        textColors: {
            primary: 'text-[#78350F]',
        }
    },
    companyTitle: {
        font: 'font-roboto',
        weight: 'font-bold',
        size: 'text-[30px]/[32.5px]',
    },
    buttonGroup: {
        font: 'font-roboto',
        weight: 'font-medium',
        size: 'text-[16px]/[24px]',
    },
    signUpButton: {
        font: 'font-roboto',
        weight: 'font-medium',
        size: 'text-[16px]/[24px]',
        border_size: `border-2`,
        border_color: 'border-[#78350F]',
        rounded: 'rounded-lg',
        padding: 'p-3',
    }
}

export const HeaderCSS = {
    index: `flex flex-row items-center text-center justify-between ${CSS.colors.textColors.primary}`,
    companyTitle: `${CSS.companyTitle.font} ${CSS.companyTitle.size} ${CSS.companyTitle.weight}`,
    buttonGroup: `${CSS.buttonGroup.font} ${CSS.buttonGroup.size} ${CSS.buttonGroup.weight}`,
    signUpButton: `${CSS.signUpButton.border_color} ${CSS.signUpButton.border_size} ${CSS.signUpButton.font} ${CSS.signUpButton.padding} ${CSS.signUpButton.rounded} ${CSS.signUpButton.size} ${CSS.signUpButton.weight}`,   
}