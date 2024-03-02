import { sample_foods } from "../data";

export const getAll = async () => sample_foods;

// this function takes the 'searchTerm' as input, then attempts to filter the 'sample_foods' from the data and searches for a name that matches the 'searchTerm' .toLowerCase() makes the data and searchTerm caseinsensitive.
export const search = async searchTerm => 
    sample_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
