import { type NextRequest, NextResponse } from "next/server"

interface LeadData {
  name: string
  phone: string
  budget: string
  needKPR: string
  timeline: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Validation
    if (!data.name || data.name.length < 2) {
      return NextResponse.json({ error: "Nama harus minimal 2 karakter" }, { status: 400 })
    }

    if (!data.phone || data.phone.length < 9) {
      return NextResponse.json({ error: "Nomor telepon harus minimal 9 digit" }, { status: 400 })
    }

    // Log to console for now
    console.log("=== NEW LEAD ===")
    console.log("Name:", data.name)
    console.log("Phone:", data.phone)
    console.log("Budget:", data.budget)
    console.log("Need KPR:", data.needKPR)
    console.log("Timeline:", data.timeline)
    console.log("Timestamp:", new Date().toISOString())
    console.log("================")

    // TODO: Integrate with Google Sheets
    // 1. Setup Google Sheets API credentials
    // 2. Create a sheet with columns: Timestamp, Name, Phone, Budget, Need KPR, Timeline
    // 3. Use google-spreadsheet or googleapis library to append row
    // Example:
    // const doc = new GoogleSpreadsheet(SHEET_ID);
    // await doc.useServiceAccountAuth(credentials);
    // await doc.loadInfo();
    // const sheet = doc.sheetsByIndex[0];
    // await sheet.addRow({
    //   timestamp: new Date().toISOString(),
    //   name: data.name,
    //   phone: data.phone,
    //   budget: data.budget,
    //   needKPR: data.needKPR,
    //   timeline: data.timeline,
    // });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ error: "Terjadi kesalahan, silakan coba lagi" }, { status: 500 })
  }
}
