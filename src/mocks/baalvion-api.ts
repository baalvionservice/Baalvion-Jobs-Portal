
export const navigation = [
  { name: "Platform", href: "/platform", sub: ["Overview", "Features", "Architecture", "Service Mesh"] },
  { name: "Infrastructure", href: "/infrastructure", sub: ["Security Mesh", "Fraud Detection", "Audit Logs", "Enterprise Integration", "Web3 Ledger"] },
  { name: "Marketplace", href: "/marketplace", sub: ["Asset Catalog", "Vendor Analytics", "AI Sourcing", "Global Orders", "Network Clusters"] },
  { name: "Trade Finance", href: "/trade-finance", sub: ["Treasury", "FX Risk Analytics", "Payments", "FX Rates", "Hedging & Routing"] },
  { name: "Trade Intelligence", href: "/trade-intelligence", sub: ["Analytics Dashboard", "AI Predictive", "Predictive Simulation", "Market What-Ifs", "Institutional Reports"] },
  { name: "Compliance", href: "/compliance", sub: ["Regulatory Engine", "Violation Hub", "Sovereign Law Mesh", "Identity & KYC", "Customs Node"] },
  { name: "Workflows", href: "/workflows", sub: ["Task Orchestration", "Rule Engine", "Automation Logs"] },
  { name: "Partners", href: "/partners", sub: ["Ecosystem Directory", "Onboarding Roadmap", "Integration Hub"] },
  { name: "Notifications", href: "/notifications", sub: ["Institutional Alerts", "Operational Monitoring", "System Messages"] },
  { name: "Admin", href: "/admin", sub: ["Dashboard", "User Management", "Global Settings", "System Health"] },
  { name: "Scalability", href: "/scalability", sub: ["Stress Testing", "Performance Mesh", "Load Analytics"] },
  { name: "Company", href: "/company", sub: ["About Baalvion", "Leadership", "Institutional Careers", "Newsroom"] },
  { name: "Contact", href: "/contact", sub: [] },
  { name: "Request Access", href: "/request-access", sub: [] },
  { name: "Audit", href: "/audit", sub: [] }
];

export const footerLinks = {
  platform: ["Overview", "Marketplace", "Trade Intelligence", "Workflows", "Scalability"],
  infrastructure: ["Security", "API Docs", "Integration Hub", "Status"],
  company: ["About Us", "Leadership", "Careers", "Global Presence"],
  legal: ["Privacy Policy", "Terms of Service", "Trade Compliance"]
};

export const scalabilityMetrics = {
  performance: [
    { time: "00:00", latency: 8, throughput: 45000, errorRate: 0.01 },
    { time: "04:00", latency: 12, throughput: 48000, errorRate: 0.02 },
    { time: "08:00", latency: 15, throughput: 52000, errorRate: 0.05 },
    { time: "12:00", latency: 10, throughput: 50000, errorRate: 0.03 },
    { time: "16:00", latency: 9, throughput: 47000, errorRate: 0.01 },
    { time: "20:00", latency: 11, throughput: 49000, errorRate: 0.02 }
  ],
  regionalLatency: [
    { region: "North America", latency: 12, status: "Healthy" },
    { region: "Europe", latency: 18, status: "Healthy" },
    { region: "Asia", latency: 45, status: "Under Load" },
    { region: "Global Mesh", latency: 5, status: "Healthy" }
  ],
  stressScenarios: [
    { id: "S1", name: "Extreme Market Crash", impact: "High Volume / High Latency", color: "rose" },
    { id: "S2", name: "Sovereign Node Offline", impact: "Failover Rerouting", color: "amber" },
    { id: "S3", name: "Global Sourcing Surge", impact: "Throughput Peak", color: "blue" },
    { id: "S4", name: "API Throttling Test", impact: "Rate Limit Resilience", color: "emerald" }
  ]
};

