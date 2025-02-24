"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const HeaderContext = createContext<{
    isHome: boolean;
    setIsHome: (isHome: boolean) => void;
}>({
    isHome: false,
    setIsHome: () => { },
})

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {

    const [isHome, setIsHome] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [pathname]);

    return (
        <HeaderContext.Provider value={{ isHome, setIsHome }}>
            {children}
        </HeaderContext.Provider>
    );
};

const useHeader = () => useContext(HeaderContext);

export { HeaderProvider, useHeader };
