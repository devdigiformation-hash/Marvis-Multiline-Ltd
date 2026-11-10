export interface VehicleItem {
  id: string;
  slug: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  bodyType: string;
  color: string;
  regMasked: string;
  engineSize: string;
  description: string;
  features: string[];
  image: string;
  status: 'Available' | 'Reserved' | 'In Inspection';
}

export interface RetailProduct {
  id: string;
  slug: string;
  category: 'hair-beauty' | 'fashion' | 'household';
  categoryTitle: string;
  title: string;
  brand: string;
  price: number;
  inStock: boolean;
  stockCount: number;
  rating?: number;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
  image: string;
  variants?: string[];
}

export interface TransportService {
  id: string;
  title: string;
  tagline: string;
  fleetVehicle: string;
  maxPayload: string;
  typicalUse: string;
  features: string[];
}

export const MARVIS_WHATSAPP_NUMBER = '447442807141';
export const MARVIS_WHATSAPP_PREFILLED_MESSAGE = 'Hello MARVIS MULTILINE LTD, I would like to enquire about your services.';
export const MARVIS_WHATSAPP_URL = `https://wa.me/${MARVIS_WHATSAPP_NUMBER}?text=${encodeURIComponent(MARVIS_WHATSAPP_PREFILLED_MESSAGE)}`;

export const COMPANY_INFO = {
  name: 'Marvis Multiline Ltd',
  email: 'cyclecarts@gmail.com',
  phone: '07442807141',
  phoneHref: 'tel:+447442807141',
  whatsappNumber: MARVIS_WHATSAPP_NUMBER,
  whatsappUrl: MARVIS_WHATSAPP_URL,
  currency: 'GBP (£)',
  divisions: [
    { id: '01', name: 'Used Vehicle Sales', slug: 'used-vehicles', cta: 'Explore Vehicles' },
    { id: '02', name: 'Transport Support', slug: 'transport-support', cta: 'Request Transport Quote' },
    { id: '03', name: 'Hair & Beauty Products', slug: 'hair-beauty', cta: 'Shop Hair & Beauty' },
    { id: '04', name: 'Fashion Retail', slug: 'fashion', cta: 'Shop Fashion' },
    { id: '05', name: 'Household Products', slug: 'household', cta: 'Shop Household Products' },
  ],
  disclaimer: 'Marvis Multiline Ltd operates verified commercial divisions across the United Kingdom. All vehicle and transport services are subject to physical inspection and custom quotation.'
};

export const VEHICLES_DATA: VehicleItem[] = [
  {
    id: 'veh-01',
    slug: 'bmw-520d-m-sport-2021',
    title: 'BMW 5 Series 520d M Sport Saloon',
    make: 'BMW',
    model: '520d M Sport',
    year: 2021,
    price: 24950,
    mileage: 38400,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Saloon',
    color: 'Sapphire Black Metallic',
    regMasked: 'MV21 ***',
    engineSize: '2.0L TwinPower Turbo',
    description: 'Executive saloon in pristine showroom condition with full digital service history, M Sport aerodynamic package, 19-inch bicolour alloys, Harmon Kardon sound, and ambient interior lighting.',
    features: ['Live Cockpit Professional', 'Park Assist with Reversing Camera', 'Heated Dakota Leather Seats', 'Apple CarPlay & Android Auto', 'M Sport Braking System'],
    image: '/media/chapters/used-vehicles/frames/frame_015.jpg',
    status: 'Available'
  },
  {
    id: 'veh-02',
    slug: 'mercedes-e220d-amg-line-2022',
    title: 'Mercedes-Benz E-Class E220d AMG Line Night Edition',
    make: 'Mercedes-Benz',
    model: 'E220d AMG Line',
    year: 2022,
    price: 28750,
    mileage: 29500,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Saloon',
    color: 'Iridium Silver Metallic',
    regMasked: 'ML22 ***',
    engineSize: '2.0L 9G-TRONIC',
    description: 'Striking Mercedes-Benz executive cruiser with Night Edition black styling accents, panoramic glass sliding sunroof, widescreen digital cockpit, and Burmester premium audio.',
    features: ['Panoramic Glass Sunroof', 'Burmester Surround Sound', 'Active Brake Assist', 'Multibeam LED Headlights', 'Wireless Smartphone Charging'],
    image: '/media/chapters/used-vehicles/frames/frame_035.jpg',
    status: 'Available'
  },
  {
    id: 'veh-03',
    slug: 'audi-a6-s-line-black-edition-2021',
    title: 'Audi A6 40 TDI S Line Black Edition',
    make: 'Audi',
    model: 'A6 40 TDI S Line',
    year: 2021,
    price: 26400,
    mileage: 34100,
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Saloon',
    color: 'Daytona Grey Pearl',
    regMasked: 'MV71 ***',
    engineSize: '2.0L S tronic Mild Hybrid',
    description: 'Sophisticated Audi A6 featuring black optics styling package, matrix LED technology, dual MMI touch response screens, and Valcona leather sports seats.',
    features: ['Audi Virtual Cockpit Plus', 'Matrix LED Headlights', '20-inch V-Spoke Alloys', 'MMI Navigation Plus', 'Lane Departure Warning'],
    image: '/media/chapters/used-vehicles/frames/frame_055.jpg',
    status: 'Available'
  },
  {
    id: 'veh-04',
    slug: 'volkswagen-tiguan-r-line-2022',
    title: 'Volkswagen Tiguan 2.0 TSI R-Line 4Motion',
    make: 'Volkswagen',
    model: 'Tiguan R-Line',
    year: 2022,
    price: 27900,
    mileage: 26200,
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Pure White Gloss',
    regMasked: 'MV22 ***',
    engineSize: '2.0L TSI AWD',
    description: 'High-spec family SUV offering dynamic all-wheel drive stability, digital cockpit pro, heated steering wheel, keyless access, and electronic hands-free tailgate.',
    features: ['4Motion All-Wheel Drive', 'Panoramic Sunroof', 'Adaptive Cruise Control (ACC)', 'IQ.Light Matrix LEDs', 'Hands-Free Power Boot'],
    image: '/media/chapters/used-vehicles/frames/frame_065.jpg',
    status: 'In Inspection'
  }
];

