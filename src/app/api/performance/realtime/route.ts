import { NextRequest, NextResponse } from 'next/server';
import PerformanceMonitor from '@/lib/performance-monitor';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const headers = new Headers({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Cache-Control'
  });

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const monitor = PerformanceMonitor.getInstance();

      const sendPerformanceUpdate = async () => {
        try {
          const adminPerformance = monitor.getSystemMetrics();
          const appMetrics = await monitor.getApplicationMetrics();

          const performanceData = {
            timestamp: new Date().toISOString(),
            serverId: 'microsite-172.31.34.170',
            adminServer: {
              cpu: adminPerformance.cpu.usage,
              memory: adminPerformance.memory.usagePercentage,
              uptime: adminPerformance.process.uptime,
              avgResponseTime: appMetrics.requestMetrics.avgResponseTime,
              errorRate: appMetrics.requestMetrics.errorRate,
              totalRequests: appMetrics.requestMetrics.totalRequests,
              activeRequests: 0
            },
            alerts: []
          };

          const data = `data: ${JSON.stringify(performanceData)}\n\n`;
          controller.enqueue(encoder.encode(data));
        } catch (error) {
          console.error('Error sending performance update:', error);
        }
      };

      sendPerformanceUpdate();
      const interval = setInterval(sendPerformanceUpdate, 5000);

      const heartbeat = setInterval(() => {
        try {
          const heartbeatData = `: heartbeat ${Date.now()}\n\n`;
          controller.enqueue(encoder.encode(heartbeatData));
        } catch (error) {
          clearInterval(interval);
          clearInterval(heartbeat);
          controller.close();
        }
      }, 30000);

      request.signal.addEventListener('abort', () => {
        clearInterval(interval);
        clearInterval(heartbeat);
      });
    }
  });

  return new NextResponse(stream, { headers });
}