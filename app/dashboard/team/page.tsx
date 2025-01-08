'use client'

import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Modal } from '@/components/ui/Modal'
import { Select } from '@/components/ui/Select'
import { Toggle } from '@/components/ui/Toggle'
import { UserPlus, Mail, User, Settings, Shield } from 'lucide-react'
import { useState } from 'react'

const mockTeamMembers = [
  {
    id: '1',
    name: 'Marco Rossi',
    email: 'marco@example.com',
    role: 'admin',
    status: 'active',
    lastActive: '2024-01-08T10:30:00Z'
  },
  {
    id: '2',
    name: 'Laura Bianchi',
    email: 'laura@example.com',
    role: 'manager',
    status: 'active',
    lastActive: '2024-01-08T09:15:00Z'
  },
  {
    id: '3',
    name: 'Giuseppe Verdi',
    email: 'giuseppe@example.com',
    role: 'viewer',
    status: 'pending',
    lastActive: null
  }
]

export default function TeamPage() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">TEAM_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Gestisci i membri del team e i loro permessi.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Cerca membri..."
          className="flex-1"
        />
        <button
          onClick={() => setIsInviteModalOpen(true)}
          className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full inline-flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          INVITA MEMBRO
        </button>
      </div>

      {/* Team Members List */}
      <div className="grid grid-cols-1 gap-6">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="group">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black/[0.02] border border-black/5 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-mono text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-sm text-gray-600">
                      {member.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={member.status === 'active' ? 'success' : 'warning'}
                    >
                      {member.status.toUpperCase()}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      {member.role.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-black/[0.02] rounded-full transition-colors">
                  <Settings className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {member.lastActive && (
              <div className="mt-4 pt-4 border-t border-black/5">
                <div className="font-mono text-xs text-gray-600">
                  ULTIMO ACCESSO: {new Date(member.lastActive).toLocaleString('it-IT')}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Invite Modal */}
      <Modal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="INVITA NUOVO MEMBRO"
      >
        <div className="space-y-6">
          <Input
            label="INDIRIZZO EMAIL"
            placeholder="email@example.com"
          />
          <Select
            label="RUOLO"
            options={[
              { value: 'admin', label: 'AMMINISTRATORE' },
              { value: 'manager', label: 'MANAGER' },
              { value: 'viewer', label: 'VISUALIZZATORE' }
            ]}
          />
          <Toggle
            label="NOTIFICA VIA EMAIL"
            description="Invia una email di invito al nuovo membro"
            checked={true}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsInviteModalOpen(false)}
              className="px-4 py-2 font-mono text-sm text-gray-600 hover:text-black transition-colors"
            >
              ANNULLA
            </button>
            <button className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 transition-colors rounded-full">
              INVIA INVITO
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
} 