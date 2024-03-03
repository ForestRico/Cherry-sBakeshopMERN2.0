import { sample_foods, sample_tags } from "../../../backend/src/data";

export const getAll = async () => sample_foods;

// this function takes the 'searchTerm' as input, then attempts to filter the 'sample_foods' from the data and searches for a name that matches the 'searchTerm' .toLowerCase() makes the data and searchTerm caseinsensitive.
export const search = async searchTerm => 
    sample_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

export const getAllTags = async () => sample_tags;


// async function that takes tag as input. checks if the tag === 'All', then returns 'getAll()' function. Otherwise return 'foods'.filter every single item utilising the tag parameter.
export const getAllByTags = async tag => {
    if (tag === 'All') return getAll();
    return sample_foods.filter(item => item.tags?.includes(tag));
};

export const getByID = async foodId =>
sample_foods.find(item => item.id === foodId);
