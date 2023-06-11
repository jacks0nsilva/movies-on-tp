import React from 'react';

interface Props {
    description: string;
    title: string;
}

const HeadTitle: React.FC<Props> = ({ description, title }) => {
    React.useEffect(() => {
        console.log('Hello Word');
        document.title = title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', description);
    }, [description, title]);
    return <></>;
};

export default HeadTitle;
