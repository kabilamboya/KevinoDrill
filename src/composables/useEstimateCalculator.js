export default function useEstimateCalculator() {

  const calculateCosts = (form) => {
    let breakdown = {};
    let total = 0;

    /* ----------- DRILLING LOGIC ----------- */
    if (form.serviceType === "Borehole Drilling") {
      const depth = Number(form.depth || 0);

      const mobilization = 80000;
      const drillingCost = depth * 6500;
      const casing = depth * 2500;
      const gravel = depth * 150;
      const development = depth * 300;

      breakdown = {
        Mobilization: mobilization,
        "Drilling Cost": drillingCost,
        "Casing Cost": casing,
        "Gravel Pack": gravel,
        "Well Development": development,
      };

      total =
        mobilization + drillingCost + casing + gravel + development;
    }

    /* ----------- OTHER SERVICES ----------- */
    else {
      breakdown = {
        "Service Charge": 45000,
        "Labour & Transport": 15000,
      };
      total = 60000;
    }

    return { breakdown, total };
  };

  return { calculateCosts };
}
