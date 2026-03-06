
import { NextResponse } from 'next/server';
import * as mockData from '@/mocks/baalvion-api';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  
  await new Promise((resolve) => setTimeout(resolve, 600));

  try {
    // Platform Core
    if (slug[0] === 'platform') {
      if (slug[1] === 'features') return NextResponse.json(mockData.platform.features);
      if (slug[1] === 'architecture') return NextResponse.json(mockData.platform.architecture);
    }

    // Global Trade Monitoring
    if (slug[0] === 'monitoring') {
      if (slug[1] === 'shipments') return NextResponse.json(mockData.globalMonitoring.shipments);
      if (slug[1] === 'live-feed') return NextResponse.json(mockData.globalMonitoring.liveFeed);
      if (slug[1] === 'performance') return NextResponse.json(mockData.scalabilityMetrics.performance);
      if (slug[1] === 'regional-latency') return NextResponse.json(mockData.scalabilityMetrics.regionalLatency);
    }

    // Enterprise Integration Mesh
    if (slug[0] === 'integration') {
      if (slug[1] === 'status') return NextResponse.json(mockData.infrastructure.integrations);
    }

    // AI Advanced Simulation & Decision Engine
    if (slug[0] === 'ai') {
      if (slug[1] === 'forecasts') return NextResponse.json(mockData.aiIntelligence.forecasts);
      if (slug[1] === 'recommendations') return NextResponse.json(mockData.aiIntelligence.recommendations);
      if (slug[1] === 'what-ifs') return NextResponse.json(mockData.aiIntelligence.whatIfs);
      if (slug[1] === 'risk-scores') return NextResponse.json(mockData.aiIntelligence.riskScores);
      if (slug[1] === 'scenario_list') return NextResponse.json(mockData.aiIntelligence.scenarios);
      if (slug[1] === 'advanced_simulation_status') return NextResponse.json({ simulation_id: "SIMADV123", status: "Completed", actual_outcome: { profit: 248500, risk_level: "Medium" } });
    }

    // Security & Fraud Edge Case Endpoints
    if (slug[0] === 'security') {
      if (slug[1] === 'access-list') return NextResponse.json(mockData.infrastructure.permissions);
      if (slug[1] === 'threat-heatmap') return NextResponse.json(mockData.infrastructure.threatHeatmap);
      if (slug[1] === 'blockchain-logs') return NextResponse.json(mockData.infrastructure.blockchainLogs);
      if (slug[1] === 'fraud-events') return NextResponse.json(mockData.infrastructure.fraudEvents);
      if (slug[1] === 'edge_fraud_status') return NextResponse.json({ transaction_id: "TXEDGE123", status: "Flagged", review_required: true });
    }

    // Compliance & Violations
    if (slug[0] === 'compliance') {
      if (slug[1] === 'violations') return NextResponse.json(mockData.compliance.violations);
      if (slug[1] === 'law-updates') return NextResponse.json(mockData.compliance.lawUpdates);
      if (slug[1] === 'rules') return NextResponse.json(mockData.compliance.rules);
    }

    // Marketplace & Network Intelligence
    if (slug[0] === 'marketplace') {
      if (slug[1] === 'risk-clusters') return NextResponse.json(mockData.marketplace.riskClusters);
      if (slug[1] === 'recommendations') return NextResponse.json(mockData.marketplace.recommendations);
      if (slug[1] === 'products') {
        const marketplace = searchParams.get('marketplace');
        if (marketplace === 'Amazon') return NextResponse.json(mockData.marketplace.external.amazon);
        if (marketplace === 'Alibaba') return NextResponse.json(mockData.marketplace.external.alibaba);
        return NextResponse.json(mockData.marketplace.products);
      }
      if (slug[1] === 'vendors') return NextResponse.json(mockData.marketplace.vendors);
      if (slug[1] === 'orders') return NextResponse.json([{ order_id: "ORD9999", marketplace: "SAP Ariba", vendor: "VEND12345", amount: 100000, status: "Pending" }]);
    }

    // Audit & Verification
    if (slug[0] === 'audit') {
      if (slug[1] === 'verify') return NextResponse.json(mockData.simulationData);
      if (slug[1] === 'logs') return NextResponse.json(mockData.infrastructure.auditLogs);
      return NextResponse.json(mockData.auditData);
    }

    // Analytics & Admin
    if (slug[0] === 'analytics') {
      if (slug[1] === 'kpis') return NextResponse.json(mockData.adminData.dashboard);
      if (slug[1] === 'trade-volume') return NextResponse.json(mockData.aiIntelligence.trends);
    }

    if (slug[0] === 'admin') {
      if (slug[1] === 'dashboard') return NextResponse.json(mockData.adminData.dashboard);
      if (slug[1] === 'user_list') return NextResponse.json(mockData.adminData.users);
      if (slug[1] === 'settings') return NextResponse.json(mockData.adminData.settings);
    }

    if (slug[0] === 'workflow') {
      if (slug[1] === 'tasks') return NextResponse.json(mockData.workflows.tasks);
      if (slug[1] === 'rules') return NextResponse.json(mockData.workflows.rules);
    }

    if (slug[0] === 'notifications') return NextResponse.json(mockData.notifications.alerts);
    if (slug[0] === 'trade-finance') return NextResponse.json(mockData.tradeFinance);

    return NextResponse.json({ error: "Institutional resource not found" }, { status: 404 });
  } catch (e) {
    console.error("API GET Error:", e);
    return NextResponse.json({ error: "Internal System Error" }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  let body: any = {};
  try {
    body = await request.json();
  } catch (e) {
    // Fail silently or handle empty body
    body = {};
  }
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    // Compliance Remediation
    if (slug[0] === 'compliance' && slug[1] === 'remediate') {
      return NextResponse.json({ success: true, message: `Remediation node initiated for ${body.violation_id || 'unknown'}. Escalated to Superuser.` });
    }

    // AI Scenario Runs
    if (slug[0] === 'ai') {
      if (slug[1] === 'run-what-if') {
        const scenarios = mockData.aiIntelligence.whatIfs;
        const scenario = scenarios.find(s => s.id === body.scenario_id) || scenarios[0];
        return NextResponse.json({ success: true, impact: scenario.impact, recommendation: scenario.recommendation, confidence: 0.94 });
      }
      if (slug[1] === 'advanced_simulation') {
        return NextResponse.json({ success: true, simulation_id: "SIMADV123", message: "Multi-module neural simulation initiated." });
      }
    }

    // Marketplace Sync
    if (slug[0] === 'marketplace') {
      if (slug[1] === 'sync') return NextResponse.json({ success: true, message: "Institutional node synchronized with local cache. Conflicts resolved." });
      if (slug[1] === 'order_create') return NextResponse.json({ success: true, order_id: "ORD" + Math.random().toString(36).substr(2, 5).toUpperCase(), status: "Pending" });
    }

    // Payment Routing & FX
    if (slug[0] === 'payment') {
      if (slug[1] === 'route-initiate') {
        return NextResponse.json({ 
          success: true, 
          payment_id: "PAY" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          selected_route: body.priority === 'High' ? 'Swift-Express-Node' : 'Standard-SEPA-Node'
        });
      }
      if (slug[1] === 'fx-convert') {
        const rate = 82.35;
        return NextResponse.json({
          success: true,
          converted_amount: (body.amount || 1) * rate,
          fx_rate_used: rate,
          optimization_goal: body.optimization_goal,
          to_currency: body.to_currency
        });
      }
      if (slug[1] === 'fx-hedge') return NextResponse.json({ success: true, message: "Hedge execution node verified." });
      if (slug[1] === 'fx-hyper-simulation') return NextResponse.json({ success: true, impact: body.scenario_id === 'VOL01' ? '-18.5% Net P&L' : '-5.2% Margin Drift', hedging_efficacy: "94.2%", recommendation: "Execute Auto-Hedge Protocol" });
    }

    // Security Verification
    if (slug[0] === 'security') {
      if (slug[1] === 'blockchain-verify') return NextResponse.json({ success: true, verification_id: "VER_" + Math.random().toString(36).substr(2, 5).toUpperCase(), status: "Verified", consensus_score: 0.998, timestamp: new Date().toISOString() });
      if (slug[1] === 'edge_fraud_check') return NextResponse.json({ success: true, transaction_id: "TXEDGE123", risk_score: 0.95, flags: ["SuspiciousHighAmount"] });
    }

    // Scalability Stress Tests
    if (slug[0] === 'monitoring' && slug[1] === 'run-stress-test') {
      return NextResponse.json({ 
        success: true, 
        test_id: "STRESS_" + Math.random().toString(36).substr(2, 5).toUpperCase(),
        message: `Scalability stress test '${body.scenario_name}' initiated. Global load increasing...`,
        impact_score: 0.85
      });
    }

    return NextResponse.json({ error: "Institutional resource not found" }, { status: 404 });
  } catch (e) {
    console.error("API POST Error:", e);
    return NextResponse.json({ error: "Internal System Error" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  try {
    const body = await request.json();
    return NextResponse.json({ 
      success: true, 
      message: `Operational state updated successfully for ${slug.join('/')} across institutional mesh.`,
      update_node: body.status || 'Verified'
    });
  } catch (e) {
    return NextResponse.json({ success: true, message: "Operational state updated successfully across institutional mesh." });
  }
}
