export interface RepairServiceItem {
  id: string;
  slug: string;
  title: string;
  division: 'car-repairing' | 'cycle-repairing';
  tagline: string;
  description: string;
  features: string[];
  typicalDuration: string;
  enquiryPrompt: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: 'Automotive Repairs' | 'Bicycle Workshop';
  location: 'United Kingdom (On-site Workshop)';
  type: 'Full-time' | 'Full-time / Flexible';
  salaryGuide: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const MARVIS_WHATSAPP_NUMBER = '447442807141';
export const MARVIS_WHATSAPP_PREFILLED_MESSAGE = 'Hello MARVIS MULTILINE LTD, I would like to enquire about your car and cycle repair services.';
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
    { id: '01', name: 'Car Repairing', slug: 'car-repairing', cta: 'Explore Car Repairs' },
    { id: '02', name: 'Cycle Repairing', slug: 'cycle-repairing', cta: 'Explore Cycle Repairs' },
  ],
  disclaimer: 'Marvis Multiline Ltd operates dedicated independent automotive and bicycle repair services across the United Kingdom. All repair and inspection services are subject to physical mechanical check and custom quotation. Video footage and imagery on this website are illustrative stock-style media and do not depict specific customer vehicles, proprietary premises or private workshops.'
};

export const CAR_REPAIR_SERVICES: RepairServiceItem[] = [
  {
    id: 'car-srv-01',
    slug: 'engine-diagnostics-fault-finding',
    division: 'car-repairing',
    title: 'Engine Diagnostics & Electronic Fault Analysis',
    tagline: 'Comprehensive electronic scanning to identify warning lights, sensor faults, and management issues.',
    description: 'Using professional automotive diagnostic equipment, we scan engine management, ABS, airbag, and transmission modules to pinpoint intermittent and persistent fault codes accurately before carrying out targeted repairs.',
    features: [
      'Full electronic OBD-II diagnostic scanning',
      'Live sensor data stream verification',
      'Engine management warning light diagnostics',
      'Itemised diagnostic report with quotation prior to repair work'
    ],
    typicalDuration: 'From 45–60 minutes diagnostic scan',
    enquiryPrompt: 'Book an engine diagnostic scan'
  },
  {
    id: 'car-srv-02',
    slug: 'brake-system-service-replacement',
    division: 'car-repairing',
    title: 'Brake Disc, Pad & Hydraulic Inspection',
    tagline: 'Safety-critical braking assessment, disc measurement, pad fitting, and fluid replacement.',
    description: 'Thorough examination of brake disc thickness, pad wear levels, callipers, flexi-hoses, and brake fluid boiling points to ensure responsive, dependable stopping power compliant with UK road safety regulations.',
    features: [
      'Digital vernier disc thickness & runout measurement',
      'Premium OEM-quality brake pad fitment',
      'Calliper slider inspection and lubrication',
      'Brake fluid moisture check and bleed service'
    ],
    typicalDuration: '1–2 hours depending on axle configuration',
    enquiryPrompt: 'Request a brake inspection'
  },
  {
    id: 'car-srv-03',
    slug: 'routine-interim-full-servicing',
    division: 'car-repairing',
    title: 'Routine Maintenance, Oil & Filter Servicing',
    tagline: 'Manufacturer-specification scheduled servicing to protect engine longevity and fuel efficiency.',
    description: 'Scheduled maintenance tailored to your vehicle mileage and manufacturer service schedule. Includes premium synthetic engine oil, genuine specification oil, air, and cabin filters, and a comprehensive multi-point vehicle health check.',
    features: [
      'Manufacturer-specification synthetic engine oil change',
      'Air, oil, and pollen filter replacement',
      'Coolant, washer fluid, and battery condition checks',
      'Comprehensive underbody and safety check checklist'
    ],
    typicalDuration: '2–3 hours for full service schedule',
    enquiryPrompt: 'Schedule interim or full service'
  },
  {
    id: 'car-srv-04',
    slug: 'suspension-steering-overhaul',
    division: 'car-repairing',
    title: 'Suspension, Steering & Bushing Repairs',
    tagline: 'Resolving knocking noises, uneven tyre wear, and loose steering for stable handling.',
    description: 'Detailed mechanical check of shock absorbers, coil springs, ball joints, anti-roll bar drop links, track rod ends, and suspension arms to eliminate play and restore original ride quality and road safety.',
    features: [
      'Shock absorber damping and leakage testing',
      'Road spring fracture and fatigue inspection',
      'Track rod end and steering rack play assessment',
      'Replacement using certified automotive components'
    ],
    typicalDuration: '1.5–3 hours per assembly',
    enquiryPrompt: 'Enquire about suspension & steering repair'
  },
  {
    id: 'car-srv-05',
    slug: 'pre-mot-safety-inspection',
    division: 'car-repairing',
    title: 'Pre-MOT Inspection & Mechanical Readiness',
    tagline: 'Proactive inspection to identify potential MOT test failure items before official submission.',
    description: 'Complete inspection covering lighting, tyres, suspension, emissions components, seatbelts, wipers, and horn to ensure your vehicle meets all statutory UK roadworthiness criteria.',
    features: [
      'Full exterior lighting and beam alignment check',
      'Tyre tread depth and sidewall structural inspection',
      'Exhaust system integrity and mounting check',
      'Clear, honest quotation for any necessary rectifications'
    ],
    typicalDuration: '1 hour comprehensive check',
    enquiryPrompt: 'Book pre-MOT inspection'
  }
];

