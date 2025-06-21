import { NextResponse, NextRequest } from "next/server"
import prisma from "@/lib/prisma"
import { requireAdmin } from "@/lib/middleware"
import path from "path"
import fs from "fs/promises"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { error } = requireAdmin(req)
    if (error) return error

    const { id } = await params

    try {
        const event = await prisma.event.findFirst({ 
            where: { id },
            include: {
                registrations: {
                    include: {
                        major: {
                            select: { name: true }
                        }
                    }
                }
            }
        })

        if (!event) return NextResponse.json({ message: 'Event not found' }, { status: 404 })

        const eventWithQuota = {
            ...event,
            currentQuota: event.quota - event.registrations.length,
            totalRegistered: event.registrations.length
        }

        return NextResponse.json(eventWithQuota)
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { error } = requireAdmin(req)
    if (error) return error

    const { id } = await params
    
    try {
        const event = await prisma.event.findUnique({ where: { id } })
        if (!event) return NextResponse.json({ message: 'Event not found' }, { status: 404 })
        
        await prisma.event.delete({ where: { id } })

        if (event.thumbnail) {
            try {
                const filePath = path.join(process.cwd(), 'public', event.thumbnail)
                await fs.unlink(filePath)
            } catch (err) {
                console.warn('Failed to delete thumbnail', err)
            }
        }
        
        return NextResponse.json({ message: 'Deleted successfully' })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}