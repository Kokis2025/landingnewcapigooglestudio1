// types.ts

// --- Global Site Settings ---
export interface GlobalSettings {
  siteTitle: string;
  logoSvg: string; // Storing SVG content as a string
}

export interface Book {
  id: string;
  title: string;
  coverImageUrl: string;
  url: string;
  description: string;
  buttonText: string;
}

export type PdfItem = Book;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}

export interface SocialLink {
    id: string;
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'dribbble';
    url: string;
}

// --- Section Specific Data Interfaces ---

export interface HeroSectionData {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  decorativeIcons: string[];
}

export interface BooksSectionData {
  title: string;
  subtitle: string;
  kdpNotice?: string;
  books: Book[];
}

export interface PdfsSectionData {
    title: string;
    subtitle: string;
    kdpNotice?: string;
    pdfs: PdfItem[];
}

export interface FeaturedProductData {
    title: string;
    product: {
        title: string;
        description: string;
        imageUrl: string;
        buttonText: string;
        buttonUrl: string;
    }
}

export interface AuthorFeature {
  id: string;
  icon: 'heart' | 'book' | 'family';
  title: string;
  description: string;
}

export interface AuthorSectionData {
  title: string;
  authorName: string;
  features: AuthorFeature[];
}

export interface ReviewsSectionData {
    title: string;
    subtitle: string;
    reviews: Review[];
}

export interface FaqSectionData {
    icon: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
}

export interface CtaSectionData {
  leftPanel: {
    icon: string;
    title: string;
    description: string;
    features: string[];
  };
  rightPanel: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    buttonText: string;
    finePrint: string;
  };
}

export interface FooterLink {
  id: string;
  text: string;
  href: string;
}

export interface FooterSectionData {
  main: {
    title: string;
    description: string;
  };
  links: {
    title: string;
    items: FooterLink[];
  };
  socials: {
    title: string;
    email: string;
    items: SocialLink[];
  };
  copyright: string;
}

// FIX: Added missing VideoSectionData interface to resolve import error.
export interface VideoSectionData {
    icon: string;
    title: string;
    subtitle: string;
    youtubeUrl: string;
}


// --- Generic Section Structure ---

export type SectionData =
  | HeroSectionData
  | BooksSectionData
  | PdfsSectionData
  | FeaturedProductData
  | AuthorSectionData
  | ReviewsSectionData
  | FaqSectionData
  | CtaSectionData
  | FooterSectionData
  // FIX: Added VideoSectionData to the union type.
  | VideoSectionData;

export type SectionType = 
    'hero' | 'books' | 'pdfs' | 'featuredProduct' | 'author' | 
    'reviews' | 'faq' | 'cta' | 'footer' | 'video';

export interface Section<T extends SectionData> {
  id: string;
  type: SectionType;
  visible: boolean;
  data: T;
}

export interface PageContent {
  globalSettings: GlobalSettings;
  sections: Section<any>[];
}