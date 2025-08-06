import { Semester } from '../types';

export const semesterData: Semester[] = [
  {
    id: 1,
    title: "Semester I",
    subjects: [
      {
        code: "BI 501",
        title: "Introduction to Bioinformatics & Computational Biology (2+1)",
        objective: "To provide theoretical and practical knowledge about genomic data handling, optimization, and data mining in bioinformatics.",
        units: [
          {
            title: "Unit I: Genomic Resources & Algorithms",
            content: [
              "Genomic resources: NCBI, EBI, EXPASY",
              "Sequence databases: GenBank, EMBL, DDBJ",
              "Algorithms: Needleman-Wunsch, Smith-Waterman, BLAST, FASTA",
              "Scoring matrices: PAM, BLOSUM",
              "Multiple sequence alignment: PRAS, CLUSTALW",
              "Gene prediction and functional identification"
            ]
          },
          {
            title: "Unit II: Gene Expression Data",
            content: [
              "Preprocessing gene expression data",
              "Normalization techniques",
              "Error modeling, imputation",
              "High-throughput screening"
            ]
          },
          {
            title: "Unit III: Optimization & Structure Prediction",
            content: [
              "Optimization: Simulated Annealing, Genetic Algorithms",
              "Ab initio structure prediction",
              "Information theory: entropy and relative entropy"
            ]
          },
          {
            title: "Unit IV: Machine Learning",
            content: [
              "Machine Learning: supervised vs unsupervised",
              "Cross-validation, Markov Models, Bayesian Inference",
              "Hidden Markov Models (HMMs)",
              "Introduction to WEKA"
            ]
          }
        ],
        practicals: ["BLAST", "CLUSTALW", "Gene prediction tools", "HMMs", "Gibbs sampling", "Expression profiling"]
      },
      {
        code: "MBB 502",
        title: "Fundamentals of Molecular Biology (3+0)",
        objective: "Understand DNA/RNA structures and chromatin assembly, study Central Dogma, cellular processes, mutations, and gene regulation",
        units: [
          {
            title: "Unit I: Nucleic Acids Structure",
            content: [
              "Nucleic Acids, DNA forms (A/B/Z)",
              "RNA types and functions",
              "DNA topology and supercoiling"
            ]
          },
          {
            title: "Unit II: DNA Replication & Repair",
            content: [
              "DNA replication mechanisms",
              "Types of mutations",
              "DNA repair pathways",
              "Homologous recombination"
            ]
          },
          {
            title: "Unit III: Transcription",
            content: [
              "Prokaryotic transcription",
              "Eukaryotic transcription",
              "RNA processing and modifications"
            ]
          },
          {
            title: "Unit IV: Translation & Regulation",
            content: [
              "Translation mechanism",
              "Co-translational modifications",
              "Post-translational modifications",
              "Protein stability and degradation"
            ]
          },
          {
            title: "Unit V: Gene Regulation",
            content: [
              "lac and trp operons",
              "RNAi mechanisms",
              "Enhancers and silencers",
              "Epigenetic regulation"
            ]
          }
        ]
      }
    ],
    totalCredits: "13+4 (17 Credit Hours)"
  },
  {
    id: 2,
    title: "Semester II",
    subjects: [
      {
        code: "BI 502",
        title: "Statistical Genomics (2+1)",
        objective: "Build fundamental understanding of statistical tools in genetics and genomics.",
        units: [
          {
            title: "Unit I: Population & Quantitative Genetics",
            content: [
              "Hardy–Weinberg Law",
              "Systematic forces affecting gene frequency",
              "Values, Means, Variance",
              "Linkage detection and estimation",
              "Inbreeding, selection, genetic parameter estimation"
            ]
          },
          {
            title: "Unit II: Molecular Markers & QTL",
            content: [
              "Similarity measures, clustering, bootstrapping",
              "Single marker analysis",
              "Interval mapping and MQM"
            ]
          },
          {
            title: "Unit III: Genomics Applications",
            content: [
              "Design and analysis of expression data",
              "Genome selection and prediction",
              "Genetic markers, association mapping",
              "Genome-wide association analysis (GWAS)"
            ]
          }
        ]
      },
      {
        code: "BI 503",
        title: "Genome Assembly and Annotation (1+1)",
        objective: "Understand practical tools and challenges in genome sequencing and annotation.",
        units: [
          {
            title: "Unit I: Sequencing & Assembly",
            content: [
              "Sequence data types, shotgun sequencing",
              "Comparative & de novo assembly",
              "Read coverage, sequencing errors",
              "Assembly evaluation and challenges"
            ]
          },
          {
            title: "Unit II: Assembly Tools",
            content: [
              "MIRA, Velvet, ABySS",
              "ALLPATHS-LG, Bambus2",
              "Celera Assembler, SGA, SOAPdenovo"
            ]
          },
          {
            title: "Unit III: Genome Annotation",
            content: [
              "ORF identification",
              "Gene structure prediction",
              "Regulatory motifs identification"
            ]
          }
        ]
      }
    ],
    totalCredits: "8+4 (12 Credit Hours)"
  },
  {
    id: 3,
    title: "Semester III",
    subjects: [
      {
        code: "BI 504",
        title: "Biomolecular Modelling and Simulation (2+1)",
        objective: "Understand theoretical and practical concepts in biomolecular modeling and molecular simulation.",
        units: [
          {
            title: "Unit I: Protein Structure Prediction",
            content: [
              "Homology modeling techniques",
              "Loop building methods",
              "Ab initio prediction",
              "Threading approaches",
              "CASP assessment"
            ]
          },
          {
            title: "Unit II: Energy Minimization",
            content: [
              "Energy minimization principles",
              "Torsional and Cartesian space",
              "Ramachandran plot analysis"
            ]
          },
          {
            title: "Unit III: Molecular Simulation",
            content: [
              "Force fields and parameters",
              "Solvation models",
              "Monte Carlo methods",
              "Replica exchange techniques",
              "Membrane simulations"
            ]
          }
        ]
      },
      {
        code: "BI 505",
        title: "Transcriptomics and Metagenomics (2+1)",
        objective: "Learn tools and analysis for transcriptomic and metagenomic data.",
        units: [
          {
            title: "Unit I: Transcriptomics",
            content: [
              "Microarray technology",
              "RNA-seq analysis",
              "ChIP-Seq methods",
              "EST databases"
            ]
          },
          {
            title: "Unit II: Metagenomics",
            content: [
              "Metagenomic annotation",
              "Microbial profiling",
              "Metabolic reconstruction"
            ]
          }
        ]
      }
    ],
    totalCredits: "7+13 (20 Credit Hours)"
  },
  {
    id: 4,
    title: "Semester IV",
    subjects: [
      {
        code: "BI 599",
        title: "Seminar (0+1)",
        objective: "Improve scientific presentation and communication skills.",
        units: [
          {
            title: "Presentation Skills",
            content: [
              "Topic selection and research",
              "Slide and poster preparation",
              "Oral presentation techniques",
              "Peer feedback and evaluation"
            ]
          }
        ]
      },
      {
        code: "BI 500",
        title: "Major Research (0+20)",
        objective: "Conduct full-fledged research in a chosen area.",
        units: [
          {
            title: "Research Methodology",
            content: [
              "Research proposal development",
              "Literature review",
              "Data collection and analysis",
              "Thesis writing and presentation"
            ]
          }
        ]
      }
    ],
    totalCredits: "0+21 (21 Credit Hours)"
  }
];