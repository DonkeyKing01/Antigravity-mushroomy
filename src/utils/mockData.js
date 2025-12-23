export const categories = [
    { id: 'edible', label: 'Edible', color: '#4caf50' },
    { id: 'toxic', label: 'Toxic', color: '#c24d2c' },
    { id: 'medicinal', label: 'Medicinal', color: '#2196f3' },
    { id: 'psychoactive', label: 'Psychoactive', color: '#9c27b0' }
];

export const species = [
    {
        id: 1,
        name: 'Amanita muscaria',
        latinName: 'Amanita muscaria',
        category: 'toxic',
        description: 'The iconic fly agaric, featuring a bright red cap with white spots.',
        image: 'https://images.unsplash.com/photo-1542359483-346761661644?auto=format&fit=crop&q=80',
        habitat: 'Coniferous and deciduous woodlands',
        toxicity: 'High'
    },
    {
        id: 2,
        name: 'Chanterelle',
        latinName: 'Cantharellus cibarius',
        category: 'edible',
        description: 'Golden-yellow, funnel-shaped mushroom with a fruity smell.',
        image: 'https://images.unsplash.com/photo-1604664786650-705b67469796?auto=format&fit=crop&q=80',
        habitat: 'Mossy forests',
        toxicity: 'None'
    },
    {
        id: 3,
        name: 'Lion\'s Mane',
        latinName: 'Hericium erinaceus',
        category: 'medicinal',
        description: 'Large, white, shaggy mushroom resembling a lion\'s mane.',
        image: 'https://images.unsplash.com/photo-1505315569427-4a2599c901e6?auto=format&fit=crop&q=80', // Approximate
        habitat: 'Hardwood logs',
        toxicity: 'None'
    },
    {
        id: 4,
        name: 'Ghost Fungus',
        latinName: 'Omphalotus nidiformis',
        category: 'toxic',
        description: 'Bioluminescent mushroom that glows green in the dark.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Omphalotus_nidiformis_low_light.jpg/640px-Omphalotus_nidiformis_low_light.jpg', // Wiki fallback
        habitat: 'Dead trees',
        toxicity: 'Moderate'
    },
    {
        id: 5,
        name: 'Morel',
        latinName: 'Morchella esculenta',
        category: 'edible',
        description: 'Distinctive honeycomb appearance on the cap.',
        image: 'https://images.unsplash.com/photo-1620029587422-901b04671404?auto=format&fit=crop&q=80',
        habitat: 'Moist woodlands',
        toxicity: 'None (if cooked)'
    }
];
