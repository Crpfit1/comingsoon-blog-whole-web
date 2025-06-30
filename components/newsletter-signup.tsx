"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useNewsletter } from '@/hooks/use-newsletter'
import { toast } from 'sonner'

interface NewsletterSignupProps {
  className?: string
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
}

export function NewsletterSignup({
  className = "",
  title = "Soyez les premiers informés",
  description = "Inscrivez-vous à notre newsletter pour être notifié du lancement de notre blog",
  placeholder = "Votre adresse email",
  buttonText = "S'inscrire"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const { subscribe, isLoading, error, success, clearMessages } = useNewsletter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error('Veuillez saisir votre adresse email')
      return
    }

    const result = await subscribe(email)
    
    if (result) {
      setEmail('')
      toast.success('Inscription réussie !')
    } else {
      toast.error(error || 'Une erreur est survenue')
    }
  }

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 ${className}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          disabled={isLoading}
        />
        <Button 
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Inscription...' : buttonText}
        </Button>
      </form>
      
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
      
      {success && (
        <p className="text-green-500 text-sm mt-2">{success}</p>
      )}
    </div>
  )
} 