export const platform = {
  features: [
    { id: 1, name: "Global Trade Dashboard", description: "Overview of all trading activities across 198+ nations." },
    { id: 2, name: "Vendor Management", description: "Manage vendors with scoring and analytics." },
    { id: 3, name: "AI Recommendations", description: "Automated suggestions for trade optimization and cost reduction." },
    { id: 4, name: "Integrated Trade Finance", description: "Direct institutional liquidity and multi-currency settlement." },
    { id: 5, name: "Sovereign Compliance", description: "Automated regulatory monitoring ensuring international standards." },
    { id: 6, name: "Digital Identity", description: "High-fidelity KYB/KYC verification for every institutional entity." }
  ],
  architecture: [
    { title: "Cloud Mesh Infrastructure", description: "AWS + GCP hybrid mesh for 99.998% global availability.", type: "Infrastructure" },
    { title: "Real-time Persistence", description: "Distributed Firestore + Redis clusters for instant data sync.", type: "Persistence" },
    { title: "Unified Service API", description: "Secure gRPC and REST endpoints for enterprise-scale systems.", type: "Connectivity" }
  ]
};

export const infrastructure = {
  security: [
    { id: 1, name: "AES-256 Encryption", status: "Active", level: "High", description: "End-to-end encryption and role-based access control." },
    { id: 2, name: "Institutional 2FA", status: "Active", level: "Medium", description: "2FA and audit logging enabled." },
    { id: 3, name: "Neural Network Firewall", status: "Active", level: "High", description: "Advanced threat detection and prevention." },
    { id: 4, name: "Audit Logging", status: "Active", level: "Medium", description: "Continuous monitoring of all system access." }
  ],
  fraudEvents: [
    { id: "FRD101", type: "Pattern Anomaly", risk_score: 0.94, transaction_id: "TX9876", entity: "Z-Node Logistics", status: "Flagged", message: "Unusual cross-border payment frequency", date: "2026-03-05 19:45" },
    { id: "FRD102", type: "Reputation Drop", risk_score: 0.88, transaction_id: "TX9877", entity: "Andean Resources", status: "Review Required", message: "Vendor reputation score fell below threshold", date: "2026-03-05 18:20" },
    { id: "FRD103", type: "Volume Spike", risk_score: 0.97, transaction_id: "TX9878", entity: "Global Metals Ltd", status: "Locked", message: "1000% volume surge in non-standard corridor", date: "2026-03-05 17:10" }
  ],
  integrations: [
    { id: "INT101", name: "SAP Ariba Connector", status: "Success", records: 2345, latency: "120ms", last_sync: "2 Min Ago" },
    { id: "INT102", name: "Oracle ERP Hub", status: "Partial Failure", records: 1890, latency: "450ms", last_sync: "5 Min Ago", error: "Connection Timeout on North American Node" },
    { id: "INT103", name: "Government Customs API", status: "Success", records: 120, latency: "85ms", last_sync: "12 Min Ago" },
    { id: "INT104", name: "Alibaba Business Node", status: "Success", records: 45600, latency: "210ms", last_sync: "1 Min Ago" }
  ],
  auditLogs: [
    { id: "LOG123456", user: "DID123456", action: "Created LC", module: "Trade Finance", details: "$500,000 USD", timestamp: "2026-03-05 16:10" },
    { id: "LOG123457", user: "DID123456", action: "Approved Payment", module: "Payment", details: "$200,000 USD", timestamp: "2026-03-05 16:15" },
    { id: "LOG123458", user: "DID789012", action: "Revoked DID", module: "Compliance", details: "DID1003", timestamp: "2026-03-05 16:20" }
  ],
  blockchainLogs: [
    { tx_hash: "0xabc123...def456", block: "14,205,091", status: "Finalized", type: "Trade Settlement", user: "DID123456", timestamp: "2 Min Ago", integrity: "Verified" },
    { tx_hash: "0x789ghi...jkl012", block: "14,205,090", status: "Finalized", type: "Letter of Credit", user: "DID789012", timestamp: "15 Min Ago", integrity: "Verified" },
    { tx_hash: "0x345mno...pqr345", block: "14,205,089", status: "Finalized", type: "Vendor DID Mint", user: "SYS_ROOT", timestamp: "1h Ago", integrity: "Verified" },
    { tx_hash: "0xdead...beef", block: "14,205,088", status: "Flagged", type: "Payment Reroute", user: "DID1001", timestamp: "2h Ago", integrity: "Anomaly Detected", conflict: "Hash Mismatch" }
  ],
  permissions: [
    { module: "Trade Finance", permissions: ["Read", "Write", "Approve"], status: "Active" },
    { module: "Compliance", permissions: ["Read", "Write"], status: "Active" },
    { module: "Logistics", permissions: ["Read"], status: "Restricted" }
  ],
  fraudAlerts: [
    { id: "TX4059", risk_score: 0.85, flags: ["SuspiciousHighAmount"], status: "Flagged", date: "2026-03-05" },
    { id: "TX4060", risk_score: 0.12, flags: [], status: "Clean", date: "2026-03-05" }
  ],
  threatHeatmap: [
    { region: "North America", threats: 5, level: "Low", anomalies: 12, critical: 0 },
    { region: "Europe", threats: 12, level: "Medium", anomalies: 45, critical: 2 },
    { region: "Asia", threats: 45, level: "High", anomalies: 128, critical: 8 },
    { region: "Global Mesh", threats: 2, level: "Low", anomalies: 15, critical: 0 }
  ]
};

