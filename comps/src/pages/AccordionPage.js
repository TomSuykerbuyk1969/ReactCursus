import Accordion from "../components/Accordion";

function AccordionPage() {    
    const items = [
        {
            id: 'dtjrtyj',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'dtj3heknkotj',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.'
        },
        {
            id: 'plotrljpo4yt',
            label: 'Can I use css on a project?',
            content: 'You can use css on any project you want. You can use css on any project you want. You can use css on any project you want. You can use css on any project you want. You can use css on any project you want. You can use css on any project you want. You can use css on any project you want.'
        }
    ];
    return <Accordion items={items}/>

};

export default AccordionPage;