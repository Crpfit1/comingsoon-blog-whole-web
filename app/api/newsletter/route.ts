import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema for email
const newsletterSchema = z.object({
  email: z.string().email('Adresse email invalide'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = newsletterSchema.parse(body)
    const { email } = validatedData

    // Check if email already exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Cette adresse email est déjà inscrite à notre newsletter.' 
          },
          { status: 400 }
        )
      } else {
        // Reactivate the subscriber
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { isActive: true },
        })
        
        return NextResponse.json(
          { 
            success: true, 
            message: 'Votre inscription a été réactivée avec succès !' 
          },
          { status: 200 }
        )
      }
    }

    // Create new subscriber
    await prisma.newsletterSubscriber.create({
      data: {
        email,
        isActive: true,
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription réussie ! Vous recevrez bientôt nos actualités.' 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Newsletter signup error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Adresse email invalide. Veuillez réessayer.' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      where: { isActive: true },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(
      { 
        success: true, 
        data: subscribers,
        count: subscribers.length 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Get subscribers error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue lors de la récupération des données.' 
      },
      { status: 500 }
    )
  }
} 