export const NavbarLink = ({ link, title }) => {
    return (
        <>
            <li>
                <a href={link}>{title}</a>
            </li>
        </>
    );
};
