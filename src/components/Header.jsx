import Logo from "./Logo"
import NavItems from "./NavItems";

const Header = () => {
    return (
        <div className="flex justify-between p-4 bg-orange-300 m-2">
            <Logo />
            <NavItems />
        </div>
    )
}

export default Header;