export const CYCLE_REPAIR_SERVICES: RepairServiceItem[] = [
  {
    id: 'cyc-srv-01',
    slug: 'comprehensive-bicycle-safety-inspection',
    division: 'cycle-repairing',
    title: 'Comprehensive Bicycle Safety Check & Tune-Up',
    tagline: 'Systematic examination of frame, fasteners, drivetrain, wheels, and controls on a professional stand.',
    description: 'Ideal for commuting bikes, road bikes, and hybrid cycles. We securely mount your bicycle on a dedicated repair stand, torque every critical fastener to specification, inspect frame integrity, and ensure safe mechanical operation.',
    features: [
      'Complete fastener torque audit to manufacturer specs',
      'Frame, fork, and headset bearing inspection',
      'Tyre pressure calibration and sidewall check',
      'Chain wear measurement and lubrication'
    ],
    typicalDuration: '45 minutes',
    enquiryPrompt: 'Book bicycle safety tune-up'
  },
  {
    id: 'cyc-srv-02',
    slug: 'gear-tuning-derailleur-indexing',
    division: 'cycle-repairing',
    title: 'Gear Indexing, Cable Tension & Derailleur Tuning',
    tagline: 'Crisp, accurate shifting across all rear sprockets and front chainrings without chain rub or skipping.',
    description: 'Precision adjustment of front and rear derailleurs, high/low limit screws, B-tension, and inner cable tension. Eliminates ghost shifting, noisy chain rub, and missed gears on Shimano, SRAM, and Campagnolo systems.',
    features: [
      'High and low limit screw calibration',
      'B-tension gap adjustment for smooth chain engagement',
      'Cable tension indexing on dedicated work stand',
      'Hanger alignment check to eliminate chain skip'
    ],
    typicalDuration: '30–45 minutes',
    enquiryPrompt: 'Request gear tuning'
  },
  {
    id: 'cyc-srv-03',
    slug: 'brake-servicing-cable-hydraulic-adjustment',
    division: 'cycle-repairing',
    title: 'Brake Servicing, Pad Alignment & Cable/Hydraulic Care',
    tagline: 'Crisp lever feel and safe, predictable braking for rim, mechanical disc, and hydraulic disc systems.',
    description: 'From rim brake cable tensioning and pad toe-in alignment to hydraulic disc brake caliper centring and fluid bleed services. We eliminate brake rub and ensure immediate, reliable stopping power.',
    features: [
      'Rim and disc brake pad wear assessment',
      'Caliper alignment to prevent rotor rub',
      'Cable tension adjustment and barrel tuning',
      'Hydraulic mineral oil / DOT bleed service if required'
    ],
    typicalDuration: '45–60 minutes',
    enquiryPrompt: 'Book brake service'
  },
  {
    id: 'cyc-srv-04',
    slug: 'drivetrain-overhaul-chain-cassette',
    division: 'cycle-repairing',
    title: 'Drivetrain Degrease, Chain & Cassette Replacement',
    tagline: 'Deep cleaning, wear measurement, chain fitting, and cassette overhaul for efficient power transfer.',
    description: 'Complete removal and ultrasonic degreasing of chain, cassette, and chainrings, followed by fresh lubrication or replacement when 0.5% or 0.75% chain stretch limits have been exceeded.',
    features: [
      'Precision chain stretch gauge analysis',
      'Cassette sprocket tooth wear examination',
      'Complete drivetrain degrease and re-lube',
      'New chain sizing and master link installation'
    ],
    typicalDuration: '1 hour',
    enquiryPrompt: 'Request drivetrain service'
  },
  {
    id: 'cyc-srv-05',
    slug: 'wheel-truing-hub-bearing-adjustment',
    division: 'cycle-repairing',
    title: 'Wheel Truing, Spoke Tensioning & Hub Bearing Care',
    tagline: 'Eliminating wheel wobbles and lateral runout for smooth rolling and stable rim braking.',
    description: 'Mounted in a precision truing stand, we balance spoke tension, correct lateral and radial runout, and check hub bearings for smooth rotation without play or roughness.',
    features: [
      'Lateral and radial runout correction in truing stand',
      'Spoke tension balancing and stress relieving',
      'Hub cone and bearing play adjustment',
      'Rim brake track cleaning and inspection'
    ],
    typicalDuration: '45–60 minutes per wheel',
    enquiryPrompt: 'Book wheel truing service'
  }
];