export const tradeFinance = {
  wallet: [
    { currency: "USD", balance: 1250000, trend: "+12%", hedge_gain: "+$4.2k" },
    { currency: "EUR", balance: 840000, trend: "+5%", hedge_gain: "+$1.8k" },
    { currency: "INR", balance: 105000000, trend: "+8%", hedge_gain: "-$0.5k" }
  ],
  fxRiskAnalytics: [
    { pair: "USD/INR", risk_level: "High", volatility: "12%", exposure: 1500000, suggestion: "Hedge 25% of Q2 liabilities." },
    { pair: "EUR/USD", risk_level: "Low", volatility: "2%", exposure: 800000, suggestion: "Maintain current spot position." },
    { pair: "CNY/USD", risk_level: "Medium", volatility: "5%", exposure: 2200000, suggestion: "Consider alternative routing via JPY corridor." }
  ],
  fxHeatmap: [
    { region: "SE Asia", risk: 85, color: "#E11D48" },
    { region: "LatAm", risk: 65, color: "#F59E0B" },
    { region: "EU Mesh", risk: 15, color: "#10B981" },
    { region: "MENA", risk: 45, color: "#3B82F6" }
  ],
  letters_of_credit: [
    { id: "LC123456", applicant: "Company A", beneficiary: "Company B", amount: 500000, currency: "USD", status: "Approved", issue_date: "2026-03-01", expiry_date: "2026-12-31", transactions: [{ date: "2026-03-01", type: "Initial Deposit", amount: 100000, status: "Completed" }] },
    { id: "LC987654", applicant: "Global Metals Ltd", beneficiary: "Andean Resources", amount: 50000, currency: "USD", status: "Pending", issue_date: "2026-03-01", expiry_date: "2026-06-01", transactions: [] }
  ],
  payments: [
    { id: "PAY98765", sender: "DID1001", receiver: "DID1002", amount: 100000, currency: "USD", status: "Completed", date: "2026-03-01", route: "Swift-Node-Alpha", fee: 120, risk_alert: false },
    { id: "PAY11223", sender: "DID1002", receiver: "DID1003", amount: 15000, currency: "EUR", status: "Pending", date: "2026-03-04", route: "SEPA-Node-01", fee: 45, risk_alert: false },
    { id: "PAYEDGE01", sender: "DID1001", receiver: "DID9999", amount: 1500000, currency: "USD", status: "Flagged", date: "2026-03-05", route: "Swift-Node-Alpha", fee: 2500, risk_alert: true }
  ],
  routingMetrics: [
    { name: 'Swift-Node-Alpha', volume: 450000, efficiency: 98 },
    { name: 'SEPA-Node-01', volume: 320000, efficiency: 99 },
    { name: 'Direct-Bank-B', volume: 180000, efficiency: 94 }
  ],
  optimizationSavings: [
    { month: 'Oct', savings: 1200 },
    { month: 'Nov', savings: 1500 },
    { month: 'Dec', savings: 1800 },
    { month: 'Jan', savings: 2100 },
    { month: 'Feb', savings: 2400 },
    { month: 'Mar', savings: 2800 }
  ],
  hedgingStrategies: [
    { id: "HEDGE01", pair: "USD/INR", type: "Forward Contract", amount: 500000, rate: 82.15, expiry: "2026-06-30", status: "Active" },
    { id: "HEDGE02", pair: "EUR/USD", type: "Option", amount: 250000, rate: 1.09, expiry: "2026-04-15", status: "Pending" }
  ],
  hyperFXScenarios: [
    { id: "VOL01", name: "Emerging Market Crash", risk: "Extreme", impact: "-18% P&L", recommendation: "Auto-hedge all local liabilities." },
    { id: "VOL02", name: "Global Dollar Surge", risk: "High", impact: "-5% Margin", recommendation: "Diversify into EUR/JPY settlement nodes." }
  ]
};

