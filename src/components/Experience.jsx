'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Scientist',
    company: 'SYMEUS LTD',
    industry: 'Finance',
    start: 'Jan 2022',
    end: 'Present',
    location: 'England, United Kingdom · Hybrid',
    description: `
Architected and deployed enterprise Retrieval-Augmented Generation (RAG) solutions using Natural Language Processing (NLP), Azure OpenAI, Azure AI Search, LangChain, LangGraph, LlamaIndex, FastAPI, Azure SQL, and Databricks, reducing manual research effort by ~50% while improving retrieval relevance by 25–35%.
  
Designed and implemented production Agentic AI workflows using LangGraph and Azure OpenAI, orchestrating task-specific AI agents for document analysis, information retrieval, reasoning, and workflow execution to automate repetitive business processes.
  
Designed semantic retrieval pipelines using vector search, embeddings, and hybrid retrieval to improve contextual relevance and grounding for enterprise GenAI applications.
  
Implemented automated LLM evaluation frameworks covering retrieval quality, hallucination detection, regression testing, and response validation using Ragas and DeepEval.
  
Built enterprise knowledge ingestion pipelines using OCR, intelligent chunking, embedding generation, and vector indexing for large-scale structured and unstructured document repositories.

Developed machine learning models for financial forecasting, scenario planning, predictive analytics, and business decision support, leveraging statistical modelling and data-driven insights to improve forecasting accuracy and strategic planning.
`,
  },
  {
    title: 'Data Scientist - Part-time',
    company: 'SYMEUS LTD',
    industry: 'Finance',
    start: 'Feb 2021',
    end: 'Dec 2021',
    location: 'England, United Kingdom · Hybrid',
    description: `
Developed Databricks, Azure Synapse Analytics, and Apache Spark pipelines supporting production AI workloads and high-volume data processing.

Optimized complex SQL/T-SQL workloads and built KPI dashboards (Power BI, Streamlit).`,
  },
  {
    title: 'Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Built and productionised machine learning models for predictive maintenance, including Remaining Useful Life (RUL), degradation modelling, time-series forecasting, and survival analysis for critical train components, reducing parts wastage by ~15%.
  
Analysed millions of telemetry events daily to detect anomalies, sensor drift, and early failure signals, delivering ~5–10% maintenance cost savings through earlier fault detection.
  
Extended component service life by ~10–15% by improving failure prediction accuracy and optimising preventive maintenance scheduling strategies.
  
Applied Monte Carlo simulations to model equipment failure uncertainty and maintenance scenarios, reducing unnecessary maintenance activities by ~20–30%.
  
Built scalable data preprocessing and feature engineering pipelines with MLflow-based experiment tracking, integrating machine learning model outputs into production decision-support systems for engineering and maintenance teams.
  
Designed and implemented Elasticsearch-based search and indexing solutions to enable efficient querying and retrieval of engineering documentation and operational datasets.`
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
Built enterprise search solutions using Elasticsearch and Python to optimize operational document and metadata retrieval (BM25 relevance scoring, inverted indexes, and NLP techniques)
  
Developed ETL pipelines using Apache Airflow, Apache Spark, and Kafka for high-throughput batch and stream data processing.
  
Automated SAP-based business processes to reduce manual effort and operational overhead.`,
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
