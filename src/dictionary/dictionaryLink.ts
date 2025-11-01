type RequiredKeys = {
    ContactUs: DicType;
};

export type DictionaryType = RequiredKeys & Record<string, DicType>;
export type TextsType = Record<string, string | string[]>;

export type DicType = {
    link: string;
    name: string;
    texts: TextsType;
};

const dictionary: DictionaryType = {
    ContactUs: {
        link: `/#ContactUs`,
        name: `Contact Us`,
        texts: {
            sectionName: `Contact Us`,
            contactUsText: `Tell us about your and one of our team members will contact your shortly.`,
        },
    },
};

export default dictionary;
