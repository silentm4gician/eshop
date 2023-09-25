import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => 
{
    const {setFilters, filters} = useFilters()

    const handlePrice =(e)=>
    {
        setFilters(prevState=>({...prevState,min:e.target.value}))
    }

    const handleCategory =(e)=>
    {
        setFilters(prevState=>({...prevState,category:e.target.value}))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio desde:</label>
                <input type="range"
                id="price"
                min='0'
                max='1000'
                onChange={handlePrice}
                value={filters.min}
                />
                <span>${filters.min}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}
