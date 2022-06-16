//factory function to product object for each item
const product = (name, pic, description, type, brand, price, id, featured=false) => {
    return { name, pic, description, type, brand, price, id, featured };
};

const girlBrophy93 = new product(
    'Girl Brophy 93 Til Deck',
    'picture',
    '8.25 x 31.75',
    'deck',
    'girl',
    49.98,
    1,
)

const girlMcCrank = new product(
    'Girl McCrank International OG Deck',
    'pic',
    '8.25 x 31.75',
    'deck',
    'girl',
    49.98,
    2,

)

const girlMalto = new product(
    'Girl Malto 93 Til Pop Secret Deck',
    'pic',
    '8.0 x 31.875',
    'deck',
    'girl',
    59.98,
    3,

)

const elementSection = new product(
    'Element Section Black Deck',
    'pic',
    '8.0 x 31.75',
    'deck',
    'element',
    56.99,
    4,

)


export const products = [girlBrophy93, girlMcCrank, girlMalto, elementSection];
