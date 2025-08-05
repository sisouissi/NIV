
export interface Reference {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  urls: string[];
}

export const references: Reference[] = [
    {
        id: 'uptodate-ohs-pap-2025',
        title: "Noninvasive positive airway pressure therapy for the obesity hypoventilation syndrome",
        authors: "Martin TJ, Badr MS, Finlay G",
        journal: "UpToDate",
        year: 2025,
        urls: ["https://www.uptodate.com/contents/noninvasive-positive-airway-pressure-therapy-for-the-obesity-hypoventilation-syndrome"]
    },
    {
        id: 'uptodate-nmd-followup-2025',
        title: "Noninvasive ventilation in adults with chronic respiratory failure from neuromuscular and chest wall diseases: Adaptation and follow-up after initiation",
        authors: "Hill NS, Kramer NR",
        journal: "UpToDate",
        year: 2025,
        urls: ["https://www.uptodate.com/contents/noninvasive-ventilation-in-adults-with-chronic-respiratory-failure-from-neuromuscular-and-chest-wall-diseases-adaptation-and-follow-up-after-initiation"]
    },
    {
        id: 'uptodate-nmd-selection-2025',
        title: "Noninvasive ventilation in adults with chronic respiratory failure from neuromuscular and chest wall diseases: Patient selection and alternative methods of ventilatory support",
        authors: "Hill NS, Kramer NR",
        journal: "UpToDate",
        year: 2025,
        urls: ["https://www.uptodate.com/contents/noninvasive-ventilation-in-adults-with-chronic-respiratory-failure-from-neuromuscular-and-chest-wall-diseases-patient-selection-and-alternative-methods-of-ventilatory-support"]
    },
    {
        id: 'uptodate-ards-2025',
        title: "Acute respiratory distress syndrome: Ventilator management strategies for adults",
        authors: "Siegel MD, Hyzy RC",
        journal: "UpToDate",
        year: 2025,
        urls: ["https://www.uptodate.com/contents/acute-respiratory-distress-syndrome-ventilator-management-strategies-for-adults"]
    },
    {
        id: 'uptodate-guidelines-2025',
        title: "Society guideline links: Noninvasive ventilation in adults",
        authors: "UpToDate",
        journal: "UpToDate",
        year: 2025,
        urls: ["https://www.uptodate.com/contents/society-guideline-links-noninvasive-ventilation-in-adults"]
    },
    {
        id: 'gavo2-conseils-2025',
        title: "Conseils pour la pratique de la ventilation non invasive (VNI) à domicile de l'adulte",
        authors: "Groupe assistance ventilatoire & oxygène (GAVO2) de la SPLF",
        journal: "Société de Pneumologie de Langue Française",
        year: 2025,
        urls: ["https://docs.splf.fr/docs-groupes/GAVO2/ConseilsGAVO2-2024-2025.pdf"]
    },
    {
        id: 'uptodate-nmd-initiation-2024',
        title: "Noninvasive ventilation in adults with chronic respiratory failure from neuromuscular and chest wall diseases: Practical aspects of initiation",
        authors: "Hill NS, Kramer NR",
        journal: "UpToDate",
        year: 2024,
        urls: ["https://www.uptodate.com/contents/noninvasive-ventilation-in-adults-with-chronic-respiratory-failure-from-neuromuscular-and-chest-wall-diseases-practical-aspects-of-initiation"]
    },
    {
        id: 'bpco-drugs-2024',
        title: "Traitement de la BPCO : Xtiova, Foster Nexthaler, Bronchophylline et Bronchodual",
        authors: "Note de l'utilisateur",
        journal: "BMJ Journals Open Access scheme",
        year: 2024,
        urls: ["http://thorax.bmj.com/site/about/guidelines.xhtml#open"]
    },
    {
        id: 'zimnoch-2024',
        title: "Non-Invasive Ventilation: When, Where, How to Start, and How to Stop",
        authors: "Zimnoch M, Eldeiry D, Aruleba O, et al.",
        journal: "Journal of Clinical Medicine",
        year: 2024,
        volume: "14",
        pages: "5033",
        urls: ["https://doi.org/10.3390/jcm14145033"]
    },
    {
        id: 'criner-2024',
        title: "Clinical review of non-invasive ventilation",
        authors: "Criner GJ, Gayen S, Zantah M, et al.",
        journal: "European Respiratory Journal",
        year: 2024,
        volume: "64",
        pages: "2400396",
        urls: ["https://doi.org/10.1183/13993003.00396-2024"]
    },
    {
        id: 'copdx-2024',
        title: "The COPD-X Plan: Australian and New Zealand Guidelines for the Management of Chronic Obstructive Pulmonary Disease",
        authors: "Lung Foundation Australia",
        journal: "Version 2.77",
        year: 2024,
        urls: ["https://lungfoundation.com.au/resources/copd-x-plan/"]
    },
    {
        id: 'uptodate-niv-acute-children-2024',
        title: "Noninvasive ventilation for acute and impending respiratory failure in children",
        authors: "Nagler J, Cheifetz IM, Randolph AG, Wiley JF II.",
        journal: "UpToDate",
        year: 2024,
        urls: ["https://www.uptodate.com/contents/noninvasive-ventilation-for-acute-and-impending-respiratory-failure-in-children"]
    },
    {
        id: 'akpa-jtd-2024',
        title: "Respiratory issues and current management in neuromuscular diseases: a narrative review",
        authors: "Akpa B, Pusalavidyasagar S, Iber C.",
        journal: "Journal of Thoracic Disease",
        year: 2024,
        volume: "16",
        pages: "6292-6307",
        urls: ["https://doi.org/10.21037/jtd-23-1931"]
    },
    {
        id: 'aswanetmanee-2023',
        title: "Noninvasive ventilation in patients with acute hypoxemic respiratory failure: a systematic review and meta-analysis of randomized controlled trials",
        authors: "Aswanetmanee P, Limsuwat C, Maneechotesuwan K, Wongsurakiat P.",
        journal: "Scientific Reports",
        year: 2023,
        volume: "13",
        pages: "8283",
        urls: ["https://doi.org/10.1038/s41598-023-35323-0"]
    },
    {
        id: 'khan-chest-2023',
        title: "Respiratory Management of Patients With Neuromuscular Weakness: An American College of Chest Physicians Clinical Practice Guideline and Expert Panel Report",
        authors: "Khan A, Frazer-Green L, Amin R, et al.",
        journal: "Chest",
        year: 2023,
        volume: "164",
        pages: "394-413",
        urls: ["https://doi.org/10.1016/j.chest.2023.03.011"]
    },
    {
        id: 'carmona-2023',
        title: "Chronic Neuromuscular Respiratory Failure and Home Assisted Ventilation",
        authors: "Carmona H, Graustein AD, Benditt JO.",
        journal: "Annual Review of Medicine",
        year: 2023,
        volume: "74",
        pages: "443-455",
        urls: ["https://doi.org/10.1146/annurev-med-043021-013620"]
    },
    {
        id: 'maclean-prr-2023',
        title: "Long-term non-invasive ventilation in children: Transition from hospital to home",
        authors: "MacLean JE, Fauroux B.",
        journal: "Paediatr Respir Rev",
        year: 2023,
        volume: "47",
        pages: "3-10",
        urls: ["https://doi.org/10.1016/j.prrv.2023.01.002"]
    },
    {
        id: 'fauroux-ers-2022',
        title: "ERS statement on paediatric long-term noninvasive respiratory support",
        authors: "Fauroux B, Abel F, Amaddeo A, et al.",
        journal: "Eur Respir J",
        year: 2022,
        volume: "59(1)",
        pages: "2101404",
        urls: ["https://doi.org/10.1183/13993003.01404-2021"]
    },
    {
        id: 'kaminska-2021',
        title: "Long-term non-invasive ventilation in patients with chronic obstructive pulmonary disease (COPD): 2021 Canadian Thoracic Society Clinical Practice Guideline update",
        authors: "Kaminska M, Rimmer KP, McKim DA, et al.",
        journal: "Canadian Journal of Respiratory, Critical Care, and Sleep Medicine",
        year: 2021,
        urls: ["https://doi.org/10.1080/24745332.2021.1911218"]
    },
    {
        id: 'leone-esa-esicm-2020',
        title: "Noninvasive respiratory support in the hypoxaemic peri-operative/periprocedural patient: a joint ESA/ESICM guideline",
        authors: "Leone M, Einav S, Chiumello D, et al.",
        journal: "Intensive Care Med",
        year: 2020,
        volume: "46",
        pages: "697-713",
        urls: ["https://doi.org/10.1007/s00134-020-05948-0"]
    },
    {
        id: 'praud-frontiers-2020',
        title: "Long-Term Non-invasive Ventilation in Children: Current Use, Indications, and Contraindications",
        authors: "Praud JP.",
        journal: "Front Pediatr",
        year: 2020,
        volume: "8",
        pages: "584334",
        urls: ["https://doi.org/10.3389/fped.2020.584334"]
    },
    {
        id: 'faverio-2019',
        title: "Noninvasive ventilation weaning in acute hypercapnic respiratory failure due to COPD exacerbation: A real-life observational study",
        authors: "Faverio P, Stainer A, De Giacomi F, et al.",
        journal: "Canadian Respiratory Journal",
        year: 2019,
        volume: "2019",
        pages: "3478968",
        urls: ["https://doi.org/10.1155/2019/3478968"]
    },
    {
        id: 'ergan-2019',
        title: "European Respiratory Society guidelines on long-term home non-invasive ventilation for management of COPD",
        authors: "Ergan B, Oczkowski S, Rochwerg B, et al.",
        journal: "European Respiratory Journal",
        year: 2019,
        volume: "54",
        pages: "1901003",
        urls: ["https://doi.org/10.1183/13993003.01003-2019"]
    },
    {
        id: 'mokhlesi-ats-2019',
        title: "Evaluation and Management of Obesity Hypoventilation Syndrome. An Official American Thoracic Society Clinical Practice Guideline",
        authors: "Mokhlesi B, Masa JF, Brozek JL, et al.",
        journal: "Am J Respir Crit Care Med",
        year: 2019,
        volume: "200(3)",
        pages: "e6-e24",
        urls: ["https://doi.org/10.1164/rccm.201905-1071ST"]
    },
    {
        id: 'masa-err-2019',
        title: "Obesity hypoventilation syndrome",
        authors: "Masa JF, Pépin JL, Borel JC, et al.",
        journal: "Eur Respir Rev",
        year: 2019,
        volume: "28(151)",
        pages: "180097",
        urls: ["https://doi.org/10.1183/16000617.0097-2018"]
    },
    {
        id: 'bellone-chest-2018',
        title: "Noninvasive ventilation for acute cardiogenic pulmonary edema with preserved systolic function: a propensity score-based analysis",
        authors: "Bellone A, Monari A, Cortellaro F, et al.",
        journal: "Chest",
        year: 2018,
        volume: "153(1)",
        pages: "143-151",
        urls: ["https://doi.org/10.1016/j.chest.2017.08.019"]
    },
    {
        id: 'selim-chest-2018',
        title: "Initiation of Noninvasive Ventilation for Sleep Related Hypoventilation Disorders: Advanced Modes and Devices",
        authors: "Selim BJ, Wolfe L, Coleman JM III, Dewan NA.",
        journal: "Chest",
        year: 2018,
        volume: "153(1)",
        pages: "251-265",
        urls: ["https://doi.org/10.1016/j.chest.2017.06.036"]
    },
    {
        id: 'ouellette-chest-2017',
        title: "Liberation From Mechanical Ventilation in Critically Ill Adults: An Official American College of Chest Physicians/American Thoracic Society Clinical Practice Guideline",
        authors: "Ouellette DR, Patel S, Girard TD, et al.",
        journal: "Chest",
        year: 2017,
        volume: "151(1)",
        pages: "166-180",
        urls: ["https://doi.org/10.1016/j.chest.2016.10.036"]
    },
    {
        id: 'haut-jpic-2015',
        title: "Pediatric Noninvasive Ventilation",
        authors: "Haut C.",
        journal: "J Pediatr Intensive Care",
        year: 2015,
        volume: "4(2)",
        pages: "121-127",
        urls: ["https://doi.org/10.1055/s-0035-1556754"]
    },
    {
        id: 'ferrari-niv-mi-2013',
        title: "Noninvasive Positive Airway Pressure and Risk of Myocardial Infarction in Acute Cardiogenic Pulmonary Edema",
        authors: "Ferrari G, Milan A, Aprà F.",
        journal: "In: Esquinas A. (eds) Noninvasive Mechanical Ventilation. Springer, Berlin, Heidelberg",
        year: 2010,
        pages: "231-236",
        urls: ["https://doi.org/10.1007/978-3-642-02453-5_34"]
    }
];
