"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export function LeadForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    needKPR: "",
    timeline: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan")
      }

      router.push("/thank-you")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Konsultasi Gratis</CardTitle>
            <p className="text-center text-muted-foreground">Isi form di bawah dan tim kami akan menghubungi Anda</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  placeholder="Masukkan nama lengkap"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="08123456789"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  required
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Pilih budget Anda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-600jt">500 - 600 juta</SelectItem>
                    <SelectItem value="600-700jt">600 - 700 juta</SelectItem>
                    <SelectItem value="700jt+">Di atas 700 juta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="kpr">Butuh Bantuan KPR?</Label>
                <Select
                  value={formData.needKPR}
                  onValueChange={(value) => setFormData({ ...formData, needKPR: value })}
                  required
                >
                  <SelectTrigger id="kpr">
                    <SelectValue placeholder="Pilih opsi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ya">Ya, butuh bantuan KPR</SelectItem>
                    <SelectItem value="tidak">Tidak, cash/bertahap</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Rencana Pembelian</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  required
                >
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Pilih timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3bulan">1-3 bulan</SelectItem>
                    <SelectItem value="3-6bulan">3-6 bulan</SelectItem>
                    <SelectItem value="6bulan+">Lebih dari 6 bulan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && <div className="text-destructive text-sm text-center">{error}</div>}

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Form Konsultasi"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
