import { Figtree } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Script from 'next/script';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata = {
  title:
    'Victor Johnson | AI Engineer | Production RAG & GenAI Systems',
  description:
    'AI Engineer with 8+ years of experience delivering production AI, Machine Learning, and Data Engineering solutions, specialising in Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Agentic AI workflows (LangGraph), semantic retrieval, vector search, and automated LLM evaluation. Experienced designing and deploying enterprise GenAI applications using Azure OpenAI, Azure AI Search, LangChain, LangGraph, LlamaIndex, Databricks, Azure Synapse Analytics, Apache Spark, FastAPI, Python, and SQL with a strong focus on model grounding, enterprise guardrails, and cloud efficiency. ',
  keywords: [
    'Data Science',
    'Data Scientist',
    'AI',
    'AI Engineer',
    'Generative AI Engineer',
    'GenAI Engineer',
    'Artificial Intelligence',
    'Artificial Intelligence Engineer',
    'LLM Engineer',
    'Generative AI Engineer',
    'Production RAG',
    'Large Language Models',
    'Data Scientist',
    'Retrieval-Augmented Generation',
    'Semantic Search',
    'Vector Databases',
    'LLMOps',
    'Azure OpenAI',
    'Databricks',
    'Machine Learning',
    'Natural Language Processing',
    'MLOps',
    'Python',
    'Apache Spark',
  ],
  authors: [{ name: 'Victor Johnson', url: 'https://victorjohnson.online' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://victorjohnson.online',
    title:
      'Victor Johnson | AI Engineer | Production RAG & GenAI',
    description:
      'AI Engineer specialising in production RAG, LLM evaluation, vector search, and GenAI systems on Azure.',
    images: [
      {
        url: '/vj-photo.png',
        width: 1200,
        height: 630,
        alt: 'Victor Johnson | Data Scientist / AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Victor Johnson | AI Engineer | Production RAG & GenAI',
    description:
      'AI Engineer building production-grade RAG, LLM, and GenAI systems on Azure.',
    images: ['/vj-photo.png'],
  },
  alternates: {
    canonical: 'https://victorjohnson.online',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Victor Johnson',
    url: 'https://victorjohnson.online',
    image: 'https://victorjohnson.online/vj-photo.png',
    jobTitle: 'AI Engineer',
    description:
      'AI Engineer specialising in production RAG, LLM systems, AI Agents, Semantic search, Databricks and Generative AI on Microsoft Azure.',
    sameAs: [
      'https://www.linkedin.com/in/victorjohnsonk',
      'https://github.com/victorjohnsonk',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'SYMEUS',
    },
    knowsAbout: [
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Generative AI',
      'LLMOps',
      'Semantic Search',
      'Vector Databases',
      'Machine Learning',
      'MLOps',
      'Azure OpenAI',
      'Data Science',
      'Databricks'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Victor Johnson',
    url: 'https://victorjohnson.online',
    description:
      'Personal website of Victor Johnson, AI Engineer specialising in production RAG and GenAI systems.',
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
          {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MEK4W87RJL"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEK4W87RJL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${figtree.className} bg-neutral-950 text-white antialiased`}
      >
        <div className="pointer-events-none absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:24px_24px]"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
