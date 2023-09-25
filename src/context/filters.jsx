import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext()

export function FiltersProvider ({children})
{
    const [filters,setFilters] = useState({
            category: 'all',
            min: 0
        })

    return (
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
