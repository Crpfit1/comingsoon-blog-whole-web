import { useState } from 'react'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Adresse email invalide'),
})

interface NewsletterResponse {
  success: boolean
  message: string
}

export function useNewsletter() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const subscribe = async (email: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      // Validate email
      newsletterSchema.parse({ email })

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data: NewsletterResponse = await response.json()

      if (data.success) {
        setSuccess(data.message)
        return true
      } else {
        setError(data.message)
        return false
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError('Adresse email invalide. Veuillez réessayer.')
      } else {
        setError('Une erreur est survenue. Veuillez réessayer plus tard.')
      }
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const clearMessages = () => {
    setError(null)
    setSuccess(null)
  }

  return {
    subscribe,
    isLoading,
    error,
    success,
    clearMessages,
  }
} 