export const compliance = {
  rules: [
    { id: "RULE001", name: "KYC Verification", description: "Mandatory corporate identity validation.", active: true },
    { id: "RULE002", name: "Sanctions Screening", description: "Real-time check against international trade sanctions.", active: true },
    { id: "RULE003", name: "Tax Compliance Node", description: "Automated verification of VAT/GST identifiers.", active: true }
  ],
  violations: [
    { id: "VIO98765", type: "Export Control", severity: "High", entity: "Andean Resources", message: "Missing export license for restricted category.", status: "Violation", suggested_action: "Hold shipment immediately." },
    { id: "VIO98766", type: "Sanctions", severity: "Critical", entity: "Z-Node Logistics", message: "Interaction with sanctioned entity detected in secondary route.", status: "Violation", suggested_action: "Lock institutional account." },
    { id: "VIO98767", type: "Documentation", severity: "Medium", entity: "Global Metals Ltd", message: "Certificate of origin mismatch.", status: "Warning", suggested_action: "Request document update." }
  ],
  lawUpdates: [
    { id: "LAW101", title: "New EU Carbon Tax", date: "2h ago", impact: "High", region: "Europe" },
    { id: "LAW102", title: "US Export Control Update", date: "5h ago", impact: "Medium", region: "North America" },
    { id: "LAW103", title: "Singapore Trade Parity", date: "1d ago", impact: "Low", region: "Asia" }
  ]
};

export const notifications = {
  alerts: [
    { id: "AL1001", type: "Payment", message: "Institutional payment TX1001 is pending node release.", status: "Unread", date: "2026-03-04", geolocation: "New York Hub" },
    { id: "AL1002", type: "Compliance", message: "Sovereign node 'Vendor C' KYC has been rejected.", status: "Unread", date: "2026-03-03", geolocation: "Singapore Node" },
    { id: "AL1003", type: "Trade", message: "Logistics shipment SHP1002 cleared customs at Rotterdam.", status: "Read", date: "2026-03-02", geolocation: "Rotterdam Port" },
    { id: "AL1004", type: "Payment", message: "Institutional settlement TX1002 completed successfully.", status: "Read", date: "2026-03-01", geolocation: "Global Cloud" }
  ],
  alertTypes: ["All", "Payment", "Compliance", "Trade"],
  alertStatuses: ["All", "Unread", "Read"]
};

export const partners = {
  list: [
    { id: 1, name: "Sovereign Bank Corp", type: "Financial Institution" },
    { id: 2, name: "Global Freight Network", type: "Logistics Partner" },
    { id: 3, name: "Node Infrastructure Hub", type: "Infrastructure Partner" }
  ],
  onboardingSteps: [
    { step: 1, description: "Institutional Identity Verification & NDA" },
    { step: 2, description: "Technical Integration & API Handshake" },
    { step: 3, description: "Node Activation & Transaction Sourcing" }
  ]
};

