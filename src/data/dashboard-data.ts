export interface KpiMetrics {
  totalInfluencers: number;
  totalFollowers: number;
  averageEngagement: number;
}

export interface FollowerDataPoint {
  week: string; 
  followers: number; 
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface DashboardData {
  kpis: KpiMetrics;
  followerChartData: FollowerDataPoint[];
  login: LoginCredentials;
  projectName: string;
}

export const DASHBOARD_DATA: DashboardData = {
  projectName: "Infofluencer",

  login: {
    email: "test@test.com",
    password: "1234",
  },

  kpis: {
    totalInfluencers: 3,
    totalFollowers: 102400, 
    averageEngagement: 4.7, 
  },

  followerChartData: [
    { "week": "1. Hafta", "followers": 200 },
    { "week": "2. Hafta", "followers": 450 },
    { "week": "3. Hafta", "followers": 300 },
    { "week": "4. Hafta", "followers": 600 }
  ],
};