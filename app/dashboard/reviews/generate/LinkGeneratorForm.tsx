'use client'

import { useState, useEffect } from 'react'
import { QrCode, Copy, Upload } from 'lucide-react'
import QRCode from 'qrcode'
import { User } from '@supabase/supabase-js'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'

interface LinkGeneratorFormProps {
  user?: User
}

export default function LinkGeneratorForm({ user }: LinkGeneratorFormProps) {
  const [customLink, setCustomLink] = useState('')
  const [logo, setLogo] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [businessName, setBusinessName] = useState('')
  const [description, setDescription] = useState('')
  const [googleReviewUrl, setGoogleReviewUrl] = useState('')

  // Generate the review link based on custom link
  const reviewLink = `https://orion.reviews/r/${customLink || 'your-business'}`

  // Generate QR code when review link changes
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(reviewLink, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
        setQrCodeDataUrl(dataUrl)
      } catch (err) {
        console.error('Error generating QR code:', err)
        setError('Errore nella generazione del QR code')
      }
    }

    generateQRCode()
  }, [reviewLink])

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLogo(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCustomLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')
    setCustomLink(value)
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      setError(null)
      alert('Link generato con successo!')
    } catch (err) {
      console.error('Error saving business profile:', err)
      setError('Errore nel salvataggio del profilo')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const downloadQRCode = () => {
    const link = document.createElement('a')
    link.href = qrCodeDataUrl
    link.download = 'review-qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-black/5">
        <Heading className="mb-2">GENERA LINK RECENSIONI_</Heading>
        <p className="font-mono text-sm text-gray-600">
          Crea link personalizzati e codici QR per raccogliere recensioni dai tuoi clienti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Business Info */}
        <div className="space-y-6">
          <Card className="group">
            <h2 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors mb-6">
              INFORMAZIONI ATTIVITÀ
            </h2>
            
            <div className="space-y-4">
              <Input
                label="NOME ATTIVITÀ"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Es. Pizzeria Bella Italia"
              />

              <div>
                <label className="block font-mono text-sm text-gray-600 mb-2">
                  DESCRIZIONE
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Breve descrizione della tua attività"
                  className="w-full px-4 py-2 font-mono text-sm bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 hover:bg-white/90 transition-colors"
                  rows={3}
                />
              </div>

              <Input
                label="LINK GOOGLE REVIEWS"
                value={googleReviewUrl}
                onChange={(e) => setGoogleReviewUrl(e.target.value)}
                placeholder="https://g.page/r/..."
              />
            </div>
          </Card>

          <Card className="group">
            <h2 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors mb-6">
              LINK PERSONALIZZATO
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-gray-600 mb-2">
                  URL PERSONALIZZATO
                </label>
                <div className="flex">
                  <span className="px-3 py-2 font-mono text-sm bg-white/80 backdrop-blur-xl border border-r-0 border-black/5 rounded-l-full">
                    orion.reviews/r/
                  </span>
                  <input
                    type="text"
                    value={customLink}
                    onChange={handleCustomLinkChange}
                    placeholder="la-tua-attivita"
                    className="flex-1 px-4 py-2 font-mono text-sm bg-white/80 backdrop-blur-xl border border-black/5 rounded-r-full focus:outline-none focus:ring-2 focus:ring-black/5 hover:bg-white/90 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-600 mb-2">
                  LINK COMPLETO
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={reviewLink}
                    readOnly
                    className="flex-1 px-4 py-2 font-mono text-sm bg-black/[0.02] border border-black/5 rounded-full"
                  />
                  <button
                    onClick={() => copyToClipboard(reviewLink)}
                    className="p-2 hover:bg-black/[0.02] rounded-full transition-colors"
                  >
                    <Copy className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Logo Upload */}
          <Card className="group">
            <h2 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors mb-6">
              LOGO AZIENDALE
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-center items-center border-2 border-dashed border-black/5 hover:border-black/10 transition-colors rounded-2xl p-8">
                {logoPreview ? (
                  <div className="text-center">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="max-w-[200px] max-h-[200px] mx-auto mb-4 rounded-2xl"
                    />
                    <button
                      onClick={() => {
                        setLogo(null)
                        setLogoPreview(null)
                      }}
                      className="font-mono text-sm text-red-500 hover:text-red-600 transition-colors"
                    >
                      RIMUOVI
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <span className="block font-mono text-sm text-gray-600">
                      Carica il tuo logo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* QR Code Preview */}
        <div className="space-y-6">
          <Card className="group">
            <h2 className="font-mono text-lg text-gray-600 group-hover:text-gray-900 transition-colors mb-6">
              ANTEPRIMA QR CODE
            </h2>
            
            <div className="space-y-6">
              <div className="flex justify-center p-4 bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl">
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="QR Code"
                    className="max-w-[200px]"
                  />
                ) : (
                  <div className="flex items-center justify-center w-[200px] h-[200px] bg-black/[0.02] rounded-2xl">
                    <QrCode className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => copyToClipboard(reviewLink)}
                  className="px-4 py-2 font-mono text-sm bg-black/[0.02] hover:bg-black/[0.05] border border-black/5 rounded-full transition-colors"
                >
                  COPIA LINK
                </button>
                <button
                  onClick={downloadQRCode}
                  disabled={!qrCodeDataUrl}
                  className="px-4 py-2 font-mono text-sm bg-black text-white hover:bg-black/90 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  SCARICA QR
                </button>
              </div>

              <div className="text-center font-mono text-xs text-gray-600">
                Stampa questo codice QR e posizionalo nel tuo locale
                <br />
                per raccogliere facilmente le recensioni dei clienti
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={loading || !businessName || !customLink}
            className="w-full px-4 py-3 font-mono text-sm bg-black text-white hover:bg-black/90 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'SALVATAGGIO...' : 'SALVA E GENERA LINK'}
          </button>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl font-mono text-sm text-red-700">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 