export default function useEstimateCalculator() {
  const PRICING = {
    drilling: {
      mobilization: 80000,
      drillingPerMeter: 6500,
      casingPerMeter: 2500,
      gravelPerMeter: 150,
      developmentPerMeter: 300,
    },
    otherService: {
      serviceCharge: 45000,
      labourTransport: 15000,
    },
  }

  const calculateCosts = (form) => {
    let breakdown = {}
    let total = 0

    if (!form?.serviceType) return { breakdown, total }

    /* ----------- DRILLING LOGIC ----------- */
    if (form.serviceType === "Borehole Drilling") {
      const depth = Math.max(0, Number(form.depth || 0))

      const mobilization = PRICING.drilling.mobilization
      const drillingCost = depth * PRICING.drilling.drillingPerMeter
      const casing = depth * PRICING.drilling.casingPerMeter
      const gravel = depth * PRICING.drilling.gravelPerMeter
      const development = depth * PRICING.drilling.developmentPerMeter

      breakdown = {
        Mobilization: mobilization,
        "Drilling Cost": drillingCost,
        "Casing Cost": casing,
        "Gravel Pack": gravel,
        "Well Development": development,
      }

      total = mobilization + drillingCost + casing + gravel + development
    }

    /* ----------- OTHER SERVICES ----------- */
    else {
      breakdown = {
        "Service Charge": PRICING.otherService.serviceCharge,
        "Labour & Transport": PRICING.otherService.labourTransport,
      }
      total = PRICING.otherService.serviceCharge + PRICING.otherService.labourTransport
    }

    return { breakdown, total }
  }

  return { calculateCosts }
}
