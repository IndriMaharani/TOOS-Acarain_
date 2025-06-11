import { QRCodeSVG } from "qrcode"

export default function QrView({ value }: { value: string }) {
  return (
    <div className="flex justify-center">
      <QRCodeSVG value={value} />
    </div>
  )
}
