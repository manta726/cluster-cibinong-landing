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
    <section id="form" className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
            📋 Proses Cepat & Mudah
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Konsultasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gratis</span>
          </h2>
          <p className="text-lg text-muted-foreground">Isi form di bawah dan tim kami akan menghubungi Anda dalam waktu 24 jam</p>
        </div>

        <Card className="border-border/50 shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
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

              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-full font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block animate-spin">⏳</span>
                    Mengirim...
                  </span>
                ) : (
                  "Kirim Form Konsultasi"
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                ✓ Kami tidak akan membagikan data Anda kepada pihak ketiga
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
