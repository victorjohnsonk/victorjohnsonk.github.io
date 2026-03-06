'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Scientist (AI/LLM Focus)',
    company: 'SYMEUS LTD',
    industry: 'Finance',
    start: 'Feb 2021',
    end: 'Present',
    location: 'England, United Kingdom · Hybrid',
    description: `
Architected and deployed end-to-end RAG systems using Azure OpenAI (LLMs & embeddings), Azure Vector Search, Azure SQL, LlamaIndex, LangChain, FastAPI, reducing manual research effort by ~50% and improving retrieval relevance by 25–35% while optimising latency to production-acceptable ranges.
Delivered AI-driven semantic search and dynamic content ranking across international financial platforms serving 100K+ monthly users, enabling scalable, context-aware LLM-powered content experiences.
Built agentic LLM workflows using LangGraph with tool orchestration, guardrails, and Monte Carlo simulations for probabilistic financial modelling and scenario analysis, contributing to ~20% revenue uplift.
Applied statistical modelling and quantitative financial analysis techniques to support AI-driven decision systems and financial insight generation.
Implemented automated LLM evaluation, regression testing, and drift monitoring (data, embeddings, retrieval) to detect hallucinations and silent quality degradation; reduced invalid responses by ~20–25%.
Enhanced RAG retrieval by combining vector similarity with entity-aware ranking and structured relationship signals to improve contextual grounding and complex query handling.
Developed scalable ingestion and preprocessing pipelines (chunking, tokenisation, embeddings, Mistral OCR) processing tens of thousands of structured and unstructured documents per run.
Built and maintained Spark/Azure Synapse pipelines supporting ML/AI workloads and high-volume data processing, ensuring reliable training and inference pipelines.
`,
  },
  {
    title: 'Data Scientist (ML Focus)',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Built and productionised machine learning models for predictive maintenance, including Remaining Useful Life (RUL), degradation modelling, time-series forecasting, and survival analysis for critical train components.
Analysed millions of telemetry events per day to detect anomalies, sensor drift, and early failure signals, delivering ~5–10% maintenance cost savings.
Extended component usable life by ~10–15% through improved failure prediction and optimised maintenance scheduling strategies.
Applied Monte Carlo simulations to model failure uncertainty and maintenance scenarios, supporting data-driven preventive maintenance planning.
Developed scalable data preprocessing and feature engineering pipelines and integrated ML model outputs into operational decision-support systems used by engineering and maintenance teams.
Collaborated with cross-functional engineering and operations teams to deploy and monitor ML models in production environments.`
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
Built a search system using Elasticsearch and Python (Flask), improving document retrieval efficiency by ~20%.
Developed automated ETL pipelines using Apache Airflow and contributed to Spark and Kafka streaming workflows for high-frequency telemetry data.
Created RPA workflows to automate SAP-based data processing, reducing manual effort and improving throughput.`,
  },
  {
    title: 'Data Science Intern',
    company: 'Pi Revolutions',
    industry: 'Retail Tech',
    start: 'Sep 2017',
    end: 'Nov 2017',
    location: 'Bengaluru, India · On-site',
    description: `
  Supported data analysis and automation workflows for NFC-enabled billing kiosks
  Performed exploratory analysis to support process improvements`,
  },
  {
    title: 'Intern',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Aug 2016',
    end: 'Sep 2016',
    location: 'Bengaluru, India · On-site',
    description: `
  Automated routine business processes using VBA in Excel, ensuring compliance with internal data standards and improving efficiency, which saved more than 10 hours of reporting work each week`,
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
