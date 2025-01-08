'use client'

import { useState, useEffect } from 'react'
import { QrCode, Copy, Upload } from 'lucide-react'
import QRCode from 'qrcode'
import { User } from '@supabase/supabase-js'

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

      // In production, we would upload the logo to Supabase Storage
      // const { data, error } = await supabase.storage
      //   .from('logos')
      //   .upload(`${Date.now()}-${file.name}`, file)
      // if (error) {
      //   console.error('Error uploading logo:', error)
      //   setError('Errore nel caricamento del logo')
      //   return
      // }
      // const logoUrl = supabase.storage.from('logos').getPublicUrl(data.path).data.publicUrl
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

      // For now, just show success message
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b border-gray-700 pb-6">
        <h1 className="font-mono text-2xl mb-2">GENERA LINK RECENSIONI_</h1>
        <p className="font-mono text-sm text-gray-700">
          Crea link personalizzati e codici QR per raccogliere recensioni dai tuoi clienti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Business Info */}
        <div className="space-y-6">
          <div className="border border-gray-700 p-6">
            <h2 className="font-mono text-lg mb-4">INFORMAZIONI ATTIVITÀ</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">
                  NOME ATTIVITÀ
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Es. Pizzeria Bella Italia"
                  className="w-full px-4 py-2 border border-gray-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">
                  DESCRIZIONE
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Breve descrizione della tua attività"
                  className="w-full px-4 py-2 border border-gray-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  rows={3}
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">
                  LINK GOOGLE REVIEWS
                </label>
                <input
                  type="text"
                  value={googleReviewUrl}
                  onChange={(e) => setGoogleReviewUrl(e.target.value)}
                  placeholder="https://g.page/r/..."
                  className="w-full px-4 py-2 border border-gray-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 p-6">
            <h2 className="font-mono text-lg mb-4">LINK PERSONALIZZATO</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">
                  URL PERSONALIZZATO
                </label>
                <div className="flex">
                  <span className="px-3 py-2 bg-gray-100 border border-r-0 border-gray-700 font-mono text-sm">
                    orion.reviews/r/
                  </span>
                  <input
                    type="text"
                    value={customLink}
                    onChange={handleCustomLinkChange}
                    placeholder="la-tua-attivita"
                    className="flex-1 px-4 py-2 border border-gray-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-700 mb-2">
                  LINK COMPLETO
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={reviewLink}
                    readOnly
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-700 font-mono text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(reviewLink)}
                    className="px-4 py-2 border border-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Upload */}
          <div className="border border-gray-700 p-6">
            <h2 className="font-mono text-lg mb-4">LOGO AZIENDALE</h2>
            
            <div className="space-y-4">
              <div className="flex justify-center items-center border-2 border-dashed border-gray-700 p-8">
                {logoPreview ? (
                  <div className="text-center">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="max-w-[200px] max-h-[200px] mx-auto mb-4"
                    />
                    <button
                      onClick={() => {
                        setLogo(null)
                        setLogoPreview(null)
                      }}
                      className="font-mono text-sm text-red-500 hover:underline"
                    >
                      RIMUOVI
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer text-center">
                    <Upload size={32} className="mx-auto mb-2 text-gray-700" />
                    <span className="block font-mono text-sm text-gray-700">
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
          </div>
        </div>

        {/* QR Code Preview */}
        <div className="space-y-6">
          <div className="border border-gray-700 p-6">
            <h2 className="font-mono text-lg mb-4">ANTEPRIMA QR CODE</h2>
            
            <div className="space-y-6">
              <div className="flex justify-center p-4 bg-white">
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="QR Code"
                    className="max-w-[200px]"
                  />
                ) : (
                  <div className="flex items-center justify-center w-[200px] h-[200px] bg-gray-100">
                    <QrCode size={32} className="text-gray-400" />
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => copyToClipboard(reviewLink)}
                  className="px-4 py-2 font-mono text-sm border border-gray-700 hover:bg-gray-100 transition-colors"
                >
                  COPIA LINK
                </button>
                <button
                  onClick={downloadQRCode}
                  disabled={!qrCodeDataUrl}
                  className="px-4 py-2 font-mono text-sm bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  SCARICA QR
                </button>
              </div>

              <div className="text-center font-mono text-xs text-gray-700">
                Stampa questo codice QR e posizionalo nel tuo locale
                <br />
                per raccogliere facilmente le recensioni dei clienti
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={loading || !businessName || !customLink}
            className="w-full px-4 py-3 font-mono text-sm bg-black text-white border border-gray-700 hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? 'SALVATAGGIO...' : 'SALVA E GENERA LINK'}
          </button>

          {error && (
            <div className="p-4 border border-red-500 bg-red-50 text-red-500 font-mono text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 