export const aiIntelligence = {
  forecasts: [
    { forecast_id: "TF123456", period: "2026-Q2", predicted_volume: 5000, predicted_value: 2500000, confidence: 0.92, category: "Electronics" },
    { forecast_id: "TF123457", period: "2026-Q3", predicted_volume: 5200, predicted_value: 2650000, confidence: 0.89, category: "Metals" },
    { forecast_id: "TF123458", period: "2026-Q4", predicted_volume: 5800, predicted_value: 2900000, confidence: 0.85, category: "Agriculture" }
  ],
  riskScores: [
    { transaction_id: "TX4059", user_id: "DID1001", risk_level: "Low", score: 0.12, flags: [] },
    { transaction_id: "TX4060", user_id: "DID1002", risk_level: "Medium", score: 0.68, flags: ["SanctionsCheckPending"] },
    { transaction_id: "TX4061", user_id: "DID1003", risk_level: "High", score: 0.94, flags: ["SanctionsMatch", "FraudAlert"] }
  ],
  trends: [
    { month: "Oct", volume: 4500, value: 2300000 },
    { month: "Nov", volume: 4800, value: 2400000 },
    { month: "Dec", volume: 5000, value: 2500000 },
    { month: "Jan", volume: 5200, value: 2600000 },
    { month: "Feb", volume: 5300, value: 2650000 },
    { month: "Mar", volume: 5400, value: 2700000 }
  ],
  scenarios: [
    { scenario_id: "SCEN001", name: "High Volume Import", module: "Trade Finance", description: "Stress test liquidity for 5000+ unit imports." },
    { scenario_id: "SCEN002", name: "FX Rate Spike", module: "Payment", description: "Simulate sudden 15% volatility in target currency." },
    { scenario_id: "SCEN003", name: "Vendor Delay Ripple", module: "Workflows", description: "Model downstream impact of 10-day logistic lag." }
  ],
  simulations: [
    { id: "SIM101", scenario: "High Volume Import", status: "Completed", profit: 245000, risk: "Medium", date: "2026-03-05" },
    { id: "SIM102", scenario: "FX Rate Spike", status: "Completed", profit: -12000, risk: "High", date: "2026-03-04" }
  ],
  whatIfs: [
    { id: "WI1", market_drop: 10, impact: "Projected -12% Revenue Deviation", recommendation: "Diversify supplier base across secondary regions." },
    { id: "WI2", currency_appreciation: 5, impact: "Projected +$50K FX Hedging Gain", recommendation: "Execute short-term forward contracts." },
    { id: "WI3", logistic_bottleneck: 15, impact: "Projected 22% Margin Compression", recommendation: "Reroute through East Coast nodes." }
  ],
  recommendations: [
    { id: "REC101", title: "Diversify Sourcing Nodes", desc: "Current dependence on single-region semiconductors exceeds 45%. Redirect 15% to verified EU nodes.", priority: "High", module: "Marketplace" },
    { id: "REC102", title: "Optimize FX Hedging", desc: "Anticipated 3% volatility in INR/USD. Hedge 25% of Q3 liabilities now to capture current parity.", priority: "Medium", module: "Trade Finance" },
    { id: "REC103", title: "Sovereign Audit Prep", desc: "Detected 3 pending export licenses expiring in 30 days. Initiate renewal workflows immediately.", priority: "Low", module: "Compliance" }
  ]
};

export const marketplace = {
  vendors: [
    { id: "V1001", name: "Andean Resources Ltd", rating: 4.8, location: "Chile", score: 95, risk_level: "Low", fulfillment_time: "12 Days", sales_growth: "+15%", dispute_ratio: "0.2%", reliability: 98, compliance_score: 92, performance_score: 98, dependency_index: 0.12 },
    { id: "V1002", name: "GreenTech Minerals", rating: 4.5, location: "Australia", score: 92, risk_level: "Medium", fulfillment_time: "18 Days", sales_growth: "+8%", dispute_ratio: "1.5%", reliability: 94, compliance_score: 88, performance_score: 94, dependency_index: 0.45 },
    { id: "V1003", name: "Pacific Silicon Corp", rating: 4.9, location: "Taiwan", score: 98, risk_level: "Low", fulfillment_time: "5 Days", sales_growth: "+22%", dispute_ratio: "0.1%", reliability: 99, compliance_score: 96, performance_score: 99, dependency_index: 0.08 }
  ],
  products: [
    { id: 1, name: "Industrial Grade Copper", vendor: "Andean Resources Ltd", category: "Metals", priceUSD: 8450, location: "Chile" },
    { id: 2, name: "Lithium Carbonate 99.5%", vendor: "GreenTech Minerals", category: "Chemicals", priceUSD: 13200, location: "Australia" }
  ],
  external: {
    alibaba: [
      { id: "ALI101", name: "Industrial Servo Motor", vendor: "Shenzhen Precision", category: "Electronics", priceUSD: 450, stock: 120, rating: 4.5 },
      { id: "ALI102", name: "High-Speed Steel Rebars", vendor: "Shanghai Steel Co", category: "Metals", priceUSD: 1200, stock: 5000, rating: 4.2 }
    ],
    amazon: [
      { id: "AMZ201", name: "ThinkPad Enterprise X1", vendor: "Lenovo Authorized", category: "Technology", priceUSD: 1850, stock: 45, rating: 4.8 },
      { id: "AMZ202", name: "Enterprise Mesh Router", vendor: "Cisco Systems", category: "Technology", priceUSD: 890, stock: 200, rating: 4.9 }
    ]
  },
  recommendations: [
    { id: 1, product: "Industrial Grade Copper", recommendedVendor: "Andean Resources Ltd", rating: 4.8, score: 95, action: "Increase Sourcing" },
    { id: 2, product: "Semiconductor Circuits", recommendedVendor: "Pacific Silicon Corp", rating: 4.9, score: 98, action: "Diversify Node" }
  ],
  riskClusters: [
    { id: "CL1", name: "Metals Dependency", risk: "Medium", entities: ["V1001", "V1005"], nodes: 12 },
    { id: "CL2", name: "Logistics Bottleneck", risk: "High", entities: ["V1002", "V1008"], nodes: 45 }
  ]
};