export const CAREERS_DATA: CareerOpportunity[] = [
  {
    id: 'car-tech-01',
    title: 'Vehicle Maintenance & Service Technician',
    department: 'Automotive Repairs',
    location: 'United Kingdom (On-site Workshop)',
    type: 'Full-time',
    salaryGuide: '£28,000 – £36,000 per annum (Depending on experience and certifications)',
    summary: 'We are seeking a reliable, detail-oriented Vehicle Service Technician to carry out routine inspections, oil and filter servicing, brake replacements, and mechanical diagnostics on a wide range of light vehicles.',
    responsibilities: [
      'Perform scheduled interim and full vehicle servicing in line with manufacturer specifications.',
      'Carry out brake inspections, pad and disc replacements, and fluid servicing.',
      'Utilise diagnostic scan tools to identify vehicle fault codes and report mechanical findings.',
      'Maintain a tidy, safe, and professional workshop environment following UK health and safety standards.'
    ],
    requirements: [
      'NVQ Level 2 or 3 in Light Vehicle Maintenance & Repair (or demonstrable workshop equivalent experience).',
      'Valid UK Driving Licence with clean record.',
      'Strong diagnostic problem-solving abilities and careful mechanical craftsmanship.',
      'Good communication skills and customer-focused approach.'
    ]
  },
  {
    id: 'cyc-mech-02',
    title: 'Professional Bicycle Mechanic & Workshop Specialist',
    department: 'Bicycle Workshop',
    location: 'United Kingdom (On-site Workshop)',
    type: 'Full-time / Flexible',
    salaryGuide: '£23,000 – £28,000 per annum (Pro-rata for part-time)',
    summary: 'Seeking a skilled Bicycle Mechanic with hands-on experience in road, hybrid, and mountain bike maintenance. Responsible for gear indexing, hydraulic/mechanical brake servicing, wheel truing, and customer tune-ups.',
    responsibilities: [
      'Mount bicycles securely on repair stands and perform comprehensive multi-point safety inspections.',
      'Accurately adjust derailleurs, cable tensions, and limit screws to ensure crisp gear shifting.',
      'Service and bleed hydraulic disc brakes and replace worn cables, pads, and chains.',
      'True wheels in workshop truing stands and balance spoke tensions.'
    ],
    requirements: [
      'Cytech Level 2/3 certification or proven equivalent experience in an independent cycle workshop.',
      'Familiarity with Shimano, SRAM, and Campagnolo drivetrain and braking systems.',
      'Meticulous attention to mechanical detail and pride in workmanship.',
      'Friendly customer consultation manner.'
    ]
  }
];
