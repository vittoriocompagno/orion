'use client'

import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'

const responseTemplates = [
  {
    id: '1',
    name: 'Risposta Positiva',
    content: 'Grazie mille per il tuo feedback positivo! Siamo felici che tu sia rimasto soddisfatto del nostro servizio. Il tuo apprezzamento ci motiva a continuare a migliorare.',
    type: 'positive'
  },
  {
    id: '2',
    name: 'Risposta Neutra',
    content: 'Grazie per il tuo feedback. Apprezziamo i tuoi commenti e li useremo per migliorare i nostri servizi. Se hai suggerimenti specifici, non esitare a contattarci direttamente.',
    type: 'neutral'
  },
  {
    id: '3',
    name: 'Risposta Negativa',
    content: 'Ci dispiace molto per la tua esperienza negativa. Vorremmo avere l\'opportunità di risolvere i problemi riscontrati. Puoi contattarci direttamente per discuterne?',
    type: 'negative'
  }
]

export default function ResponsesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">RISPOSTE_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Gestisci i template delle risposte automatiche.
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
          NUOVO TEMPLATE
        </button>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-6">
        {responseTemplates.map((template) => (
          <Card key={template.id} className="group hover:scale-[1.01] transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
                  {template.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${
                    template.type === 'positive' ? 'bg-green-500' :
                    template.type === 'neutral' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="font-mono text-sm text-gray-600 capitalize">
                    {template.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="font-mono text-sm text-gray-600 hover:text-black transition-colors">
                  ELIMINA
                </button>
                <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                  MODIFICA
                </button>
              </div>
            </div>

            <div className="p-4 bg-black/[0.02] border border-black/5 rounded-2xl font-mono text-sm">
              {template.content}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
              <div className="font-mono text-xs text-gray-600">
                ULTIMA MODIFICA: 2 GIORNI FA
              </div>
              <div className="font-mono text-xs text-gray-600">
                UTILIZZATO 24 VOLTE
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 