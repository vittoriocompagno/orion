export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-gray-700">
        <h1 className="font-mono text-2xl mb-2">IMPOSTAZIONI_</h1>
        <p className="font-mono text-sm text-gray-700">
          Gestisci il tuo account e le integrazioni.
        </p>
      </div>

      {/* Account Settings */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">ACCOUNT</h2>
        
        <div className="border border-gray-700 p-6 space-y-6">
          <div className="space-y-2">
            <label className="block font-mono text-sm text-gray-700">
              NOME AZIENDA
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="La Tua Azienda SRL"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-mono text-sm text-gray-700">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="contatto@azienda.com"
            />
          </div>

          <div className="pt-4 border-t border-gray-700">
            <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
              SALVA MODIFICHE
            </button>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">INTEGRAZIONI</h2>
        
        <div className="border border-gray-700 p-6 space-y-6">
          {/* Google Integration */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-mono text-lg mb-1">GOOGLE BUSINESS PROFILE</h3>
              <p className="font-mono text-sm text-gray-700">
                Connetti il tuo profilo Google Business per importare le recensioni.
              </p>
            </div>
            <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
              CONNETTI
            </button>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <div className="space-y-2">
              <label className="block font-mono text-sm text-gray-700">
                GOOGLE PLACE ID
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 font-mono text-sm bg-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="ChIJ..."
              />
              <p className="font-mono text-xs text-gray-700">
                Trova il tuo Place ID su{' '}
                <a 
                  href="https://developers.google.com/places/place-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Places
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">NOTIFICHE</h2>
        
        <div className="border border-gray-700 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-mono text-sm mb-1">NUOVE RECENSIONI</h3>
              <p className="font-mono text-xs text-gray-700">
                Ricevi una notifica quando arriva una nuova recensione.
              </p>
            </div>
            <input type="checkbox" className="w-4 h-4 border border-gray-700" />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div>
              <h3 className="font-mono text-sm mb-1">RISPOSTE AUTOMATICHE</h3>
              <p className="font-mono text-xs text-gray-700">
                Ricevi una notifica quando viene inviata una risposta automatica.
              </p>
            </div>
            <input type="checkbox" className="w-4 h-4 border border-gray-700" />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div>
              <h3 className="font-mono text-sm mb-1">REPORT SETTIMANALE</h3>
              <p className="font-mono text-xs text-gray-700">
                Ricevi un report settimanale con le statistiche delle recensioni.
              </p>
            </div>
            <input type="checkbox" className="w-4 h-4 border border-gray-700" />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-red-500">ZONA PERICOLOSA</h2>
        
        <div className="border border-red-500 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-mono text-lg mb-1">ELIMINA ACCOUNT</h3>
              <p className="font-mono text-sm text-gray-700">
                Elimina permanentemente il tuo account e tutti i dati associati.
              </p>
            </div>
            <button className="font-mono text-sm px-4 py-2 bg-red-500 text-white border border-red-500 hover:translate-y-[-2px] transition-transform">
              ELIMINA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 