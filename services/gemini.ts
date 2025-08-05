import { GoogleGenAI, Type, Chat, GenerateContentResponse } from "@google/genai";
import { marked } from 'marked';

// Assume process.env.API_KEY is configured externally
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ClinicalCase {
  category: string;
  case: string;
  question: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  explanation: string;
}

const clinicalCaseThemes = [
    "Exacerbation aiguë de BPCO",
    "Œdème Aigu du Poumon Cardiogénique",
    "Syndrome Obésité-Hypoventilation en décompensation",
    "Insuffisance respiratoire post-extubation chez un patient à risque",
    "Insuffisance respiratoire post-opératoire",
    "Crise respiratoire aiguë dans un contexte de maladie neuromusculaire (SLA, Duchenne...)",
    "Gestion d'une complication de la VNI (fuites majeures, asynchronie)",
    "Décision de sevrage de la VNI",
    "Initiation de la VNI en pédiatrie"
];

export async function generateClinicalCase(): Promise<ClinicalCase> {
  const theme = clinicalCaseThemes[Math.floor(Math.random() * clinicalCaseThemes.length)];
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Génère un cas clinique stimulant sur la VNI concernant le thème suivant : "${theme}". Le cas doit être suivi d'une question à choix multiple avec 4 options (A, B, C, D) et une explication détaillée de la bonne réponse.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING, description: "La catégorie ou le thème du cas clinique, basé sur la demande." },
          case: { type: Type.STRING, description: "Le scénario clinique concis et réaliste." },
          question: { type: Type.STRING, description: "La question à choix multiple claire et précise." },
          options: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: "L'identifiant de l'option (A, B, C, ou D)." },
                text: { type: Type.STRING, description: "Le texte de l'option." }
              }
            }
          },
          correctAnswerId: { type: Type.STRING, description: "L'ID de la bonne réponse (A, B, C, ou D)." },
          explanation: { type: Type.STRING, description: "Une explication pédagogique détaillée de la bonne réponse, expliquant également pourquoi les autres options sont incorrectes. **Formatte cette explication en Markdown simple** en utilisant des titres en gras (ex: **Justification**) et des listes à puces pour une clarté maximale."}
        }
      },
      systemInstruction: "Tu es un expert en médecine respiratoire et un formateur médical. Crée des cas cliniques réalistes, concis et stimulants sur la Ventilation Non Invasive (VNI) pour les professionnels de santé, basés sur le thème fourni dans le prompt. Chaque cas doit présenter une catégorie, un scénario clinique, une question claire à choix multiple avec quatre options plausibles (A, B, C, D), l'ID de la réponse correcte, et une explication pédagogique complète. **L'explication doit être formatée en Markdown simple (titres en gras, listes à puces) pour une lisibilité optimale.** La langue de la réponse doit être exclusivement le Français."
    },
  });

  const jsonString = response.text.trim();
  // Basic validation
  if (!jsonString.startsWith("{") || !jsonString.endsWith("}")) {
      throw new Error("Invalid JSON response from API");
  }
  return JSON.parse(jsonString) as ClinicalCase;
}

interface Settings {
    profile: 'normal' | 'obstructive' | 'restrictive';
    pep: number;
    ps: number;
    rr: number;
    riseTime: number;
}

export async function generateExpertAdvice(settings: Settings): Promise<string> {
    const { profile, pep, ps, rr, riseTime } = settings;
    const profileFrench = {
        normal: 'Normal',
        obstructive: 'Obstructif (type BPCO)',
        restrictive: 'Restrictif'
    }[profile];

    const prompt = `Analyse ces réglages de VNI pour un patient au profil '${profileFrench}' : PEP=${pep} cmH₂O, Aide Inspiratoire=${ps} cmH₂O, Fréquence=${rr}/min, Pente=${riseTime}ms. Sont-ils optimaux ? Identifie les risques (ex: auto-PEEP, inconfort) et donne un conseil concis et pédagogique. Formatte ta réponse en Markdown simple avec des titres, des listes à puces, et du gras pour une meilleure lisibilité.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
             systemInstruction: "Tu es un expert en pneumologie et un formateur clinique. Fournis une analyse experte, brève et actionnable sur les réglages de ventilation non invasive. La réponse doit être exclusivement en Français et formatée en Markdown."
        }
    });
    
    return response.text.trim();
}

const CHAT_SYSTEM_INSTRUCTION = "Tu es un assistant expert en Ventilation Non Invasive (VNI), basé sur un guide clinique complet. Ton rôle est de fournir des réponses claires, précises et pédagogiques aux questions des professionnels de santé. Base tes réponses *uniquement* sur les connaissances standards et les meilleures pratiques en pneumologie concernant la VNI, comme si tu citais un guide de référence. N'invente pas d'informations et n'utilise pas de connaissances externes non validées dans ce domaine. Tes réponses doivent être exclusivement en Français. Structure impérativement tes réponses en utilisant le format Markdown simple pour une lisibilité optimale. Utilise des titres en gras de niveau 3 (### Titre) pour les rubriques principales et des listes à puces (-) pour les points clés et les énumérations. La mise en gras est importante pour souligner les termes essentiels.";

export function createChatSession(): Chat {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CHAT_SYSTEM_INSTRUCTION,
    },
  });
  return chat;
}

export async function sendMessageToChatStream(chat: Chat, message: string): Promise<AsyncGenerator<GenerateContentResponse>> {
  return chat.sendMessageStream({ message });
}