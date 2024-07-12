'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
    const navItems = ["Home", "Workspace", "Resources Library"];
    const pathname = usePathname(); // Get the current pathname

    const isActive = (item: string) => {
        // Check if pathname starts with the item's path or matches exactly
        const itemPath = `/${item.toLowerCase().replace(/ /g, "-")}`;
        return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
    };

    return (
        <nav className="text-enumGrey">
            <ul className="flex h-13 gap-3 text-base font-semibold leading-[175%] max-lg:space-x-1 space-x-3  max-lg:gap-[1px]">
                {navItems.map((item) => (
                    <li key={item} className={isActive(item) ? "border-b-4 border-enumBlue rounded-[4px]" : ""}>
                        <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                            <button
                                className={
                                    isActive(item)
                                        ? "p-2 px-6 text-enumBlue bg-[#F6FCFF] rounded-[300px] m-2   max-md:p1 "
                                        : "p-2 px-6 m-2 "
                                }
                            >
                                <h4 className={"max-[1024px]:text-xxs"}>{item}</h4>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;
