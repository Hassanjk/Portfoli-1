export const categories = [
  'All',
  'Web Design',
  'Mobile Apps',
  'E-commerce',
  'Branding',
];

export const projects = [
  {
    id: '1',
    title: 'E-commerce Landing Page',
    description:
      'A modern and conversion-focused landing page design for a Shopify-based product store, featuring dynamic product showcases and seamless checkout flow.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    category: 'E-commerce',
    tags: ['Shopify', 'UI/UX', 'E-commerce'],
    link: '#',
    year: '2024',
    client: 'Nordic Fashion Co.',
    duration: '3 months',
    fullDescription: 'A comprehensive e-commerce solution built for a Nordic fashion brand looking to expand their online presence. The project involved creating a modern, conversion-optimized landing page that showcases their premium product line while maintaining the brand\'s minimalist aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: [
      'Dynamic product showcase with 360° view',
      'Seamless checkout flow with multiple payment options',
      'Mobile-first responsive design',
      'Advanced product filtering and search',
      'Real-time inventory management'
    ],
    challenges: 'The main challenge was balancing visual appeal with conversion optimization while maintaining fast loading times across all devices.',
    solution: 'Implemented a progressive loading system with optimized images and lazy loading, combined with strategic placement of conversion elements.',
    results: [
      '147% increase in conversion rate',
      '65% improvement in page load speed',
      '89% increase in mobile engagement',
      '200% growth in average order value'
    ],
    technologies: ['React', 'TypeScript', 'Shopify Plus', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://nordicfashion.com',
    githubUrl: 'https://github.com/username/nordic-ecommerce'
  },
  {
    id: '2',
    title: 'Mobile Banking Experience',
    description:
      'Innovative mobile banking interface with focus on user security and seamless transaction experience.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Mobile Apps',
    tags: ['Mobile', 'FinTech', 'UI Design'],
    link: '#',
    year: '2024',
    client: 'SecureBank Digital',
    duration: '6 months',
    fullDescription: 'A revolutionary mobile banking application designed to provide users with a secure, intuitive, and feature-rich banking experience. The app focuses on simplifying complex financial operations while maintaining the highest security standards.',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: [
      'Biometric authentication with Face ID/Touch ID',
      'Real-time transaction notifications',
      'AI-powered spending insights',
      'Instant peer-to-peer transfers',
      'Advanced security with end-to-end encryption'
    ],
    challenges: 'Ensuring top-level security while maintaining a user-friendly interface and meeting strict financial industry regulations.',
    solution: 'Implemented multi-layered security architecture with intuitive UX patterns and conducted extensive user testing with focus groups.',
    results: [
      '95% user satisfaction rate',
      '80% reduction in support tickets',
      '300% increase in mobile transactions',
      '40% improvement in user retention'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
    liveUrl: 'https://securebank.app',
    githubUrl: 'https://github.com/username/mobile-banking'
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description:
      'Comprehensive brand identity design including logo, typography, and visual language guidelines.',
    image:
      'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Branding',
    tags: ['Branding', 'Identity', 'Guidelines'],
    link: '#',
    year: '2023',
    client: 'TechVision Startup',
    duration: '4 months',
    fullDescription: 'A complete brand identity transformation for a tech startup entering the AI market. The project encompassed logo design, typography selection, color palette development, and comprehensive brand guidelines.',
    images: [
      'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1586953982022-6ac65a651bd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: [
      'Dynamic logo system with multiple variations',
      'Comprehensive color palette with accessibility compliance',
      'Custom typography pairing',
      'Brand voice and tone guidelines',
      'Digital and print application examples'
    ],
    challenges: 'Creating a tech-forward identity that stands out in a crowded market while remaining approachable and trustworthy.',
    solution: 'Developed a modular brand system that balances innovation with reliability, using geometric forms and a carefully crafted color palette.',
    results: [
      '250% increase in brand recognition',
      '180% growth in social media engagement',
      '90% improvement in brand consistency',
      'Successfully closed Series A funding'
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InVision'],
    liveUrl: 'https://techvision.ai',
    githubUrl: undefined
  },
  {
    id: '4',
    title: 'Product Marketing Site',
    description:
      'Dynamic marketing website showcasing product features and driving user engagement.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    category: 'Web Design',
    tags: ['Web', 'Marketing', 'Animation'],
    link: '#',
    year: '2024',
    client: 'CloudSync Solutions',
    duration: '2 months',
    fullDescription: 'A high-converting marketing website for a SaaS product, featuring interactive demos, animated feature showcases, and optimized conversion funnels.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: [
      'Interactive product demos',
      'Animated feature showcases',
      'A/B tested conversion funnels',
      'Customer testimonial carousels',
      'Integration with marketing automation'
    ],
    challenges: 'Creating engaging animations and interactions while maintaining excellent performance and SEO optimization.',
    solution: 'Used modern web technologies with performance budgets and implemented progressive enhancement for animations.',
    results: [
      '320% increase in demo requests',
      '85% improvement in time on page',
      '150% boost in organic traffic',
      '45% higher conversion rate'
    ],
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Vercel', 'Contentful'],
    liveUrl: 'https://cloudsync.com',
    githubUrl: 'https://github.com/username/cloudsync-site'
  },
];
