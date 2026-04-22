// Importing all local product images
import shilajitComboA from '../assets/imgs/SHILAJIT COMBO A.png';
import shilajitCapH from '../assets/imgs/Shilajit Capsule H.png';
import shilajitCap1 from '../assets/imgs/Shilajit Capsule 1 I.png';
import sexualBoosterM from '../assets/imgs/Sexual Booster Kit M.png';
import sexualBoosterL from '../assets/imgs/Sexual Booster kit L.png';
import fatBurnerP from '../assets/imgs/Fat Burner Capsule  P.png';
import nightCareK from '../assets/imgs/Full Night Care Kit  K.png';
import almaShakti from '../assets/imgs/Alma Shakti Capsule .png';
import alwaysFit from '../assets/imgs/Always Fit Syrup U.png';
import diabakill from '../assets/imgs/Diabakill Powder  P.png';
import germaniGold from '../assets/imgs/Germani Gold Powder O.png';
import husneAzalG from '../assets/imgs/Husn-e-Azal Capsule G.png';
import husneAzalW from '../assets/imgs/Husn-e-Azal Capsule W.png';
import husneAzalCombo from '../assets/imgs/Husn-e-Azal Combo B.png';
import husneAzalKit from '../assets/imgs/Husn-e-Azal Kit D.png';
import navcough from '../assets/imgs/Navcough syrup X.png';
import navyangOil from '../assets/imgs/Navyang Oil E.png';
import navyangTila from '../assets/imgs/Navyang Tila F.png';
import orthoCare from '../assets/imgs/Ortho Care kit  Q.png';
import orthoCissus from '../assets/imgs/Ortho Cissus Tablet  R.png';
import orthoOil from '../assets/imgs/Ortho oil  S.png';
import pilesCapsule from '../assets/imgs/piles capsule Z.png';
import pilesCareKitV from '../assets/imgs/piles care kit  V.png';
import pilesCareKitT from '../assets/imgs/piles care kit T.png';
import pilesOil from '../assets/imgs/piles oil  Y.png';
import sexualShilajit from '../assets/imgs/Sexual Shilajit Kit  J.png';
import shilajitKitC from '../assets/imgs/Shilajit Kit C.png';
import set1 from '../assets/imgs/set 1.jpg.jpeg';