export const workflows = {
  tasks: [
    { id: "TASK123", module: "Trade Finance", type: "LC Approval", status: "Pending", priority: "High", assigned_to: "DID1001", date: "2026-03-05" },
    { id: "TASK124", module: "Compliance", type: "Sanctions Check", status: "Pending", priority: "Medium", assigned_to: "DID1002", date: "2026-03-05" }
  ],
  rules: [
    { id: "WR001", module: "Trade Finance", condition: "LC amount > 1000000", action: "Manual Approval Required", active: true },
    { id: "WR002", module: "Payment", condition: "FX conversion > 100000", action: "Alert Admin Node", active: true }
  ]
};

export const adminData = {
  dashboard: {
    total_users: 1200,
    active_sessions: 875,
    pending_tasks: 340,
    high_risk_transactions: 15,
    recent_alerts: [
      { alert_id: "ALERT123456", type: "Fraud", message: "High-risk payment flagged" },
      { alert_id: "ALERT123457", type: "Workflow", message: "Overdue task in Trade Finance" }
    ]
  },
  users: [
    { user_id: "DID123456", name: "Alice Institutional", role: "Admin", status: "Active", email: "alice@baalvion.node" },
    { user_id: "DID123457", name: "Bob Supervisor", role: "Manager", status: "Active", email: "bob@baalvion.node" }
  ],
  settings: [
    { setting: "max_payment_limit", value: 1000000, description: "Maximum amount for a single institutional payment node." },
    { setting: "auto_approval_threshold", value: 50000, description: "LCs under this value are auto-verified by AI engine." }
  ]
};

