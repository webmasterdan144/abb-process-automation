// Simple implementation for now to get the build working
// This will be a mock until the real package is properly installed

interface SystemMetrics {
  cpu: { usage: number };
  memory: { usagePercentage: number };
  process: { uptime: number };
}

interface ApplicationMetrics {
  requestMetrics: {
    avgResponseTime: number;
    errorRate: number;
    totalRequests: number;
  };
}

interface MockPerformanceMonitor {
  getSystemMetrics: () => SystemMetrics;
  getApplicationMetrics: () => Promise<ApplicationMetrics>;
  startMonitoring: () => void;
}

class MockPerformanceMonitorClass implements MockPerformanceMonitor {
  getSystemMetrics() {
    return {
      cpu: { usage: Math.random() * 100 },
      memory: { usagePercentage: Math.random() * 100 },
      process: { uptime: Date.now() - 1000 * 60 * 60 }
    };
  }

  async getApplicationMetrics() {
    return {
      requestMetrics: {
        avgResponseTime: Math.random() * 100,
        errorRate: Math.random() * 5,
        totalRequests: Math.floor(Math.random() * 1000),
      }
    };
  }

  startMonitoring() {
    // Mock implementation
  }
}

let instance: MockPerformanceMonitor | null = null;

const getInstance = () => {
  if (!instance) {
    instance = new MockPerformanceMonitorClass();
    instance.startMonitoring();
  }
  return instance;
};

const PerformanceMonitor = {
  getInstance
};

export default PerformanceMonitor;