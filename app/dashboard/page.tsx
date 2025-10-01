"use client";

import React, { useState } from "react";
import { DASHBOARD_DATA } from "../../src/data/dashboard-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import FollowerChart from "./FollowerChart";

const formatNumber = (num: number, isEngagement: boolean = false): string => {
  if (isEngagement) {
    return `${num.toFixed(1)}%`;
  }
  return new Intl.NumberFormat("tr-TR", { notation: "compact", maximumFractionDigits: 1 }).format(num);
};

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
}

const KpiCard = ({ title, value, description }: KpiCardProps) => (
  <Card className="border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-purple-700">{value}</div>
      <p className="text-xs text-gray-500 pt-1">{description}</p>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  const { projectName, kpis } = DASHBOARD_DATA;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header projectName={projectName} onMenuClick={toggleMenu} />
      <div className="flex pt-16">
        <Sidebar isVisible={isMenuOpen} onLinkClick={closeMenu} />
        {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={closeMenu} />}
        <main className="flex-1 pt-0 md:ml-64 p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 border-b pb-2">Yönetim Paneli</h1>
            <p className="text-gray-600 mt-1">İşinizin en önemli metriklerine bir bakış.</p>
          </header>

          <section className="grid gap-6 md:grid-cols-3 mb-10">
            <KpiCard
              title="Toplam Influencer"
              value={formatNumber(kpis.totalInfluencers)}
              description="Ajansa kayıtlı toplam influencer sayısı"
            />
            <KpiCard
              title="Toplam Takipçi Erişimi"
              value={formatNumber(kpis.totalFollowers)}
              description="Portföydeki tüm influencer'ların toplam takipçisi"
            />
            <KpiCard
              title="Ortalama Etkileşim (Engagement)"
              value={formatNumber(kpis.averageEngagement, true)}
              description="Portföyün genel etkileşim oranı"
            />
          </section>

          <section className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Takipçi Büyüme Grafiği</CardTitle>
              </CardHeader>
              <CardContent>
                <FollowerChart />
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
