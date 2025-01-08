'use client'

import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">IMPOSTAZIONI_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Configura le impostazioni del tuo account e delle risposte automatiche.
        </p>
      </div>

      {/* API Settings */}
      <Card className="group">
        <h3 className="font-mono text-lg mb-4 text-gray-600 group-hover:text-gray-900 transition-colors">
          CONFIGURAZIONE API
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block font-mono text-sm text-gray-600 mb-2">
              GOOGLE PLACES API KEY
            </label>
            <div className="flex gap-2">
              <input 
                type="password" 
                value="●●●●●●●●●●●●●●●●●●●●"
                disabled
                className="flex-1 px-4 py-2 font-mono text-sm bg-black/[0.02] border border-black/5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
                MODIFICA
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Response Settings */}
      <Card className="group">
        <h3 className="font-mono text-lg mb-4 text-gray-600 group-hover:text-gray-900 transition-colors">
          RISPOSTE AUTOMATICHE
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/[0.02] border border-black/5 rounded-2xl">
            <div>
              <div className="font-mono text-sm mb-1">RISPOSTE AUTOMATICHE</div>
              <div className="font-mono text-sm text-gray-600">
                Abilita le risposte automatiche per le nuove recensioni
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>

          <div>
            <label className="block font-mono text-sm text-gray-600 mb-2">
              TEMPO DI ATTESA MINIMO
            </label>
            <select className="w-full px-4 py-2 font-mono text-sm bg-white/80 backdrop-blur-xl border border-black/5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:bg-white/90 transition-colors">
              <option value="0">NESSUNA ATTESA</option>
              <option value="1">1 ORA</option>
              <option value="2">2 ORE</option>
              <option value="4">4 ORE</option>
              <option value="8">8 ORE</option>
              <option value="24">24 ORE</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-sm text-gray-600 mb-2">
              TONO DELLE RISPOSTE
            </label>
            <select className="w-full px-4 py-2 font-mono text-sm bg-white/80 backdrop-blur-xl border border-black/5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:bg-white/90 transition-colors">
              <option value="formal">FORMALE</option>
              <option value="friendly">AMICHEVOLE</option>
              <option value="casual">CASUAL</option>
              <option value="professional">PROFESSIONALE</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="group">
        <h3 className="font-mono text-lg mb-4 text-gray-600 group-hover:text-gray-900 transition-colors">
          NOTIFICHE
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/[0.02] border border-black/5 rounded-2xl">
            <div>
              <div className="font-mono text-sm mb-1">NOTIFICHE EMAIL</div>
              <div className="font-mono text-sm text-gray-600">
                Ricevi notifiche email per le nuove recensioni
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-black/[0.02] border border-black/5 rounded-2xl">
            <div>
              <div className="font-mono text-sm mb-1">NOTIFICHE BROWSER</div>
              <div className="font-mono text-sm text-gray-600">
                Ricevi notifiche nel browser per le nuove recensioni
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
          SALVA MODIFICHE
        </button>
      </div>
    </div>
  )
} 