export const TRANSPORT_SERVICES: TransportService[] = [
  {
    id: 'ts-01',
    title: 'Nationwide Heavy Haulage & Freight',
    tagline: 'Reliable point-to-point trunking across mainland UK motorway corridors.',
    fleetVehicle: 'Mercedes-Benz Actros GigaSpace (Reg: MV23 MLT)',
    maxPayload: 'Up to 28,000 kg (Curtainsider / Box Trailer)',
    typicalUse: 'Commercial pallet delivery, bulk retail distribution, industrial shipments.',
    features: ['GPS real-time fleet tracking', 'Fully insured Goods in Transit cover', 'Signed Proof of Delivery (e-POD)', 'Flexible 24/7 route scheduling']
  },
  {
    id: 'ts-02',
    title: 'Dedicated Direct-Drive Courier',
    tagline: 'Time-critical single-consignment express transport with zero transshipment.',
    fleetVehicle: 'High-Roof Long-Wheelbase Mercedes Sprinter',
    maxPayload: 'Up to 1,400 kg (Up to 4 Euro Pallets)',
    typicalUse: 'Same-day urgent parts, high-value freight, direct retail replenishment.',
    features: ['Sole-occupancy dedicated vehicle', 'Tail-lift equipped options', 'Direct depot-to-door transit', 'Instant electronic proof on delivery']
  },
  {
    id: 'ts-03',
    title: 'Scheduled Regional Replenishment',
    tagline: 'Consolidated commercial linehaul linking supplier hubs with regional stores.',
    fleetVehicle: 'Multi-axle Rigid & Articulated Units',
    maxPayload: 'Multi-drop distribution configurations',
    typicalUse: 'Regular weekly multi-stop store supply and B2B stock transfers.',
    features: ['Discounted contract pricing', 'Dedicated account manager', 'Flexible dock loading coordination', 'Full environmental emissions compliance']
  }
];