export const auditData = [
  { name: "Trade Finance APIs", status: "✅ Verified", notes: "LCs, FX, and Settlement nodes verified." },
  { name: "Decentralized ID / KYC", status: "✅ Verified", notes: "Workflows, User identity, and DID mesh verified." },
  { name: "Hyper-Automated Compliance", status: "✅ Verified", notes: "Sovereign rules, Sanctions, and Violation Hub verified." },
  { name: "Enterprise Mesh Integration", status: "✅ Verified", notes: "SAP, Oracle, and Gov API connectors verified." },
  { name: "Workflow Automation", status: "✅ Verified", notes: "Task orchestration and Sovereign rules engine verified." },
  { name: "Payment & FX Optimization", status: "✅ Verified", notes: "Advanced routing, Parity optimization, and Settlement savings verified." },
  { name: "Government / Enterprise APIs", status: "✅ Verified", notes: "Customs clearance and Trade licenses verified." },
  { name: "Dashboard & Trade Analytics", status: "✅ Verified", notes: "Institutional KPIs and Forecasting charts verified." },
  { name: "AI Predictive Intelligence", status: "✅ Verified", notes: "Trade forecasting and Neural risk scoring verified." },
  { name: "Notifications & Alerts", status: "✅ Verified", notes: "Real-time stream and status tracking verified." },
  { name: "Marketplace & AI Scoring", status: "✅ Verified", notes: "Vendor scoring and AI recommendations verified." },
  { name: "External Marketplace Nodes", status: "✅ Verified", notes: "Alibaba, Amazon Business, and SAP Ariba APIs verified." },
  { name: "Security & Audit Logs", status: "✅ Verified", notes: "Access control, Permissions, and Fraud engine verified." },
  { name: "Partners & Onboarding", status: "✅ Verified", notes: "Directory and Institutional roadmap verified." },
  { name: "Mobile & PWA Mesh", status: "✅ Verified", notes: "Responsive layouts and simulated offline node verified." },
  { name: "Admin & Superuser Controls", status: "✅ Verified", notes: "User management, Global settings, and Admin KPIs verified." },
  { name: "AI Predictive Simulation", status: "✅ Verified", notes: "Scenario testing, profit simulations, and drift detection verified." },
  { name: "Security Edge-Case Validation", status: "✅ Verified", notes: "High-risk transactions, edge flags, and escalation mesh verified." },
  { name: "Real-time Trade Monitoring", status: "✅ Verified", notes: "Shipment flows, live status, and risk scoring nodes verified." },
  { name: "Neural Decision Engine", status: "✅ Verified", notes: "Market what-ifs, recommendations, and impact modeling verified." },
  { name: "Network Intelligence Mesh", status: "✅ Verified", notes: "Vendor risk clusters and partnership recommendations verified." },
  { name: "Web3 Blockchain Ledger", status: "✅ Verified", notes: "Immutable transaction mirroring and block verification finalized." },
  { name: "Scalability & Load Verification", status: "✅ Verified", notes: "Throughput metrics, regional latency, and stress resilience verified." },
  { name: "Hyper-FX & Web3 Finality", status: "✅ Verified", notes: "Cryptographic finality and extreme volatility hedging verified." },
  { name: "AI Fraud Detection Engine", status: "✅ Verified", notes: "Neural anomaly detection and pattern matching active." },
  { name: "Advanced Vendor Analytics", status: "✅ Verified", notes: "Detailed fulfillment and reliability metrics mesh verified." },
  { name: "Multi-Currency Risk Mesh", status: "✅ Verified", notes: "Predictive FX analytics and corridor routing active." }
];

export const globalMonitoring = {
  shipments: [
    { shipment_id: "SHP987654", origin: "Shanghai, CN", destination: "New York, US", status: "In Transit", eta: "2026-03-10", risk_score: 82, alerts: ["High weather risk", "Customs delay likely"], value: 1250000 },
    { shipment_id: "SHP987655", origin: "Rotterdam, NL", destination: "Dubai, AE", status: "In Transit", eta: "2026-03-08", risk_score: 15, alerts: [], value: 450000 },
    { shipment_id: "SHP987656", origin: "Mumbai, IN", destination: "Hamburg, DE", status: "Held", eta: "2026-03-15", risk_score: 94, alerts: ["Customs Hold", "Missing License"], value: 2100000 },
    { shipment_id: "SHP987657", origin: "Sao Paulo, BR", destination: "Shenzhen, CN", status: "In Transit", eta: "2026-03-12", risk_score: 42, alerts: ["Minor Delay"], value: 890000 }
  ],
  liveFeed: [
    { id: "FEED101", event: "Vessel Departure", location: "Shanghai", details: "Vessel 'Global Node 01' departed port.", timestamp: "2 Min Ago" },
    { id: "FEED102", event: "Customs Alert", location: "Mumbai", details: "Transaction TX9876 flagged for review.", timestamp: "5 Min Ago" },
    { id: "FEED103", event: "Route Optimization", location: "Global", details: "AI rerouted 5 shipments due to weather.", timestamp: "12 Min Ago" }
  ]
};

export const simulationData = {
  e2eResults: [
    { module: "Trade Monitoring", status: "Passed", latency: "12ms", throughput: "50k/s" },
    { module: "AI Forecasting", status: "Passed", accuracy: "94.2%", drift: "0.02%" },
    { module: "Compliance Mesh", status: "Passed", violations_detected: 12, remediated: 12 },
    { module: "FX Optimization", status: "Passed", savings_projected: "$2.8M", routes_active: 150 }
  ],
  stressTest: {
    users: "1.2M Concurrent",
    transactions: "$33T Volume",
    availability: "99.998%",
    status: "Stable"
  }
};

export const contactForm = {
  mockResponse: { success: true, message: "Thank you! Your institutional inquiry has been registered." }
};

export const requestAccess = {
  mockResponse: { success: true, message: "Request received! Check your institutional email for verification." }
};
