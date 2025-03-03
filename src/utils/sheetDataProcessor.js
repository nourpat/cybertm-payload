export function processSheetData(values) {
  // Traitement des données du Google Sheet
  const months = values[1].slice(1, 7);
  const leadValues = values[2].slice(1, 7).map(Number);
  const leadCounts = values[3].slice(1, 7).map(Number);

  // Données pour le graphique de valeur mensuelle des leads
  const monthlyLeadValue = {
    labels: months,
    datasets: [
      {
        label: 'Valeur des leads (€)',
        data: leadValues,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  };

  // Données pour le graphique du nombre de leads
  const leadsCount = {
    labels: months,
    datasets: [
      {
        label: 'Nombre de leads',
        data: leadCounts,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      }
    ]
  };

  // Données pour le statut des leads
  const leadStatus = {
    labels: ['Gagné', 'Perdu', 'En cours'],
    datasets: [
      {
        data: [18, 70, 12],
        backgroundColor: [
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
          'rgb(59, 130, 246)',
        ],
      }
    ]
  };

  // Données pour les canaux marketing
  const marketingChannels = {
    labels: [
      'Social Media marketing',
      'Email marketing',
      'Paid advertisement',
      'Mobile marketing',
      'Others'
    ],
    datasets: [
      {
        data: [30, 17, 20, 25, 8],
        backgroundColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
          'rgb(107, 114, 128)',
        ],
      }
    ]
  };

  return {
    monthlyLeadValue,
    leadsCount,
    leadStatus,
    marketingChannels
  };
}