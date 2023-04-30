import Link from "./Link";

function Sidebar() {
    const Links = [
        {label: 'DropDown', path: '/' },
        {label: 'Accordion', path: '/accordion' },
        {label: 'Buttons', path: '/buttons' },
        {label: 'Modal', path: '/modal' },
        {label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counter' },
    ];

    const rederedLinks = Links.map((link) => {
        return (
            <Link 
                className='mb-3' 
                key={link.label} 
                to={link.path}
                activeClassName='font-bold border-l-4 border-blue pl-2'
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {rederedLinks}
        </div>
    );
}

export default Sidebar;