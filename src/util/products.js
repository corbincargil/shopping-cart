import brophyPic from '../img/products/girlBrophy.webp';
import brophyPicBack from '../img/products/girlBrophyBack.webp';
import mcCrankPic from '../img/products/girlMcCrank.webp';
import mcCrankPicBack from '../img/products/girlMcCrankBack.webp';
import maltoPic from '../img/products/girlMalto.webp';
import maltoPicBack from '../img/products/girlMaltoBack.webp';
import sectionPic from '../img/products/elementSection.webp';
import sectionPicBack from '../img/products/elementSectionBack.webp';


//factory function to product object for each item
const product = (name, pic, picBack, description, type, brand, price, inStock, id, featured=false) => {
    return { name, pic, picBack, description, type, brand, price, inStock, id, featured };
};

const girlBrophy93 = new product(
    'Girl Brophy 93 Til Deck',
    brophyPic,
    brophyPicBack,
    '8.25 x 31.75',
    'deck',
    'girl',
    49.98,
    'Yes',
    101,
    
)

const girlMcCrank = new product(
    'Girl McCrank International OG Deck',
    mcCrankPic,
    mcCrankPicBack,
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
    maltoPicBack,
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
    sectionPicBack,
    '8.0 x 31.75',
    'deck',
    'element',
    56.99,
    'Yes',
    104,
    true,
)


export const products = [girlBrophy93, girlMcCrank, girlMalto, elementSection];
