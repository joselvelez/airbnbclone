'use client'

// This is to wrap any third party components that are
// not currently setup to work as client only components.

import React, { useEffect, useState } from "react"

interface ClientOnlyProps {
    children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly;