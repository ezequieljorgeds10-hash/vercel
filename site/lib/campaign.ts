export const campaign = {
  org: "Recanto Anjos Peludos",
  location: "Goiânia · GO",
  activeSince: "Ativo desde fevereiro/2013",
  title: "Ajude Joaquim a Voltar a Andar",
  raised: 250,
  goal: 1400,
  supporters: 6,
  daysLeft: 14,
  cnpj: "00.000.000/0001-00",
};

export const donationTiers = [
  {
    value: 25,
    description: "Ajuda na compra de medicamentos e materiais básicos.",
  },
  {
    value: 50,
    description: "Contribui para exames e avaliações veterinárias.",
  },
  {
    value: 100,
    description: "Ajuda diretamente nos custos da cirurgia.",
  },
  {
    value: 200,
    description: "Financia uma parte importante do tratamento e recuperação.",
  },
];

export const useOfFunds = [
  {
    icon: "hospital",
    title: "Cirurgia corretiva",
    text: "Procedimento para corrigir a fratura na coluna de Joaquim.",
  },
  {
    icon: "pill",
    title: "Medicamentos",
    text: "Analgésicos, anti-inflamatórios e antibióticos.",
  },
  {
    icon: "flask",
    title: "Exames",
    text: "Raio-X, tomografia e avaliações pré-operatórias.",
  },
  {
    icon: "bandage",
    title: "Pós-operatório",
    text: "Materiais de recuperação e fisioterapia inicial.",
  },
] as const;

export const recentDonations = [
  { name: "Maria Silva", time: "há 3 minutos", value: 25 },
  { name: "João Pedro", time: "há 8 minutos", value: 50 },
  { name: "Ana Costa", time: "há 15 minutos", value: 100 },
  { name: "Carlos Mendes", time: "há 22 minutos", value: 25 },
  { name: "Beatriz Lima", time: "há 38 minutos", value: 25 },
];

export const updates = [
  {
    tag: "Hoje",
    title: "Aguardando recursos para a cirurgia",
    text: "Joaquim segue em acompanhamento diário com meias protetoras, alimentação adequada e hidratação enquanto reunimos o valor necessário para a cirurgia.",
  },
  {
    tag: "Esta semana",
    title: "Diagnóstico confirmado",
    text: "O veterinário confirmou a fratura na coluna. Existe esperança: Joaquim pode voltar a andar, mas a cirurgia precisa ser feita o quanto antes.",
  },
  {
    tag: "Resgate",
    title: "Joaquim foi resgatado",
    text: "Encontramos Joaquim abandonado após agressões brutais. Realizamos o resgate imediato e o levamos para atendimento veterinário.",
  },
];

export const faqs = [
  {
    q: "Como funciona a doação?",
    a: "Você escolhe o valor, faz o pagamento e o recurso vai direto para a campanha verificada.",
  },
  {
    q: "Posso doar via PIX?",
    a: "Sim. Aceitamos PIX como forma de doação.",
  },
  {
    q: "Recebo comprovante?",
    a: "Sim. O comprovante é emitido logo após a confirmação.",
  },
  {
    q: "A campanha é verificada?",
    a: "Sim. Validamos documentos e a história do Joaquim antes de publicar.",
  },
];

export const testimonials = [
  {
    name: "Fernanda R.",
    role: "Voluntária",
    text: "Ver o Joaquim recebendo carinho depois de tanto sofrimento me emociona todos os dias. Sua doação muda vidas de verdade.",
    image: "/images/joaquim-2.png",
  },
  {
    name: "Dr. Paulo Henrique",
    role: "Veterinário responsável",
    text: "Existe esperança real de recuperação. Com a cirurgia no tempo certo, Joaquim tem grandes chances de voltar a andar.",
    image: "/images/joaquim-1.png",
  },
  {
    name: "Camila S.",
    role: "Apoiadora",
    text: "Doei porque acredito que todo animal merece uma segunda chance. Foi rápido, seguro e recebi o comprovante na hora.",
    image: "/images/joaquim-3.png",
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
