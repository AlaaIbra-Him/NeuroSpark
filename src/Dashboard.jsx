import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AlertCircle, AlertTriangle, Zap, Droplets, Activity, TrendingUp, ChevronLeft, Radio, Battery, Wind } from 'lucide-react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

export default function SolarDashboard() {
    const [selectedRobot, setSelectedRobot] = useState(null);
    const [animateMetrics, setAnimateMetrics] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setAnimateMetrics(true);
    }, []);

    // Chart data
    const efficiencyData = [
        { time: '12 AM', efficiency: 92 },
        { time: '4 AM', efficiency: 89 },
        { time: '8 AM', efficiency: 94 },
        { time: '12 PM', efficiency: 97 },
        { time: '4 PM', efficiency: 98.2 },
        { time: '8 PM', efficiency: 96 },
        { time: '12 AM', efficiency: 94 }
    ];

    const waterData = [
        { cycle: 'Cycle 1', water: 12, time: '8:30 AM' },
        { cycle: 'Cycle 2', water: 14, time: '12:45 PM' },
        { cycle: 'Cycle 3', water: 11, time: '4:20 PM' },
        { cycle: 'Cycle 4', water: 13, time: '7:15 PM' }
    ];

    const coverageData = [
        { name: 'Cleaned', value: 94.2 },
        { name: 'Pending', value: 5.8 }
    ];

    const alerts = [
        { id: 1, type: 'warning', message: 'High dust accumulation detected - Section B3', time: '2 mins ago', severity: 'medium' },
        { id: 2, type: 'info', message: 'Robot unit #7 battery at 15% - Returning to dock', time: '5 mins ago', severity: 'low' },
        { id: 3, type: 'critical', message: 'Communication loss: Unit #12 (last seen 8 mins ago)', time: '8 mins ago', severity: 'high' },
        { id: 4, type: 'info', message: 'Predictive maintenance: Unit #3 bearing wear detected', time: '12 mins ago', severity: 'medium' }
    ];
    

    const robotFleet = [
        { id: 1, status: 'active', battery: 87, location: 'Grid A1', cycles: 6 },
        { id: 2, status: 'active', battery: 92, location: 'Grid B2', cycles: 5 },
        { id: 3, status: 'charging', battery: 45, location: 'Dock 1', cycles: 7 },
        { id: 4, status: 'idle', battery: 100, location: 'Dock 2', cycles: 4 },
        { id: 5, status: 'active', battery: 73, location: 'Grid C3', cycles: 8 },
        // { id: 6, status: 'active', battery: 94, location: 'Grid D1', cycles: 6 },
        // { id: 7, status: 'idle', battery: 88, location: 'Dock 1', cycles: 5 },
        // { id: 8, status: 'active', battery: 81, location: 'Grid B3', cycles: 6 }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
            case 'charging': return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
            case 'idle': return 'bg-slate-500/20 border-slate-500/50 text-slate-300';
            default: return 'bg-slate-500/20 text-slate-300';
        }
    };

    const getAlertColor = (severity) => {
        switch (severity) {
            case 'high': return 'bg-red-500/10 border-red-500/30 text-red-300';
            case 'medium': return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300';
            case 'low': return 'bg-blue-500/10 border-blue-500/30 text-blue-300';
            default: return 'bg-slate-500/10 text-slate-300';
        }
    };

    // Animated counter component
    const AnimatedCounter = ({ value, suffix = '', duration = 1500 }) => {
        const [displayValue, setDisplayValue] = useState(0);

        useEffect(() => {
            if (!animateMetrics) return;

            let start = 0;
            const increment = value / (duration / 16);
            const interval = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setDisplayValue(value);
                    clearInterval(interval);
                } else {
                    setDisplayValue(Math.floor(start * 10) / 10);
                }
            }, 16);

            return () => clearInterval(interval);
        }, [animateMetrics, value, duration]);

        return <span>{displayValue}{suffix}</span>;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 font-sans">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-40 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => navigate('/')}
                            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors group"
                            title="Back to home"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-slate-200" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-blue-300" />
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold tracking-tight">NeuroSpark</h1>
                                <p className="text-xs text-slate-500">Real-time fleet management & analytics</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center gap-8">
                        {/* Fleet Summary */}
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Fleet Status</p>
                                <p className="text-sm font-semibold">
                                    <span className="text-emerald-400">5 Active</span>
                                    <span className="text-slate-600"> / </span>
                                    <span className="text-blue-300">1 Charging</span>
                                    <span className="text-slate-600"> / </span>
                                    <span className="text-slate-400">2 Idle</span>
                                </p>
                            </div>
                            <div className="w-px h-8 bg-slate-700/50" />
                        </div>

                        {/* Notifications */}
                        <div className="relative">
                            <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors relative">
                                <AlertCircle className="w-5 h-5 text-slate-400" />
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                            </button>
                        </div>

                        {/* Time & Status */}
                        <div className="text-right">
                            <p className="text-xs text-slate-500">System Status</p>
                            <p className="text-sm font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                All Systems Optimal
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-8 space-y-8">
                {/* KPI Cards Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Panel Efficiency */}
                    <div className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Panel Efficiency</p>
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-emerald-400">
                                <AnimatedCounter value={98.2} suffix="%" />
                            </p>
                            <p className="text-xs text-emerald-400/60">
                                ↑ <AnimatedCounter value={12.8} suffix="% " /> vs. baseline
                            </p>
                            <div className="pt-3 border-t border-slate-700/30">
                                <p className="text-xs text-slate-500">Before: 85.4% | Now: 98.2%</p>
                            </div>
                        </div>
                    </div>

                    {/* Energy Output */}
                    <div className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Energy Output Today</p>
                            <Zap className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-blue-400">
                                <AnimatedCounter value={1847} suffix=" " />
                                <span className="text-xl">kWh</span>
                            </p>
                            <p className="text-xs text-blue-400/60">
                                ↑ <AnimatedCounter value={342} suffix=" kWh " /> daily gain
                            </p>
                            <div className="pt-3 border-t border-slate-700/30">
                                <p className="text-xs text-slate-500">Peak: 4:15 PM | Avg: 73.9 kW</p>
                            </div>
                        </div>
                    </div>

                    {/* Water Saved */}
                    <div className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Water Saved</p>
                            <Droplets className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-cyan-400">
                                <AnimatedCounter value={68.4} suffix="%" />
                            </p>
                            <p className="text-xs text-cyan-400/60">
                                <AnimatedCounter value={520} suffix=" L " /> vs. traditional cleaning
                            </p>
                            <div className="pt-3 border-t border-slate-700/30">
                                <p className="text-xs text-slate-500">Today: 52L saved | Week: 364L</p>
                            </div>
                        </div>
                    </div>

                    {/* Cleaning Cycles */}
                    <div className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Cleaning Cycles</p>
                            <Activity className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold text-purple-400">
                                <AnimatedCounter value={4} suffix=" " />
                            </p>
                            <p className="text-xs text-purple-400/60">
                                <AnimatedCounter value={23} suffix=" " /> per week
                            </p>
                            <div className="pt-3 border-t border-slate-700/30">
                                <p className="text-xs text-slate-500">Last cycle: 2h 34m ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KPI Cards Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Coverage */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Coverage %</p>
                            <Wind className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="flex items-end gap-6">
                            <div>
                                <p className="text-4xl font-bold text-emerald-400 mb-2">
                                    <AnimatedCounter value={94.2} suffix="%" />
                                </p>
                                <p className="text-xs text-slate-500">Of total solar farm</p>
                            </div>
                            <div className="flex-1 h-20">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={coverageData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={25}
                                            outerRadius={40}
                                            dataKey="value"
                                            startAngle={90}
                                            endAngle={450}
                                        >
                                            <Cell fill="#10b981" />
                                            <Cell fill="#374151" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Fleet Health */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Fleet Health</p>
                            <Battery className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-sm text-slate-300">Average Battery</p>
                                    <p className="text-2xl font-bold text-blue-400">
                                        <AnimatedCounter value={83.6} suffix="%" />
                                    </p>
                                </div>
                                <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400" style={{ width: '83.6%' }} />
                                </div>
                            </div>
                            <div className="pt-2 border-t border-slate-700/30 grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-slate-500">Online Units</p>
                                    <p className="text-sm font-semibold text-emerald-400">6</p>
                                </div>
                                <div>
                                    <p className="text-slate-500">Issues Detected</p>
                                    <p className="text-sm font-semibold text-yellow-400">1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Schedule */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Next Maintenance</p>
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-slate-300 mb-1">Scheduled Service</p>
                                <p className="text-xl font-semibold text-slate-100">Unit #3 Bearing</p>
                            </div>
                            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                                <p className="text-xs text-yellow-200">
                                    Predictive: Bearing wear detected. Recommend service in 3-5 days.
                                </p>
                            </div>
                            <p className="text-xs text-slate-500 pt-2 border-t border-slate-700/30">
                                Estimated downtime: 4 hours
                            </p>
                        </div>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Efficiency Trend */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-2">
                                Panel Efficiency Trend
                            </h2>
                            <p className="text-xs text-slate-500">Last 24 hours</p>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={efficiencyData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="time" stroke="#6b7280" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} domain={[85, 100]} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                                    cursor={{ stroke: '#60a5fa', strokeWidth: 1 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="efficiency"
                                    stroke="#10b981"
                                    strokeWidth={2.5}
                                    dot={{ fill: '#10b981', r: 4 }}
                                    activeDot={{ r: 6 }}
                                    fillOpacity={1}
                                    fill="url(#colorEff)"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Water Saved per Cycle */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-2">
                                Water Usage per Cycle
                            </h2>
                            <p className="text-xs text-slate-500">Today's cleaning cycles</p>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={waterData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="cycle" stroke="#6b7280" tick={{ fontSize: 12 }} />
                                <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} label={{ value: 'Liters', angle: -90, position: 'insideLeft' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                                    cursor={{ fill: '#06b6d4', fillOpacity: 0.1 }}
                                />
                                <Bar dataKey="water" fill="url(#colorWater)" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* System Architecture Diagram */}
                <div className="p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-8">
                        System Architecture
                    </h2>

                    <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
                        {/* Component 1: Solar Panels */}
                        <div className="flex flex-col items-center gap-3 min-w-max">
                            <div className="w-24 h-24 rounded-xl bg-yellow-500/20 border-2 border-yellow-500/50 flex items-center justify-center">
                                <div className="text-center">
                                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-yellow-300">Solar</p>
                                    <p className="text-xs text-yellow-400">Panels</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 1 */}
                        <div className="flex-shrink-0 text-slate-600 text-2xl"></div>

                        {/* Component 2: Robot Fleet */}
                        <div className="flex flex-col items-center gap-3 min-w-max">
                            <div className="w-24 h-24 rounded-xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                                <div className="text-center">
                                    <Activity className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-emerald-300">Robot</p>
                                    <p className="text-xs text-emerald-400">Fleet</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex-shrink-0 text-slate-600 text-2xl">→</div>

                        {/* Component 3: AI Detection */}
                        <div className="flex flex-col items-center gap-3 min-w-max">
                            <div className="w-24 h-24 rounded-xl bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                                <div className="text-center">
                                    <Radio className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-blue-300">AI</p>
                                    <p className="text-xs text-blue-400">Detection</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 3 */}
                        <div className="flex-shrink-0 text-slate-600 text-2xl">→</div>

                        {/* Component 4: Cloud Platform */}
                        <div className="flex flex-col items-center gap-3 min-w-max">
                            <div className="w-24 h-24 rounded-xl bg-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center">
                                <div className="text-center">
                                    <Wind className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-purple-300">Cloud</p>
                                    <p className="text-xs text-purple-400">Platform</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow 4 */}
                        <div className="flex-shrink-0 text-slate-600 text-2xl">→</div>

                        {/* Component 5: Analytics Dashboard */}
                        <div className="flex flex-col items-center gap-3 min-w-max">
                            <div className="w-24 h-24 rounded-xl bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                                <div className="text-center">
                                    <TrendingUp className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-cyan-300">Analytics</p>
                                    <p className="text-xs text-cyan-400">Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg">
                        <p className="text-xs text-slate-400 leading-relaxed">
                            <span className="font-semibold text-slate-300">End-to-end flow:</span> Solar panels are monitored by autonomous robots. AI-driven detection identifies dust patterns and contamination. Real-time data flows to cloud infrastructure. Analytics dashboard provides operators with actionable intelligence for maximum efficiency.
                        </p>
                    </div>
                </div>

                {/* Alerts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Active Alerts */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Active Alerts</h2>
                            <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-xs font-semibold text-red-300">
                                {alerts.length}
                            </span>
                        </div>

                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {alerts.map((alert) => (
                                <div
                                    key={alert.id}
                                    className={`p-4 rounded-lg border ${getAlertColor(alert.severity)}`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-0.5">
                                            {alert.severity === 'high' && <AlertCircle className="w-4 h-4" />}
                                            {alert.severity === 'medium' && <AlertTriangle className="w-4 h-4" />}
                                            {alert.severity === 'low' && <Radio className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{alert.message}</p>
                                            <p className="text-xs opacity-70 mt-1">{alert.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Robot Fleet Status */}
                    <div className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Fleet Units</h2>
                            <span className="px-3 py-1 bg-slate-500/20 border border-slate-500/50 rounded-full text-xs font-semibold text-slate-300">
                                {robotFleet.length} Units
                            </span>
                        </div>

                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {robotFleet.map((robot) => (
                                <div
                                    key={robot.id}
                                    onClick={() => setSelectedRobot(selectedRobot === robot.id ? null : robot.id)}
                                    className={`p-4 rounded-lg border cursor-pointer transition-all ${getStatusColor(robot.status)}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-2 h-2 rounded-full bg-current" />
                                            <div>
                                                <p className="text-sm font-semibold">Unit #{robot.id}</p>
                                                <p className="text-xs opacity-70">{robot.location}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-semibold">{robot.battery}%</p>
                                            <p className="text-xs opacity-70">{robot.cycles} cycles</p>
                                        </div>
                                    </div>
                                    {selectedRobot === robot.id && (
                                        <div className="mt-3 pt-3 border-t border-current/30 text-xs">
                                            <p>Status: <span className="font-semibold capitalize">{robot.status}</span></p>
                                            <p>Battery: {robot.battery}% | Cycles today: {robot.cycles}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Summary Footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">Efficiency Gain</p>
                        <p className="text-3xl font-bold text-emerald-300 mb-2">+12.8%</p>
                        <p className="text-xs text-emerald-300/70">Compared to baseline cleaning methods</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">Water Savings</p>
                        <p className="text-3xl font-bold text-cyan-300 mb-2">68.4%</p>
                        <p className="text-xs text-cyan-300/70">Annual water reduction vs. traditional methods</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">ROI Impact</p>
                        <p className="text-3xl font-bold text-blue-300 mb-2">$342K</p>
                        <p className="text-xs text-blue-300/70">Estimated annual energy value generation</p>
                    </div>
                </div>
            </main>
        </div>
    );
}