export const RETAIL_PRODUCTS: RetailProduct[] = [
  // Hair & Beauty (Men's Grooming only, no female imagery, retail products)
  {
    id: 'hb-01',
    slug: 'marvis-multiline-artisan-beard-conditioning-elixir',
    category: 'hair-beauty',
    categoryTitle: 'Hair & Beauty Products',
    title: 'Artisan Beard Conditioning & Growth Elixir (50ml)',
    brand: 'Marvis Multiline Grooming',
    price: 18.50,
    inStock: true,
    stockCount: 84,
    description: 'Formulated with organic cold-pressed Moroccan argan oil, golden jojoba, and cedarwood extract. Hydrates facial hair, softens coarse whiskers, and soothes sensitive skin beneath.',
    specs: [
      { label: 'Volume', value: '50ml (1.7 fl oz)' },
      { label: 'Key Ingredients', value: 'Organic Argan Oil, Jojoba Oil, Vitamin E, Cedarwood' },
      { label: 'Skin Type', value: 'All skin types including sensitive' },
      { label: 'Origin', value: 'Manufactured in the UK' }
    ],
    tags: ['Beard Care', 'Organic', 'Men\'s Grooming', 'Essential Oils'],
    image: '/media/chapters/hair-beauty/frames/frame_020.jpg'
  },
  {
    id: 'hb-02',
    slug: 'matte-finish-styling-clay-pomade',
    category: 'hair-beauty',
    categoryTitle: 'Hair & Beauty Products',
    title: 'High-Hold Matte Clay Styling Pomade (100ml)',
    brand: 'Marvis Multiline Grooming',
    price: 16.00,
    inStock: true,
    stockCount: 112,
    description: 'Strong, pliable all-day hold with a natural non-greasy matte texture. Easily washes out with warm water, enriched with bentonite clay and natural beeswax for clean control.',
    specs: [
      { label: 'Hold', value: 'Strong (8/10)' },
      { label: 'Finish', value: 'Zero-shine Natural Matte' },
      { label: 'Weight', value: '100ml (3.4 oz)' },
      { label: 'Application', value: 'Dry or towel-damp hair' }
    ],
    tags: ['Hair Styling', 'Matte Clay', 'High Hold', 'Water Soluble'],
    image: '/media/chapters/hair-beauty/frames/frame_040.jpg'
  },
  {
    id: 'hb-03',
    slug: 'invigorating-tea-tree-scalp-shampoo',
    category: 'hair-beauty',
    categoryTitle: 'Hair & Beauty Products',
    title: 'Invigorating Scalp Revitalising Shampoo (250ml)',
    brand: 'Marvis Multiline Grooming',
    price: 14.50,
    inStock: true,
    stockCount: 65,
    description: 'Refreshing daily cleanser infused with natural tea tree, peppermint leaf oil, and provitamin B5. Clears build-up, stimulates root circulation, and leaves scalp clean and invigorated.',
    specs: [
      { label: 'Volume', value: '250ml' },
      { label: 'Key Actives', value: 'Tea Tree Oil, Peppermint, Panthenol' },
      { label: 'Formula', value: 'Sulphate & Paraben Free' }
    ],
    tags: ['Hair Care', 'Scalp Care', 'Tea Tree', 'Daily Cleanser'],
    image: '/media/chapters/hair-beauty/frames/frame_060.jpg'
  },

  // Fashion (Men's apparel only, jackets, shirts, suits, coats)
  {
    id: 'fash-01',
    slug: 'tailored-navy-wool-blend-overcoat',
    category: 'fashion',
    categoryTitle: 'Fashion Retail',
    title: 'Tailored Navy Wool-Blend Double-Breasted Overcoat',
    brand: 'Marvis Multiline Menswear',
    price: 149.00,
    inStock: true,
    stockCount: 22,
    variants: ['38R', '40R', '42R', '44R'],
    description: 'Crafted from a heavyweight British wool-blend with satin lining, peaked lapels, structured shoulders, and horn buttons. Designed for timeless British winter style and supreme warmth.',
    specs: [
      { label: 'Material', value: '70% Wool, 25% Polyamide, 5% Cashmere' },
      { label: 'Lining', value: '100% Cupro Satin' },
      { label: 'Fit', value: 'Tailored Slim-Regular' },
      { label: 'Care', value: 'Specialist Dry Clean Only' }
    ],
    tags: ['Outerwear', 'Overcoats', 'Tailoring', 'British Wool'],
    image: '/media/chapters/fashion/frames/frame_025.jpg'
  },
  {
    id: 'fash-02',
    slug: 'classic-oxford-cotton-button-down-shirt',
    category: 'fashion',
    categoryTitle: 'Fashion Retail',
    title: 'Signature Oxford 100% Cotton Button-Down Shirt',
    brand: 'Marvis Multiline Menswear',
    price: 45.00,
    inStock: true,
    stockCount: 50,
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight two-ply combed cotton Oxford cloth woven for longevity and comfort. Features a relaxed roll button-down collar, single chest pocket, and mother-of-pearl buttons.',
    specs: [
      { label: 'Material', value: '100% Long-Staple Combed Cotton' },
      { label: 'Weave', value: 'Pinpoint Oxford 160gsm' },
      { label: 'Collar', value: 'Casual Roll Button-Down' },
      { label: 'Colors', value: 'Sky Blue, Crisp White, Navy' }
    ],
    tags: ['Shirts', 'Oxford Cotton', 'Smart Casual', 'Everyday Luxury'],
    image: '/media/chapters/fashion/frames/frame_045.jpg'
  },
  {
    id: 'fash-03',
    slug: 'heavyweight-cotton-crewneck-tshirt',
    category: 'fashion',
    categoryTitle: 'Fashion Retail',
    title: 'Luxury 240gsm Heavyweight Crewneck T-Shirt',
    brand: 'Marvis Multiline Menswear',
    price: 28.00,
    inStock: true,
    stockCount: 78,
    variants: ['S', 'M', 'L', 'XL'],
    description: 'Substantial, structured everyday t-shirt made from pre-shrunk combed organic cotton jersey. Built with double-needle ribbed collar that holds shape wash after wash.',
    specs: [
      { label: 'Weight', value: '240 GSM Heavyweight Jersey' },
      { label: 'Material', value: '100% Organic Ring-Spun Cotton' },
      { label: 'Fit', value: 'Modern Relaxed Box Cut' }
    ],
    tags: ['T-Shirts', 'Heavyweight', 'Organic Cotton', 'Essentials'],
    image: '/media/chapters/fashion/frames/frame_065.jpg'
  },

  // Household Products (appliances, cookware, storage, cleaning)
  {
    id: 'hh-01',
    slug: 'digital-rapid-air-fryer-7l-pro',
    category: 'household',
    categoryTitle: 'Household Products Retail',
    title: 'Digital Rapid Air Fryer & Multi-Cooker Pro (7.2L XXL)',
    brand: 'Marvis Multiline Home',
    price: 89.99,
    inStock: true,
    stockCount: 36,
    description: 'High-capacity 1800W digital air fryer with 360-degree rapid heat circulation, 10 one-touch cooking presets, non-stick dishwasher-safe crisper basket, and smart viewing window.',
    specs: [
      { label: 'Capacity', value: '7.2 Litres (Feeds up to 6 people)' },
      { label: 'Power', value: '1800W Energy-Efficient UK Plug' },
      { label: 'Temperature', value: '40°C to 205°C Precise Digital Control' },
      { label: 'Warranty', value: '2 Years Manufacturer UK Guarantee' }
    ],
    tags: ['Kitchen Appliances', 'Air Fryer', 'Healthy Cooking', 'Energy Saving'],
    image: '/media/chapters/household/frames/frame_025.jpg'
  },
  {
    id: 'hh-02',
    slug: 'tri-ply-stainless-steel-cookware-set-6pc',
    category: 'household',
    categoryTitle: 'Household Products Retail',
    title: 'Tri-Ply Heavy Gauge Stainless Steel Cookware Set (6-Piece)',
    brand: 'Marvis Multiline Home',
    price: 129.50,
    inStock: true,
    stockCount: 18,
    description: 'Professional grade 3-layer induction cookware featuring an aluminium core bonded between two layers of premium 18/10 stainless steel for uniform, hotspot-free heat distribution.',
    specs: [
      { label: 'Includes', value: '16cm Saucepan, 20cm Saucepan, 24cm Stockpot with Glass Lids' },
      { label: 'Compatibility', value: 'Induction, Gas, Electric, Ceramic, Oven safe to 260°C' },
      { label: 'Handles', value: 'Ergonomic Cast Stainless Steel Riveted' }
    ],
    tags: ['Cookware', 'Stainless Steel', 'Induction Ready', 'Chef Grade'],
    image: '/media/chapters/household/frames/frame_045.jpg'
  },
  {
    id: 'hh-03',
    slug: 'cordless-cyclonic-stick-vacuum-cleaner',
    category: 'household',
    categoryTitle: 'Household Products Retail',
    title: 'Cordless Ultra-Light Cyclonic Stick Vacuum Cleaner',
    brand: 'Marvis Multiline Home',
    price: 119.00,
    inStock: true,
    stockCount: 29,
    description: 'Powerful 350W brushless motor generating 26kPa fade-free suction with multi-stage HEPA filtration capturing 99.97% of fine dust and allergens. Up to 50 minutes runtime.',
    specs: [
      { label: 'Suction Power', value: '26,000 Pa (26kPa)' },
      { label: 'Battery', value: 'Detachable 25.2V Lithium-Ion (Up to 50 mins)' },
      { label: 'Filtration', value: '4-Stage Washable H13 HEPA Filter' },
      { label: 'Weight', value: '1.45 kg Handheld Body' }
    ],
    tags: ['Home Cleaning', 'Cordless Vacuum', 'HEPA Filtration', 'Pet Friendly'],
    image: '/media/chapters/household/frames/frame_065.jpg'
  }
];
