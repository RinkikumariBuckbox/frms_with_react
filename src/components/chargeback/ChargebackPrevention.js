const ChargebackPrevention = () => {
  return (
    <div className="bg-white p-4 rounded shadow border mb-6">
      <h2 className="text-md font-semibold mb-4">
        Chargeback Prevention Strategy
      </h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {[
          {
            title: "Pre-Transaction Measures",
            impact: "High Impact",
            impactColor: "text-green-500",
            items: [
              "Enhanced fraud screening for high-risk profiles",
              "Dynamic 3D Secure based on risk score",
              "Real-time device fingerprinting",
              "Behavioral biometrics analysis",
            ],
            reduction: "Estimated reduction: 45–60%",
          },
          {
            title: "Post-Transaction Measures",
            impact: "Medium Impact",
            impactColor: "text-blue-500",
            items: [
              "Detailed transaction receipts",
              "Clear billing descriptors",
              "Proactive fraud alert notifications",
              "Automated suspicious activity follow-up",
            ],
            reduction: "Estimated reduction: 20–35%",
          },
          {
            title: "Dispute Management",
            impact: "Ongoing",
            impactColor: "text-purple-500",
            items: [
              "Automated evidence collection",
              "Real-time dispute notifications",
              "AI-powered response templates",
              "Continuous feedback loop for risk scoring",
            ],
            reduction: "Win-back rate: Est. 45%",
          },
        ].map((section, idx) => (
          <div key={idx} className="border p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{section.title}</h3>
              <span className={`text-sm ${section.impactColor}`}>
                {section.impact}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-2">{section.reduction}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          <strong className="text-green-600 text-lg">
            $182,400 (63% reduction)
          </strong>{" "}
          estimated savings
        </div>
        <div className="space-x-2">
          <button className="text-sm px-3 py-1 border rounded text-gray-600">
            Customize Strategy
          </button>
          <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">
            Deploy Strategy
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChargebackPrevention;
