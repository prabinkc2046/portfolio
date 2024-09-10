import { createContext, useState, useEffect, useMemo, useContext} from "react";

type ScreenContextType = {
    isMobile: boolean;
    handleResize: () => void;
}

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);


export const useScreenContext = (): ScreenContextType => {
    const context = useContext(ScreenContext);
    if(!context){
     throw new Error('useScreenContext must be used within a ScreenProvider');
    }

    return context;
}

export const ScreenProvider = ({children}:{children: React.ReactNode}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 401);

    const handleResize = useMemo(() => {
        const resizeListener = () => setIsMobile(window.innerWidth < 401);
        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener)
    },[])

   const value = useMemo(() => ({
    isMobile,
    handleResize
   }), [isMobile, handleResize]);

   useEffect(() => {
    handleResize();
   }, [handleResize]);

   return(
    <ScreenContext.Provider value={value}>
        {children}
    </ScreenContext.Provider>
   )
}