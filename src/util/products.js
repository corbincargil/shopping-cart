import brophyPic from '../img/products/girlBrophy.webp';
import brophyPicBack from '../img/products/girlBrophyBack.webp';
import mcCrankPic from '../img/products/girlMcCrank.webp';
import mcCrankPicBack from '../img/products/girlMcCrankBack.webp';
import maltoPic from '../img/products/girlMalto.webp';
import maltoPicBack from '../img/products/girlMaltoBack.webp';
import sectionPic from '../img/products/elementSection.webp';
import sectionPicBack from '../img/products/elementSectionBack.webp';
import quadrantPic from '../img/products/elementQuadrant.webp';
import quadrantPicBack from '../img/products/elementQuadrantBack.webp';
import whiteyPic from '../img/products/enjoiWhitey.webp';
import whiteyPicBack from '../img/products/enjoiWhiteyBack.webp';
import spectrumPic from '../img/products/enjoiSpectrum.webp';
import spectrumPicBack from '../img/products/enjoiSpectrumBack.webp';
import butterflyPic from '../img/products/planBButterfly.webp';
import butterflyPicBack from '../img/products/planBButterflyBack.webp';
import mummyPic from '../img/products/planBMummy.webp';
import mummyPicBack from '../img/products/planBMummyBack.webp';
import eyePic from '../img/products/toyMachineEye.webp';
import eyePicBack from '../img/products/toyMachineEyeBack.webp';
import facePic from '../img/products/toyMachineFace.webp';
import facePicBack from '../img/products/toyMachineFaceBack.webp';
import skullPic from '../img/products/zeroSkull.webp';
import skullPicBack from '../img/products/zeroSkullBack.webp';
import boldPic from '../img/products/zeroBold.webp';
import boldPicBack from '../img/products/zeroBoldBack.webp';
import trucksPic from '../img/products/trucks.webp';
import trucksPicBack from '../img/products/trucksBack.webp';
import wheelsPic from '../img/products/wheels.webp';
import wheelsPicBack from '../img/products/wheelsBack.webp';





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
    true
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

const elementQuadrant = new product(
    'Element Quadrant Deck',
    quadrantPic,
    quadrantPicBack,
    '8.0 x 31.75',
    'deck',
    'element',
    56.99,
    'Yes',
    105,

)

const enjoiWhitey = new product(
    'Enjoi Whitey Panda Deck',
    whiteyPic,
    whiteyPicBack,
    '7.75 x 31.5',
    'deck',
    'enjoi',
    64.95,
    'Yes',
    106,
    
)

const enjoiSpectrum = new product(
    'Enjoi Spectrum White Deck',
    spectrumPic,
    spectrumPicBack,
    '9.0 x 32.14',
    'deck',
    'enjoi',
    64.95,
    'Yes',
    107,

)

const planBButterfly = new product(
    'Plan B McClung Butterfly Deck',
    butterflyPic,
    butterflyPicBack,
    '8.25 x 31.77',
    'deck',
    'planB',
    71.50,
    'Yes',
    108,

)

const planBMummy = new product(
    'Plan B Sheckler Mummy Deck',
    mummyPic,
    mummyPicBack,
    '8.25 x 31.77',
    'deck',
    'planB',
    71.50,
    'Yes',
    109,

)

const toyMachineEye = new product(
    'Toy Machine Mad Eye Yellow Deck',
    eyePic,
    eyePicBack,
    '8.38 x 32',
    'deck',
    'toyMachine',
    54.99,
    'Yes',
    110,
    
)

const toyMachineFace = new product(
    'Toy Machine Monster Face Deck',
    facePic,
    facePicBack,
    '8.0 x 31.6',
    'deck',
    'toyMachine',
    54.99,
    'Yes',
    111,
    true
)

const zeroSkull = new product(
    'Zero Single Skull Deck',
    skullPic,
    skullPicBack,
    '8.0 x 31.6',
    'deck',
    'zero',
    60.99,
    'Yes',
    112,
    
)

const zeroBold = new product(
    'Zero Bold Deck',
    boldPic,
    boldPicBack,
    '8.25 x 31.9',
    'deck',
    'zero',
    60.99,
    'Yes',
    113,
    
)

const trucks = new product(
    'Ace AF1 Truck',
    trucksPic,
    trucksPicBack,
    'Polished',
    'trucks',
    'ace',
    31.99,
    'Yes',
    201,
    
)

const wheels = new product(
    'Spitfire Formula 4 Wheels',
    wheelsPic,
    wheelsPicBack,
    'Sizes: 52mm-56mm ',
    'wheels',
    'spitFire',
    40.00,
    'Yes',
    202,
    
)

export const products = [girlBrophy93, girlMcCrank, girlMalto, elementSection, elementQuadrant,enjoiWhitey,enjoiSpectrum,planBButterfly,planBMummy,toyMachineEye,toyMachineFace,zeroSkull,zeroBold,trucks,wheels];
