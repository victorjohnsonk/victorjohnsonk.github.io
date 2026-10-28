
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AI Engineer - CyberSec',
    industry: 'Cyber Security',
    start: 'Sep 2026',
    end: 'Present',
    location: 'London, United Kingdom · Hybrid',
    description: `
Designing and implementing secure, scalable AI and Agentic AI solutions for cybersecurity, integrating intelligent threat detection, security analysis, automation, and AI-driven workflows to enhance security operations and risk management.`,
  },
  {
    title: 'Data Scientist',
    company: 'Symeus',
    industry: 'Finance',
    start: 'Jan 2022',
    end: 'Sep 2026',
    location: 'Norwich, United Kingdom · Hybrid',
    description: `
Architected and deployed enterprise RAG and Agentic AI solutions using Azure OpenAI, LangGraph, Azure AI Search and Databricks, reducing manual research effort by ~50%. Built semantic retrieval, LLM evaluation and knowledge ingestion pipelines alongside financial forecasting and predictive analytics models.`,
  },
  {
    title: 'Data Scientist (Part-time)',
    company: 'Symeus',
    industry: 'Finance',
    start: 'Feb 2021',
    end: 'Dec 2021',
    location: 'Norwich, United Kingdom · Hybrid',
    description: `
Developed scalable data pipelines using Databricks, Azure Synapse Analytics and Apache Spark, optimised SQL workloads and built Power BI and Streamlit dashboards for business intelligence.`,
  },
  {
    title: 'Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Developed production ML models for predictive maintenance, Remaining Useful Life (RUL), anomaly detection and failure forecasting, reducing parts wastage by ~15% and maintenance costs by ~5–10%. Built scalable telemetry pipelines, Monte Carlo simulations and Elasticsearch-based retrieval solutions.`,
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
Built Elasticsearch and NLP-powered enterprise search solutions, developed ETL pipelines using Apache Airflow, Spark and Kafka, and automated SAP business processes.`,
  },
  {
    title: 'Data Science Intern',
    company: 'Pi Revolutions',
    industry: 'Retail Tech',
    start: 'Sep 2017',
    end: 'Nov 2017',
    location: 'Bengaluru, India · On-site',
    description: `
Supported data analysis, exploratory analytics and automation workflows for NFC-enabled billing kiosks to improve operational processes.`,
  },
  {
    title: 'Intern',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Aug 2016',
    end: 'Sep 2016',
    location: 'Bengaluru, India · On-site',
    description: `
Automated Excel-based reporting and business processes using VBA, saving over 10 hours of manual reporting work each week.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-14">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border-l-4 border-lime-400 pl-4 text-3xl font-semibold tracking-tight text-zinc-100"
      >
        Experience
      </motion.h1>

      <div className="relative space-y-8">
        {experiences.map((exp, i) => {
          const isPresent = exp.end?.toLowerCase() === 'present';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm transition hover:border-lime-400 hover:shadow-md"
            >
              {/* Dot */}
              <div className="mt-2 flex-shrink-0 relative">
                {isPresent ? (
                  <>
                    <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-lime-400"></span>
                  </>
                ) : (
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-zinc-500"></span>
                )}
              </div>

              {/* Card Content */}
              <div className="w-full">
                <div className="flex w-full items-start justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
                  <span className="flex-shrink-0 text-xs text-lime-400 text-right whitespace-nowrap">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                {/* Company */}
                <p className="text-lime-400 font-medium">Company - {exp.company}</p>

                {/* Location + Industry */}
                <p className="text-xs text-zinc-400 italic">
                  {exp.location}
                  {exp.industry && (
                    <span className="not-italic text-zinc-500"> | </span>
                  )}
                  {exp.industry && (
                    <span className="not-italic">Industry - {exp.industry}</span>
                  )}
                </p>

                <p className="mt-2 text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                  {exp.description.trim()}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