export const productsData = [
  {
    id: 'tiger-shilajit-combo',
    name: 'Shilajit Combo',
    original: '₹2,998.00',
    current: '₹2,698.00',
    image: shilajitComboA,
    overview: 'This special high-power kit combines the strength of pure Shilajit with potent Ayurvedic herbs to enhance vitality and stamina.',
    benefits: ['Increases stamina', 'Supports vitality', 'Mineral rich'],
    usage: 'Take 1 capsule twice a day with milk.'
  },
  {
    id: 'night-power-capsules',
    name: 'Shilajit Capsule',
    original: '₹1,299.00',
    current: '₹1,099.00',
    image: shilajitCapH,
    overview: 'Formulated to provide sustained energy and support male health.',
    benefits: ['Boosts confidence', 'Improves energy', '100% Natural'],
    usage: '1 capsule at night before bed.'
  },
  {
    id: 'shilajit-capsules-60',
    name: 'Shilajit Capsule (Premium)',
    original: '₹2,999.00',
    current: '₹2,499.00',
    image: shilajitCap1,
    overview: 'Pure Himalayan Shilajit for detoxification and rejuvenation.',
    benefits: ['Super antioxidant', 'Immune support'],
    usage: 'One capsule daily.'
  },
  {
    id: 'booster-tiger-premium',
    name: 'Sexual Booster Kit',
    original: '₹4,197.00',
    current: '₹3,197.00',
    image: sexualBoosterL,
    overview: 'A premium kit for ultimate performance and strength.',
    benefits: ['Max power', 'Natural ingredients'],
    usage: 'Follow kit guidance.'
  },
  {
    id: 'booster-tiger-basic',
    name: 'Sexual Booster Kit (Variant)',
    original: '₹3,797.00',
    current: '₹3,097.00',
    image: sexualBoosterM,
    overview: 'Effective vitality booster for daily energy.',
    benefits: ['Strength', 'Focus'],
    usage: '1 capsule twice daily.'
  },
  {
    id: 'fat-burner-capsule',
    name: 'Fat Burner Capsule',
    original: '₹1,699.00',
    current: '₹1,499.00',
    image: fatBurnerP,
    overview: 'Natural weight management solution.',
    benefits: ['Boosts metabolism', 'Fat reduction'],
    usage: '1 capsule before meals.'
  },
  {
    id: 'full-night-care-kit',
    name: 'Full Night Care Kit',
    original: '₹3,597.00',
    current: '₹2,997.00',
    image: nightCareK,
    overview: 'Complete care kit for evening wellness.',
    benefits: ['Relaxation', 'Stamina'],
    usage: 'Refer to manual.'
  },
  {
    id: 'alma-shakti',
    name: 'Alma Shakti Capsule',
    original: '₹1,699.00',
    current: '₹1,499.00',
    image: almaShakti,
    overview: 'Natural strength and immunity booster.',
    benefits: ['Vigour', 'Immunity'],
    usage: '1 capsule per day.'
  },
  { id: 'always-fit', name: 'Always Fit Syrup', original: '₹1,399.00', current: '₹1,299.00', image: alwaysFit, overview: 'General health tonic.', benefits: ['Appetite', 'Digestion'], usage: '2 spoons daily.' },
  { id: 'diabakill', name: 'Diabakill Powder', original: '₹1,199.00', current: '₹1,099.00', image: diabakill, overview: 'Diabetes management.', benefits: ['Sugar control'], usage: '1 spoon with water.' },
  { id: 'germani-gold', name: 'Germani Gold Powder', original: '₹1,299.00', current: '₹1,199.00', image: germaniGold, overview: 'Premium energy powder.', benefits: ['Gold standard vigour'], usage: '1 scoop daily.' },
  { id: 'husne-azal', name: 'Husn-e-Azal Capsule', original: '₹1,699.00', current: '₹1,499.00', image: husneAzalG, overview: 'Skin and beauty.', benefits: ['Glow'], usage: '1 capsule night.' },
  { id: 'husne-azal-white', name: 'Husn-e-Azal Capsule (Variant)', original: '₹1,199.00', current: '₹1,099.00', image: husneAzalW, overview: 'Skin brightening.', benefits: ['Radiance'], usage: '1 capsule night.' },
  { id: 'husne-azal-combo', name: 'Husn-e-Azal Tila Kit', original: '₹2,898.00', current: '₹2,398.00', image: husneAzalCombo, overview: 'Full beauty treatment.', benefits: ['Complete care'], usage: 'See manual.' },
  { id: 'husne-azal-kit', name: 'Husn-e-Azal Kit', original: '₹5,497.00', current: '₹3,997.00', image: husneAzalKit, overview: 'Premium beauty kit.', benefits: ['All-in-one'], usage: 'Daily routine.' },
  { id: 'navcough', name: 'Navcough Syrup', original: '₹1,599.00', current: '₹1,399.00', image: navcough, overview: 'Cough relief.', benefits: ['Instant comfort'], usage: '3 times daily.' },
  { id: 'navyang-oil', name: 'Navyang Oil', original: '₹799.00', current: '₹699.00', image: navyangOil, overview: 'Vitality oil.', benefits: ['Local application'], usage: 'Massage gently.' },
  { id: 'navyang-tila', name: 'Navyang Tila', original: '₹1,199.00', current: '₹999.00', image: navyangTila, overview: 'Premium Tila.', benefits: ['Traditional strength'], usage: 'Follow directions.' },
  { id: 'ortho-care', name: 'Ortho Care Kit', original: '₹2,298.00', current: '₹2,098.00', image: orthoCare, overview: 'Joint and bone care.', benefits: ['Mobility'], usage: 'Kit routine.' },
  { id: 'ortho-cissus', name: 'Ortho Cissus Tablet', original: '₹1,299.00', current: '₹1,199.00', image: orthoCissus, overview: 'Bone strength.', benefits: ['Calcium богатый'], usage: '1 tablet daily.' },
  { id: 'ortho-oil', name: 'Ortho Oil', original: '₹999.00', current: '₹899.00', image: orthoOil, overview: 'Joint pain relief.', benefits: ['Deep penetration'], usage: 'Massage on joints.' },
  { id: 'piles-capsule', name: 'Piles Capsule', original: '₹1,499.00', current: '₹1,399.00', image: pilesCapsule, overview: 'Piles treatment.', benefits: ['Pain relief'], usage: '1 capsule morning.' },
  { id: 'piles-care-v', name: 'Piles Care Kit', original: '₹2,398.00', current: '₹2,048.00', image: pilesCareKitV, overview: 'Complete piles solution.', benefits: ['Holistic healing'], usage: 'Kit manual.' },
  { id: 'piles-oil', name: 'Piles Oil', original: '₹899.00', current: '₹799.00', image: pilesOil, overview: 'Soothing oil.', benefits: ['Relief'], usage: 'Apply as needed.' },
  { id: 'sexual-shilajit', name: 'Sexual Shilajit Kit', original: '₹3,797.00', current: '₹3,097.00', image: sexualShilajit, overview: 'Vitality focus.', benefits: ['Max vigour'], usage: 'See manual.' },
  { id: 'shilajit-kit-c', name: 'Shilajit Kit', original: '₹3,697.00', current: '₹3,197.00', image: shilajitKitC, overview: 'Complete Shilajit kit.', benefits: ['Pure strength'], usage: 'Daily kit steps.' }
];

export const getProductById = (id) => {
  return productsData.find(p => p.id === id) || {
    id,
    name: 'Salamati Product',
    original: '₹0.00',
    current: '₹0.00',
    image: '',
    overview: 'High quality Ayurvedic medicine from Salamati Ayurveda.',
    benefits: ['Pure Herbs', 'Lab Tested', 'Effective'],
    usage: 'Consult your physician.'
  };
};
