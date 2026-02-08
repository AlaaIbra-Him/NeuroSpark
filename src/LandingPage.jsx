import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Activity, Zap, Droplets, TrendingUp } from 'lucide-react';

export default function SolarRoboticsLanding() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [metrics, setMetrics] = useState({
        efficiency: 0,
        waterSaved: 0,
        uptime: 0,
        fleetHealth: 0
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate metrics on scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const start = Date.now();

                    const animate = () => {
                        const now = Date.now();
                        const progress = Math.min((now - start) / duration, 1);

                        setMetrics({
                            efficiency: Math.floor(progress * 34),
                            waterSaved: Math.floor(progress * 89),
                            uptime: Math.floor(progress * 99.8 * 10) / 10,
                            fleetHealth: Math.floor(progress * 98)
                        });

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    animate();
                }
            });
        });

        const dashboardElement = document.getElementById('dashboard-metrics');
        if (dashboardElement) {
            observer.observe(dashboardElement);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-slate-950 text-slate-50 overflow-hidden">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-tight">
                        {/* <span className="text-blue-300">◆</span> SOLAR.AUTONOMY */}
                        <span className="text-blue-300">◆</span> NeuroSpark
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="#technology" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                            Technology
                        </a>
                        <a href="#dashboard" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                            Operations
                        </a>
                        <a href="#scale" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                            Scale
                        </a>
                        <button className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-sm transition-colors">
                            Request Demo
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />

                {/* Subtle accent light */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    {/* Subtext */}
                    <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-slate-700/50 rounded-full bg-slate-900/50 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs uppercase tracking-widest text-slate-400">
                            Engineered for utility-scale operations
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-7xl lg:text-8xl font-semibold tracking-tight leading-tight mb-8 text-slate-50">
                        Infrastructure
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                            for the Next Generation
                        </span>
                        <br />
                        of Solar Performance
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Autonomous cleaning systems that maximize solar output through predictive maintenance intelligence. Built for operators who demand operational excellence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-sm transition-all duration-300 flex items-center gap-2">
                            Request Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-medium rounded-sm transition-colors">
                            View Technology
                        </button>
                    </div>

                    {/* Trust Signal */}
                    <div className="text-xs uppercase tracking-widest text-slate-500 space-y-2">
                        <div>Designed for large-scale solar operators</div>
                        <div className="text-slate-700">●</div>
                        <div>Built with industry engineering standards</div>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="relative w-full h-140 mt-20 px-6 lg:px-8">
                    <div className="w-full h-full bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-lg overflow-hidden relative group">

                        {/* <div className="w-full h-full flex items-center justify-center bg-slate-800/30 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-slate-700/50 flex items-center justify-center overflow-hidden">
                                    <video
                                        className="w-full h-full object-cover"
                                        src="./videos/model1.mp4"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </div>
                                <p className="text-xs text-slate-600 mt-2">
                                    Robot in solar farm environment
                                </p>
                            </div>
                        </div> */}
                        <div className="w-full h-200 flex flex-col items-center justify-center bg-slate-800/30 backdrop-blur-sm">

                            <div className="w-full flex-1 rounded-lg overflow-hidden">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/videos/model1.mp4"
                                    autoPlay
                                    loop
                                    muted
                                />
                            </div>

                            {/* <p className="mt-4 text-xs text-slate-100 text-center">
                                Robot in solar farm environment
                            </p> */}
                        </div>



                        {/* Subtle motion suggestion overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 animate-bounce">
                    <ChevronRight className="w-6 h-6 text-slate-600 rotate-90" />
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="py-16 border-y border-slate-800/50 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <p className="text-sm uppercase tracking-widest text-slate-400 mb-2">Ecosystem</p>
                            <p className="text-lg font-medium text-slate-200">
                                Designed for large-scale solar operators
                            </p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-slate-700/30" />
                        <div className="flex-1">
                            <p className="text-sm uppercase tracking-widest text-slate-400 mb-2">Engineering</p>
                            <p className="text-lg font-medium text-slate-200">
                                Built with industry standards at scale
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Framing Section */}
            <section className="py-32 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Infrastructure Challenges</p>
                        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                            The economics of scale demand better solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Challenge Cards */}
                        {[
                            {
                                title: "Energy Loss at Scale",
                                description: "Dust and debris reduce solar output by 15-25% annually. At utility scale, this translates to millions in lost revenue.",
                                metric: "$2.8M"
                            },
                            {
                                title: "Operational Expenditure",
                                description: "Manual cleaning operations require significant labor costs, scheduling complexity, and weather dependency.",
                                metric: "35%"
                            },
                            {
                                title: "Water Dependency",
                                description: "Traditional cleaning methods consume 5-10 gallons per panel annually. Problematic in water-scarce regions.",
                                metric: "8.5M gal/year"
                            },
                            {
                                title: "Labor Inefficiency",
                                description: "Human crews cannot maintain consistent schedules or predictive maintenance cycles across distributed assets.",
                                metric: "4x slower"
                            }
                        ].map((challenge, idx) => (
                            <div key={idx} className="group p-8 border border-slate-700/30 hover:border-slate-600/50 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300">
                                <div className="mb-4 text-3xl font-semibold text-emerald-400">
                                    {challenge.metric}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-50 mb-3">
                                    {challenge.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section id="technology" className="py-32 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Technology Platform</p>
                        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                            Autonomous Maintenance Infrastructure
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left: Features */}
                        <div className="space-y-12">
                            {[
                                {
                                    title: "AI-Driven Navigation",
                                    description: "Adaptive pathfinding across complex solar arrays. Real-time obstacle detection and dynamic routing.",
                                    icon: "→"
                                },
                                {
                                    title: "Smart Sensing",
                                    description: "Multi-spectral analysis identifies contamination patterns. Predictive algorithms optimize cleaning cycles.",
                                    icon: "◉"
                                },
                                {
                                    title: "Modular Robotics",
                                    description: "Scalable from small rooftops to utility-scale farms. Each unit operates independently or as a coordinated fleet.",
                                    icon: "⬡"
                                },
                                {
                                    title: "Predictive Cleaning",
                                    description: "Machine learning predicts optimal cleaning times. Reduces water usage by 80% vs. traditional methods.",
                                    icon: "✱"
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="group cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 text-lg font-semibold">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-blue-300 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: Diagram Placeholder */}
                        <div className="flex items-center justify-center">
                            <div className="w-full aspect-square bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-lg overflow-hidden relative">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/videos/model2.mp4"
                                    autoPlay
                                    loop
                                    muted
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Product Visualization Section */}
            <section className="py-32 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Product</p>
                        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                            Engineered for precision at scale
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
                        {/* Main product render - takes up 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="w-full h-96 lg:h-full min-h-96 bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-lg overflow-hidden relative flex items-center justify-center flex-col gap-4">
                                <img
                                    src="/videos/img1.jpeg"
                                    alt="Robot"
                                    className="w-3/4 h-3/4 object-cover rounded-lg"
                                />



                                {/* <div className="w-20 h-20 rounded-lg bg-slate-700/30 flex items-center justify-center">
                                    <Activity className="w-10 h-10 text-emerald-400" />
                                </div> */}

                            </div>
                        </div>

                        {/* Specifications sidebar */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Dimensions</p>
                                <p className="text-lg font-semibold text-slate-50">1.2m × 0.8m</p>
                                <p className="text-sm text-slate-400">Compact form factor</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Weight</p>
                                <p className="text-lg font-semibold text-slate-50">24kg</p>
                                <p className="text-sm text-slate-400">Optimized for load</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Coverage</p>
                                <p className="text-lg font-semibold text-slate-50">8-12 panels/hour</p>
                                <p className="text-sm text-slate-400">Adaptive speed</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Autonomy</p>
                                <p className="text-lg font-semibold text-slate-50">12 hours</p>
                                <p className="text-sm text-slate-400">Per charge cycle</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Water</p>
                                <p className="text-lg font-semibold text-slate-50">0.3L/panel</p>
                                <p className="text-sm text-slate-400">Industry-leading efficiency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligence Dashboard Section */}
            <section id="dashboard" className="py-32 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Operations Control</p>
                        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                            Infrastructure intelligence at your command
                        </h2>
                    </div>

                    {/* Dashboard Visualization */}
                    <div className="mb-16 p-8 bg-slate-900/50 border border-slate-700/30 rounded-lg overflow-hidden">
                        {/* Mock Dashboard Header */}
                        <div className="mb-12 pb-8 border-b border-slate-700/30">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-semibold text-slate-50">Fleet Operations</h3>
                                <div className="flex items-center gap-2 text-sm text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    All systems optimal
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {/* Metric Cards */}
                                {[
                                    {
                                        label: "Efficiency Delta",
                                        value: metrics.efficiency,
                                        unit: "%",
                                        icon: <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    },
                                    {
                                        label: "Water Reduction",
                                        value: metrics.waterSaved,
                                        unit: "%",
                                        icon: <Droplets className="w-4 h-4 text-blue-300" />
                                    },
                                    {
                                        label: "Uptime",
                                        value: metrics.uptime,
                                        unit: "%",
                                        icon: <Activity className="w-4 h-4 text-emerald-400" />
                                    },
                                    {
                                        label: "Fleet Health",
                                        value: metrics.fleetHealth,
                                        unit: "%",
                                        icon: <Zap className="w-4 h-4 text-blue-300" />
                                    }
                                ].map((metric, idx) => (
                                    <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700/30 rounded-lg">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-xs uppercase tracking-widest text-slate-400">
                                                {metric.label}
                                            </p>
                                            {metric.icon}
                                        </div>
                                        <p className="text-3xl font-semibold text-slate-50">
                                            {metric.value}<span className="text-xl text-slate-400">{metric.unit}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mock chart area */}
                        <div id="dashboard-metrics" className="h-64 bg-gradient-to-br from-slate-800/20 to-slate-900/20 border border-slate-700/20 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-slate-700/50 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-slate-400" />
                                </div>
                                <p className="text-sm text-slate-400">Real-time analytics dashboard</p>
                                <p className="text-xs text-slate-600 mt-1">[Fleet status, efficiency trends, maintenance forecasts]</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real-Time Fleet Monitoring",
                                description: "Live status of every unit. Geolocation tracking, battery health, and operational metrics."
                            },
                            {
                                title: "Predictive Maintenance",
                                description: "Algorithm forecasts maintenance needs before failures occur. Minimize downtime."
                            },
                            {
                                title: "Performance Analytics",
                                description: "Efficiency tracking, water savings quantification, and ROI dashboards for stakeholders."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-6 border border-slate-700/30 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scalability Section */}
            <section id="scale" className="py-32 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Architecture</p>
                        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                            Built for utility-scale deployment
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left: Scale messaging */}
                        <div className="space-y-12">
                            {[
                                {
                                    title: "Fleet-Ready Architecture",
                                    description: "Deploy from 10 to 10,000 units. Each robot coordinates autonomously while reporting to central command."
                                },
                                {
                                    title: "Designed for Thousands of Panels",
                                    description: "Capable of managing 50MW+ solar farms. Distributed intelligence scales linearly without performance degradation."
                                },
                                {
                                    title: "Distributed Intelligence",
                                    description: "Edge computing on each unit. Central optimization layer. Communicates via secure, encrypted mesh network."
                                },
                                {
                                    title: "Zero Downtime Upgrades",
                                    description: "Over-the-air updates. Entire fleet can upgrade autonomously without interrupting operations."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="group">
                                    <h3 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-blue-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right: Visual scale representation */}
                        <div className="space-y-8">
                            <div className="p-8 bg-slate-900/50 border border-slate-700/30 rounded-lg">
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Deployment Scale</p>
                                <div className="space-y-6">
                                    {[
                                        { label: "Small Farm (5MW)", units: "5 robots", fill: 10 },
                                        { label: "Medium Farm (20MW)", units: "25 robots", fill: 40 },
                                        { label: "Large Utility (100MW+)", units: "500+ robots", fill: 100 }
                                    ].map((scale, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-sm font-medium text-slate-200">{scale.label}</p>
                                                <p className="text-xs text-slate-400">{scale.units}</p>
                                            </div>
                                            <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
                                                    style={{ width: `${scale.fill}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-slate-900/50 border border-slate-700/30 rounded-lg">
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Economics at Scale</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Cost per panel per year</p>
                                        <p className="text-2xl font-semibold text-emerald-400">$0.14</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Annual output increase</p>
                                        <p className="text-2xl font-semibold text-emerald-400">+18-24%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 mb-1">Water savings per farm/year</p>
                                        <p className="text-2xl font-semibold text-emerald-400">2.4M gallons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-6xl lg:text-7xl font-semibold tracking-tight text-slate-50 mb-8">
                        Powering the infrastructure behind clean energy
                    </h2>

                    <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                        We're building the autonomous systems that solar operators depend on for operational excellence. Partner with us to shape the future of renewable energy infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-sm transition-all duration-300 flex items-center gap-2">
                            Partner With Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-medium rounded-sm transition-colors">
                            Download Investor Brief
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800/50 py-12 bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-sm text-slate-400">
                            © 2025 Solar Autonomy. Engineered for scale.
                        </div>
                        <div className="flex items-center gap-8 text-sm text-slate-400">
                            <a href="#" className="hover:text-slate-200 transition-colors">Contact</a>
                            <a href="#" className="hover:text-slate-200 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-200 transition-colors">Documentation</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}