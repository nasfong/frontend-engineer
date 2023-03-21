import { PaletteMode } from "@mui/material"
import { useLocalStorage } from "../hooks/useLocalStorage"

export default function Loading() {
  const [mode] = useLocalStorage<PaletteMode>('mode', 'light')
  return (
    <div className="loading">
      Loading<span></span>
    </div>
  )
}
