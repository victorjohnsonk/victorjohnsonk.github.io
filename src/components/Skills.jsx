'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
const skills = [
  {
    category: 'Generative AI & Agentic AI',
    items: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'Agentic AI',
      'AI Agents',
      'LangChain',
      'LangGraph',
      'Azure OpenAI',
      'Prompt Engineering',
    ],
  },
  {
    category: 'RAG & Knowledge Systems',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'LlamaIndex',
      'Semantic Search',
      'Embeddings',
      'Vector Search',
      'Hybrid Search',
      'LLM Evaluation (RAGAS, DeepEval)',
      'Grounding & Guardrails',
    ],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      'Machine Learning',
      'Natural Language Processing (NLP)',
      'Scikit-learn',
      'PyTorch',
      'Predictive Maintenance',
      'Time Series Forecasting',
    ],
  },
  {
    category: 'Data Engineering & Cloud',
    items: [
      'Azure Databricks',
      'Apache Spark',
      'Azure AI Search',
      'Azure Synapse Analytics',
      'Azure SQL',
      'Apache Airflow',
      'Apache Kafka',
      'Microsoft Azure',
    ],
  },
  {
    category: 'Programming & APIs',
    items: [
      'Python',
      'SQL',
      'FastAPI',
      'REST APIs',
      'Docker',
      'Git',
    ],
  },
  {
    category: 'Search & MLOps',
    items: [
      'Elasticsearch',
      'MLflow',
      'Model Monitoring',
      'Vector Databases',
      'Information Retrieval',
      'CI/CD',
    ],
  },
];


  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="flex flex-col items-start space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-zinc-100 border-l-4 border-lime-400 pl-4"
        >
          Tech Stack
        </motion.h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-5 transition-all hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10"
            >
              <h2 className="text-xl font-medium text-lime-300 mb-3">
                {skill.category}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-300 bg-zinc-800/60 px-3 py-1 rounded-md border border-zinc-700/30 hover:border-lime-400/50 hover:text-lime-200 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
