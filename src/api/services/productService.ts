import { environment } from "../../environment/main"
import FilterRequest  from "./model/filterRequest";



export const searchProductsUsingGet = async (requestFilterObject: FilterRequest): Promise<any> => {
    const url = new URL(environment.baseUrlToFilter);

    Object.keys(requestFilterObject).forEach(key => {
        const value = requestFilterObject[key];
        if (value !== null && value !== undefined && value !== '') {
            url.searchParams.append(key, String(value));
        }
    });

    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
