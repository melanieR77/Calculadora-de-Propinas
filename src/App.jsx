import { useState } from "react";

const TIP_OPTIONS = [
  { label: "10%", value: 10 },
  { label: "15%", value: 15 },
  { label: "20%", value: 20 },
];

export default function App() {
  // ── Estado ──────────────────────────────────────────────────
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);

  // ── Cálculos ────────────────────────────────────────────────
  const billAmount = parseFloat(bill) || 0;
  const tipAmount =
    selectedTip !== null ? (billAmount * selectedTip) / 100 : 0;
  const total = billAmount + tipAmount;
  const hasResults = billAmount > 0 && selectedTip !== null;

  // ── Helpers ─────────────────────────────────────────────────
  const fmt = (n) =>
    n.toLocaleString("es-HN", { style: "currency", currency: "HNL" });

  const handleReset = () => {
    setBill("");
    setSelectedTip(null);
  };

  // ── UI ──────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#fdf6ec] flex items-center justify-center px-4 py-10">
      {/* Tarjeta principal */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Encabezado */}
        <div className="bg-[#c8602a] px-8 pt-8 pb-10 relative">
          <p className="text-[#f5d9c3] text-sm font-body tracking-widest uppercase mb-1">
            Herramienta de Sofía
          </p>
          <h1 className="font-display text-white text-4xl font-black leading-tight">
            Calculadora<br />de Propinas
          </h1>
          {/* Decoración circular */}
          <div className="absolute right-6 top-6 w-20 h-20 rounded-full bg-white/10 border border-white/20" />
          <div className="absolute right-12 top-12 w-8 h-8 rounded-full bg-white/20" />
        </div>

        {/* Cuerpo del formulario */}
        <div className="px-8 pt-8 pb-10 space-y-7">

          {/* Campo: monto de la cuenta */}
          <div>
            <label
              htmlFor="bill"
              className="block text-xs font-semibold tracking-widest uppercase text-[#8c5e3c] mb-2 font-body"
            >
              Monto de la cuenta
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c8602a] font-bold text-lg select-none">
                L
              </span>
              <input
                id="bill"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="
                  w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#f0d9c8]
                  bg-[#fdf6ec] text-[#3d1f0a] font-body text-lg font-medium
                  focus:outline-none focus:border-[#c8602a] transition-colors
                  placeholder:text-[#c9a98a]
                "
              />
            </div>
          </div>

          {/* Selección de porcentaje */}
          <div>
            <p className="block text-xs font-semibold tracking-widest uppercase text-[#8c5e3c] mb-3 font-body">
              Porcentaje de propina
            </p>
            <div className="grid grid-cols-3 gap-3">
              {TIP_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedTip(opt.value)}
                  className={`
                    py-3 rounded-xl font-body font-semibold text-lg transition-all duration-150
                    ${
                      selectedTip === opt.value
                        ? "bg-[#c8602a] text-white shadow-md scale-105"
                        : "bg-[#fdf6ec] text-[#c8602a] border-2 border-[#f0d9c8] hover:border-[#c8602a]"
                    }
                  `}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div
            className={`rounded-2xl p-6 bg-[#3d1f0a] transition-opacity duration-300 ${
              hasResults ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-[#c9a98a] text-xs tracking-widest uppercase font-body">
                  Propina
                </p>
                <p className="text-white font-display text-2xl font-bold mt-0.5">
                  {hasResults ? fmt(tipAmount) : "—"}
                </p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-right">
                <p className="text-[#c9a98a] text-xs tracking-widest uppercase font-body">
                  Total a pagar
                </p>
                <p className="text-[#f5b97e] font-display text-2xl font-bold mt-0.5">
                  {hasResults ? fmt(total) : "—"}
                </p>
              </div>
            </div>

            {hasResults && (
              <p className="text-center text-[#c9a98a] text-xs font-body mt-1">
                Propina del {selectedTip}% sobre {fmt(billAmount)}
              </p>
            )}
          </div>

          {/* Botón reset */}
          <button
            onClick={handleReset}
            disabled={!bill && selectedTip === null}
            className="
              w-full py-3 rounded-xl font-body font-semibold text-sm tracking-widest uppercase
              border-2 border-[#f0d9c8] text-[#8c5e3c] transition-all
              hover:border-[#c8602a] hover:text-[#c8602a]
              disabled:opacity-30 disabled:cursor-not-allowed
            "
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}
