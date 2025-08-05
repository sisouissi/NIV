export interface Guideline {
  society: string;
  title: string;
  year: number;
}

export interface GuidelineRegion {
  region: string;
  guidelines: Guideline[];
}

export const guidelinesData: GuidelineRegion[] = [
  {
    region: "International",
    guidelines: [
      {
        society: "Global Initiative for Chronic Obstructive Lung Disease (GOLD)",
        title: "Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease, update",
        year: 2025
      }
    ]
  },
  {
    region: "Canada",
    guidelines: [
      {
        society: "Canadian Thoracic Society (CTS)",
        title: "Clinical practice guideline on Long-term non-invasive ventilation in patients with chronic obstructive pulmonary disease (COPD), update",
        year: 2021
      },
      {
        society: "CTS",
        title: "Clinical practice guideline on home mechanical ventilation for patients with amyotrophic lateral sclerosis",
        year: 2019
      },
      {
        society: "Canadian Critical Care Society (CCCS)",
        title: "Clinical practice guidelines for the use of noninvasive positive-pressure ventilation and noninvasive continuous positive airway pressure in the acute care setting",
        year: 2011
      },
      {
        society: "CTS",
        title: "A clinical practice guideline on home mechanical ventilation",
        year: 2011
      }
    ]
  },
  {
    region: "United States",
    guidelines: [
      {
        society: "American College of Chest Physicians (CHEST)",
        title: "Clinical practice guideline and expert panel report for respiratory management of patients with neuromuscular weakness",
        year: 2023
      },
      {
        society: "American College of Physicians (ACP)",
        title: "Appropriate use of high-flow nasal oxygen in hospitalized patients for initial or postextubation management of acute respiratory failure – A clinical guideline",
        year: 2021
      },
      {
        society: "American Thoracic Society (ATS)",
        title: "Clinical practice guideline for long-term noninvasive ventilation in chronic stable hypercapnic chronic obstructive pulmonary disease",
        year: 2020
      },
      {
        society: "CHEST/ATS",
        title: "An official clinical practice guideline on liberation from mechanical ventilation in critically ill adults – Inspiratory pressure augmentation during spontaneous breathing trials, protocols minimizing sedation, and noninvasive ventilation immediately after extubation",
        year: 2017
      },
      {
        society: "European Respiratory Society (ERS)/ATS",
        title: "Guideline on management of COPD exacerbations",
        year: 2017
      },
      {
        society: "ERS/ATS",
        title: "Official clinical practice guidelines on noninvasive ventilation for acute respiratory failure",
        year: 2017
      },
      {
        society: "American Association for Respiratory Care (AARC)",
        title: "Clinical practice guideline on humidification during invasive and noninvasive mechanical ventilation",
        year: 2012
      }
    ]
  },
  {
    region: "Europe",
    guidelines: [
      {
        society: "European Society of Anaesthesiology (ESA)/European Society of Intensive Care Medicine (ESICM)",
        title: "A joint guideline for noninvasive respiratory support in the hypoxaemic peri-operative/periprocedural patient",
        year: 2020
      },
      {
        society: "European Respiratory Society (ERS)",
        title: "Guidelines on long-term home non-invasive ventilation for management of COPD",
        year: 2019
      },
      {
        society: "ERS/American Thoracic Society (ATS)",
        title: "Guideline on management of COPD exacerbations",
        year: 2017
      },
      {
        society: "ERS/ATS",
        title: "Official clinical practice guidelines on noninvasive ventilation for acute respiratory failure",
        year: 2017
      }
    ]
  },
  {
    region: "United Kingdom",
    guidelines: [
      {
        society: "National Institute for Health and Care Excellence (NICE)",
        title: "Interventional procedures guidance on intramuscular diaphragm stimulation for ventilator-dependent chronic respiratory failure from high spinal cord injuries",
        year: 2023
      },
      {
        society: "British Thoracic Society (BTS)",
        title: "Quality standards for acute non-invasive ventilation in adults",
        year: 2018
      },
      {
        society: "BTS/Intensive Care Society (ICS)",
        title: "Guidelines for the ventilatory management of acute hypercapnic respiratory failure in adults",
        year: 2016
      }
    ]
  },
  {
    region: "Australia-New Zealand",
    guidelines: [
      {
        society: "Lung Foundation Australia",
        title: "The COPD-X Plan – Australian and New Zealand guidelines for the management of chronic obstructive pulmonary disease",
        year: 2021
      }
    ]
  },
  {
    region: "Japan",
    guidelines: [
      {
        society: "Japanese Respiratory Society (JRS)",
        title: "Noninvasive positive pressure ventilation (NPPV) guidelines, 2nd revised edition (In English)",
        year: 2017
      },
      {
        society: "JRS",
        title: "Noninvasive positive pressure ventilation (NPPV) guidelines, 2nd revised edition (In Japanese)",
        year: 2015
      }
    ]
  }
];
