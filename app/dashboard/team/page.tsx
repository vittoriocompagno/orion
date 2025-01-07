export default function TeamPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-mono text-2xl mb-2">TEAM_</h1>
            <p className="font-mono text-sm text-gray-700">
              Gestisci i membri del team e i loro permessi.
            </p>
          </div>
          <button className="font-mono text-sm px-4 py-2 bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform">
            INVITA MEMBRO
          </button>
        </div>
      </div>

      {/* Active Members */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">MEMBRI ATTIVI</h2>
        
        <div className="border border-gray-700">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-700 font-mono text-sm text-gray-700">
            <div>UTENTE</div>
            <div>RUOLO</div>
            <div>ULTIMO ACCESSO</div>
            <div className="text-right">AZIONI</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700">
            {/* Member Row */}
            <div className="grid grid-cols-4 gap-4 p-4 items-center">
              <div className="font-mono text-sm">
                <div>Marco Rossi</div>
                <div className="text-gray-700">marco@azienda.com</div>
              </div>
              <div>
                <span className="font-mono text-sm px-2 py-1 bg-black text-white">
                  ADMIN
                </span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                2 ORE FA
              </div>
              <div className="text-right">
                <button className="font-mono text-sm text-accent hover:underline">
                  MODIFICA
                </button>
              </div>
            </div>

            {/* Member Row */}
            <div className="grid grid-cols-4 gap-4 p-4 items-center">
              <div className="font-mono text-sm">
                <div>Laura Bianchi</div>
                <div className="text-gray-700">laura@azienda.com</div>
              </div>
              <div>
                <span className="font-mono text-sm px-2 py-1 border border-gray-700">
                  MODERATORE
                </span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                5 ORE FA
              </div>
              <div className="text-right">
                <button className="font-mono text-sm text-accent hover:underline">
                  MODIFICA
                </button>
              </div>
            </div>

            {/* Member Row */}
            <div className="grid grid-cols-4 gap-4 p-4 items-center">
              <div className="font-mono text-sm">
                <div>Giuseppe Verdi</div>
                <div className="text-gray-700">giuseppe@azienda.com</div>
              </div>
              <div>
                <span className="font-mono text-sm px-2 py-1 border border-gray-700">
                  VISUALIZZATORE
                </span>
              </div>
              <div className="font-mono text-sm text-gray-700">
                1 GIORNO FA
              </div>
              <div className="text-right">
                <button className="font-mono text-sm text-accent hover:underline">
                  MODIFICA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Invites */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">INVITI IN SOSPESO</h2>
        
        <div className="border border-gray-700">
          <div className="p-4 flex items-center justify-between">
            <div className="font-mono text-sm">
              <div>anna@azienda.com</div>
              <div className="text-gray-700">Inviato 2 giorni fa</div>
            </div>
            <div className="flex items-center gap-4">
              <button className="font-mono text-sm text-gray-700 hover:text-black transition-colors">
                ANNULLA INVITO
              </button>
              <button className="font-mono text-sm text-accent hover:underline">
                INVIA DI NUOVO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Roles and Permissions */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl">RUOLI E PERMESSI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admin Role */}
          <div className="border border-gray-700 p-6">
            <h3 className="font-mono text-lg mb-4">ADMIN</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                Gestione team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                Gestione risposte
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                Configurazione
              </li>
            </ul>
          </div>

          {/* Moderator Role */}
          <div className="border border-gray-700 p-6">
            <h3 className="font-mono text-lg mb-4">MODERATORE</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                Gestione team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                Gestione risposte
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">●</span>
                Configurazione
              </li>
            </ul>
          </div>

          {/* Viewer Role */}
          <div className="border border-gray-700 p-6">
            <h3 className="font-mono text-lg mb-4">VISUALIZZATORE</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                Gestione team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                Gestione risposte
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                Configurazione
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 