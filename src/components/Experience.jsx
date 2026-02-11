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
GenAI &  LLM Systems (Primary):
Led end-to-end design and production deployment of LLM, RAG, and Agentic AI systems, covering ingestion, embedding pipelines, retrieval, orchestration, simulation, evaluation, deployment, and monitoring - reducing manual effort by ~50%
Built LLM-powered search, chatbots, and ranking workflows used in live products.
Designed evaluation frameworks (precision/recall, F1, BLEU/ROUGE, relevance, faithfulness) to reduce hallucinations and improve grounding.
Implemented prompt engineering, guardrails, output validation, and LoRA-based adaptation for domain-specific reliability and performance.
Ran structured A/B testing across models, embeddings, retrievers, and prompts to optimize quality, latency, and cost.
Contributed to DevOps and CI/CD workflows for deploying and monitoring GenAI / LLM solutions in production, supporting versioning, testing, and release automation.

Machine Learning & Applied Analytics (Secondary):
Developed forecasting and statistical models for revenue, traffic, and user activity using Python and ML frameworks.
Implemented Monte Carlo simulations for scenario planning and risk modelling, improving forecast robustness and reducing manual sensitivity analysis time by ~30%.
Built automated analytics pipelines integrating GA4, GSC, and internal datasets.

Data Engineering, Platform & DevOps:
Designed scalable ETL and data pipelines (Spark, Azure Synapse) supporting ML and near real-time analytics.
Optimized complex SQL/T-SQL workloads and built KPI dashboards (Power BI, Streamlit).
Strengthened data governance and validation, reducing reporting turnaround time by ~40%.
Contributed to DevOps and CI/CD workflows for deploying and monitoring GenAI / LLM solutions in production, supporting versioning, testing, and release automation.`,
  },
  {
    title: 'Data Scientist (ML Focus)',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2018',
    end: 'Dec 2020',
    location: 'Bengaluru, India · On-site',
    description: `
Applied Machine Learning & Predictive Systems:
Developed production machine learning models for predictive maintenance, including Remaining Useful Life (RUL) estimation for critical train components
Built time-series and survival analysis models to predict failures, degradation, and maintenance needs across multiple subsystems
Analyzed high-volume telemetry data to identify failure patterns, sensor drift, and anomalous behavior in operational environments
Designed component-level health indicators and engineered features that improved prediction accuracy and model stability
Applied Monte Carlo simulations to model failure uncertainty and maintenance scheduling scenarios, improving preventive maintenance planning and reducing unplanned downtime risk while accelerating decision analysis cycles.

Data Engineering & Model Integration
Implemented robust data validation, preprocessing, and feature pipelines to ensure reliability of sensor and operational data
Integrated predictive models into operational reporting and decision-support systems, enabling faster and more informed maintenance decisions
Supported condition-based maintenance strategies that improved fleet availability and reduced unplanned downtime

Analytics Platforms & Visualization
Built dashboards in Shiny, Qlik Sense, and Tableau to visualize asset health, predictions, and maintenance KPIs
Contributed to the setup of the operations center by delivering KPI-driven visualizations and automated model outputs
Applied IEC 62541 standards to improve data acquisition consistency and interoperability across systems`,
  },
  {
    title: 'Junior Data Scientist',
    company: 'Alstom',
    industry: 'Railways',
    start: 'Dec 2017',
    end: 'Dec 2018',
    location: 'Bengaluru, India · On-site',
    description: `
Developed an Elasticsearch-based search application leveraging BM25 relevance scoring, inverted indexes, and NLP techniques for information retrieval.
Developed automated ETL pipelines using Apache Airflow
Contributed to Spark and Kafka streaming workflows for real-time telemetry data processing
Built RPA workflows to automate SAP-based maintenance data handling`,
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
