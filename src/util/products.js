import brophyPic from '../img/products/girlBrophy.webp';
import mcCrankPic from '../img/products/girlMcCrank.webp';
import maltoPic from '../img/products/girlMalto.webp';
import sectionPic from '../img/products/elementSection.webp';


//factory function to product object for each item
const product = (name, pic, description, type, brand, price, inStock, id, featured=false) => {
    return { name, pic, description, type, brand, price, inStock, id, featured };
};

const girlBrophy93 = new product(
    'Girl Brophy 93 Til Deck',
    brophyPic,
    '8.25 x 31.75',
    'deck',
    'girl',
    49.98,
    'Yes',
    101,
    true
)

const girlMcCrank = new product(
    'Girl McCrank International OG Deck',
    mcCrankPic,
    '8.25 x 31.75',
    'deck',
    'girl',
    49.98,
    'Yes',
    102,
    true
)

const girlMalto = new product(
    'Girl Malto 93 Til Pop Secret Deck',
    maltoPic,
    '8.0 x 31.875',
    'deck',
    'girl',
    59.98,
    'Yes',
    103,
    true
)

const elementSection = new product(
    'Element Section Black Deck',
    sectionPic,
    '8.0 x 31.75',
    'deck',
    'element',
    56.99,
    'Yes',
    104,

)


export const products = [girlBrophy93, girlMcCrank, girlMalto, elementSection];
