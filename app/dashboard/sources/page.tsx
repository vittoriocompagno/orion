'use client'

import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Toggle } from '@/components/ui/Toggle'
import { Star, Globe, ArrowUp, ArrowDown } from 'lucide-react'

const mockSources = [
  {
    id: '1',
    name: 'Google Business',
    connected: true,
    totalReviews: 124,
    averageRating: 4.5,
    trend: 'up',
    lastSync: '2024-01-08T10:30:00Z'
  },
  {
    id: '2',
    name: 'TripAdvisor',
    connected: false,
    totalReviews: 0,
    averageRating: 0,
    trend: 'neutral',
    lastSync: null
  },
  {
    id: '3',
    name: 'Facebook',
    connected: false,
    totalReviews: 0,
    averageRating: 0,
    trend: 'neutral',
    lastSync: null
  }
]

export default function SourcesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">SORGENTI_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Gestisci le tue fonti di recensioni e le integrazioni.
        </p>
      </div>

      {/* Search */}
      <div>
        <Input
          placeholder="Cerca sorgenti..."
        />
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 gap-6">
        {mockSources.map((source) => (
          <Card key={source.id} className="group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-5 h-5" />
                  <h3 className="font-mono text-lg text-gray-900">
                    {source.name}
                  </h3>
                  {source.connected ? (
                    <Badge variant="success">CONNESSO</Badge>
                  ) : (
                    <Badge variant="secondary">NON CONNESSO</Badge>
                  )}
                </div>

                {source.connected ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stats */}
                    <div className="space-y-4">
                      <div>
                        <div className="font-mono text-sm text-gray-600 mb-1">
                          RECENSIONI TOTALI
                        </div>
                        <div className="font-mono text-2xl font-bold">
                          {source.totalReviews}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-600 mb-1">
                          MEDIA VALUTAZIONI
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="font-mono text-2xl font-bold">
                            {source.averageRating}
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(source.averageRating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <Badge
                            variant={source.trend === 'up' ? 'success' : 'danger'}
                            className="flex items-center gap-1"
                          >
                            {source.trend === 'up' ? (
                              <ArrowUp className="w-3 h-3" />
                            ) : (
                              <ArrowDown className="w-3 h-3" />
                            )}
                            {source.trend === 'up' ? '+0.2' : '-0.1'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Settings */}
                    <div className="space-y-4 md:col-span-2">
                      <Toggle
                        label="SINCRONIZZAZIONE AUTOMATICA"
                        description="Sincronizza automaticamente le nuove recensioni"
                        checked={true}
                      />
                      <Toggle
                        label="RISPOSTE AUTOMATICHE"
                        description="Abilita le risposte automatiche per questa sorgente"
                        checked={true}
                      />
                      <div className="pt-4 font-mono text-xs text-gray-600">
                        ULTIMA SINCRONIZZAZIONE: {new Date(source.lastSync!).toLocaleString('it-IT')}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-start gap-4">
                    <p className="font-mono text-sm text-gray-600">
                      Connetti il tuo account {source.name} per iniziare a monitorare le recensioni.
                    </p>
                    <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                      CONNETTI {source.name.toUpperCase()}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Source */}
      <Card className="group border-dashed hover:border-black/10 transition-colors">
        <div className="flex flex-col items-center justify-center py-8">
          <p className="font-mono text-sm text-gray-600 mb-4">
            Aggiungi una nuova sorgente di recensioni
          </p>
          <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
            AGGIUNGI SORGENTE
          </button>
        </div>
      </Card>
    </div>
  )
} 