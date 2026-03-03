// pages/DatabaseMaintenance.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, HardDrive, Activity, Clock, RefreshCw, Download, Upload, 
  Archive, Trash2, CheckCircle, AlertCircle, Settings, Server, 
  BarChart3, Shield, Zap, Cpu, MemoryStick, Network, FileText, 
  Users, TrendingUp, AlertTriangle, Info, Check, X, Edit, 
  MoreVertical, Filter, Search, Calendar, DownloadCloud, UploadCloud,
  Copy, Printer, Mail, Globe, Lock, Key, Eye, EyeOff, Bell, BellOff,
  Star, Heart, Bookmark, Flag, MapPin, Phone,  Share2, 
  ThumbsUp, ThumbsDown, MessageCircle, MessageSquare, PenTool, Pencil,
  Plus, Minus, XCircle, HelpCircle, LifeBuoy, Award, Gift, Coffee,
  Home, LogOut, Menu, Moon, Sun, Wifi, WifiOff, Bluetooth, Battery,
  Volume2, VolumeX, Mic, MicOff, Camera, CameraOff, Video, VideoOff,
  Headphones, Speaker, Disc, Music, Radio, Podcast, Film, Tv, Monitor,
  Tablet, Smartphone, Watch, Clock as ClockIcon, Calendar as CalendarIcon,
  Cloud, CloudRain, CloudSnow, CloudLightning, Sun as SunIcon,
  Moon as MoonIcon, Wind, Compass, Navigation, Map, Layers, Grid, List,
  Menu as MenuIcon, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpCircle, ArrowDownCircle,
  ArrowLeftCircle, ArrowRightCircle, Circle, Square, Triangle, Hexagon,
  Octagon, Pentagon, Star as StarIcon, Heart as HeartIcon, 
  Bookmark as BookmarkIcon, Flag as FlagIcon, MapPin as MapPinIcon,
  Phone as PhoneIcon, Mail as MailIcon, Link as LinkIcon,
  Share as ShareIcon, ThumbsUp as ThumbsUpIcon, ThumbsDown as ThumbsDownIcon,
  MessageCircle as MessageCircleIcon, MessageSquare as MessageSquareIcon,
  PenTool as PenToolIcon, Pencil as PencilIcon, Plus as PlusIcon,
  Minus as MinusIcon, X as XIcon, Check as CheckIcon,
  HelpCircle as HelpCircleIcon, LifeBuoy as LifeBuoyIcon,
  Award as AwardIcon, Gift as GiftIcon, Coffee as CoffeeIcon,
  Home as HomeIcon, LogOut as LogOutIcon, Menu as MenuIcon2,
  Moon as MoonIcon2, Sun as SunIcon2, Wifi as WifiIcon,
  WifiOff as WifiOffIcon, Bluetooth as BluetoothIcon, Battery as BatteryIcon,
  BatteryCharging as BatteryChargingIcon, Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon, Mic as MicIcon, MicOff as MicOffIcon,
  Camera as CameraIcon, CameraOff as CameraOffIcon, Video as VideoIcon,
  VideoOff as VideoOffIcon, Headphones as HeadphonesIcon,
  Speaker as SpeakerIcon, Disc as DiscIcon, Music as MusicIcon,
  Radio as RadioIcon, Podcast as PodcastIcon, Film as FilmIcon,
  Tv as TvIcon, Monitor as MonitorIcon, Tablet as TabletIcon,
  Smartphone as SmartphoneIcon, Watch as WatchIcon, Clock as ClockIcon2,
  Calendar as CalendarIcon2, Cloud as CloudIcon, CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon,
  Sun as SunIcon3, Moon as MoonIcon3, Wind as WindIcon,
  Compass as CompassIcon, Navigation as NavigationIcon, Map as MapIcon,
  Layers as LayersIcon, Grid as GridIcon, List as ListIcon,
  Sparkles, Rocket, Palette, Globe as GlobeIcon, Users2, Medal, Trophy,
  ShoppingBag, CreditCard, Heart as HeartIcon2, Plane, Coffee as CoffeeIcon2,
  GraduationCap, Code2, Briefcase, Building2, Target, MessageSquare as MessageSquareIcon2,
  Fingerprint, Headphones as HeadphonesIcon2
} from "lucide-react";

const DatabaseMaintenance = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");

  // Hero Stats
  const heroStats = [
    { value: "12", label: "Databases" },
    { value: "1.2K", label: "Tables" },
    { value: "2.4TB", label: "Total Size" },
    { value: "99.9%", label: "Uptime" }
  ];

  // Core Services
  const coreServices = [
    {
      title: "Database Optimization",
      description: "Optimize queries, indexes, and table structures for maximum performance.",
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600",
      features: ["Query Optimization", "Index Rebuilding", "Table Defragmentation", "Performance Tuning"]
    },
    {
      title: "Backup & Recovery",
      description: "Automated backups with point-in-time recovery and disaster recovery planning.",
      icon: <Archive className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600",
      features: ["Automated Backups", "Point-in-Time Recovery", "Disaster Recovery", "Backup Verification"]
    },
    {
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure regulatory compliance.",
      icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600",
      features: ["Encryption", "Access Control", "Audit Logging", "GDPR/HIPAA Compliance"]
    },
    {
      title: "Performance Monitoring",
      description: "24/7 monitoring with real-time alerts and performance analytics.",
      icon: <Activity className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-sky-600",
      features: ["Real-time Metrics", "Custom Alerts", "Performance Dashboards", "Trend Analysis"]
    },
    {
      title: "Data Migration",
      description: "Seamless migration between database platforms with zero downtime.",
      icon: <UploadCloud className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-blue-600",
      features: ["Schema Migration", "Data Validation", "Zero Downtime", "Rollback Planning"]
    },
    {
      title: "24/7 Database Support",
      description: "Round-the-clock expert support for critical database issues.",
      icon: <HeadphonesIcon2 className="w-10 h-10 md:w-12 md:h-12" />,
      color: "text-cyan-600",
      features: ["Emergency Response", "Root Cause Analysis", "Performance Reviews", "Health Checks"]
    }
  ];

  // Features
  const features = [
    {
      title: "Automated Backups",
      description: "Scheduled backups with encryption and compression",
      icon: <DownloadCloud className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor queries, connections, and performance metrics",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Security Audits",
      description: "Regular security assessments and vulnerability scanning",
      icon: <Lock className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      title: "Query Optimization",
      description: "Identify and optimize slow-running queries",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />
    }
  ];

  // Database Types
  const databaseTypes = [
    {
      name: "MySQL",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "150+"
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "120+"
    },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "80+"
    },
    {
      name: "Redis",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "60+"
    },
    {
      name: "Elasticsearch",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "45+"
    },
    {
      name: "SQL Server",
      icon: <Server className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "90+"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      description: "Over a decade of database administration and optimization expertise",
      icon: <Medal className="w-8 h-8" />,
      stats: "10+ Years",
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "500+ Databases Managed",
      description: "Successfully managing databases from startups to enterprises",
      icon: <Trophy className="w-8 h-8" />,
      stats: "500+ DBs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "99.99% Uptime SLA",
      description: "Guaranteed availability with proactive monitoring",
      icon: <Activity className="w-8 h-8" />,
      stats: "99.99% Uptime",
      color: "from-cyan-500 to-sky-500"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring with instant alerting",
      icon: <Bell className="w-8 h-8" />,
      stats: "24/7 Coverage",
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Certified Experts",
      description: "Team of certified database administrators and architects",
      icon: <Award className="w-8 h-8" />,
      stats: "15+ Certifications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Instant Response",
      description: "Average 5-minute response time for critical issues",
      icon: <Clock className="w-8 h-8" />,
      stats: "5-min Response",
      color: "from-cyan-500 to-sky-500"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Their database optimization improved our query performance by 300%. Outstanding service!",
      name: "David Chen",
      // role: "CTO, TechFlow",
      image: "DC"
    },
    {
      quote: "24/7 monitoring caught a potential issue at 3 AM. They fixed it before we even noticed.",
      name: "Sarah Williams",
      // role: "CEO, DataDrive",
      image: "SW"
    },
    {
      quote: "The automated backup system saved us when we accidentally deleted critical data.",
      name: "Rajesh Kumar",
      // role: "IT Director, FinCorp",
      image: "RK"
    }
  ];

  // Industries
  const industries = [
    {
      name: "E-commerce",
      icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "45+"
    },
    {
      name: "Healthcare",
      icon: <HeartIcon2 className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "35+"
    },
    {
      name: "FinTech",
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "40+"
    },
    {
      name: "SaaS",
      icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "50+"
    },
    {
      name: "E-commerce",
      icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "45+"
    },
    {
      name: "Analytics",
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      projects: "30+"
    }
  ];

  // Database Health Metrics
  const healthMetrics = [
    { name: "Overall Health", value: "98.5%", status: "good" },
    { name: "Query Performance", value: "94%", status: "good" },
    { name: "Storage Usage", value: "72%", status: "warning" },
    { name: "Connection Pool", value: "847/1000", status: "good" }
  ];

  // Recent Alerts
  const recentAlerts = [
    { severity: "critical", message: "High CPU usage on Production DB", time: "5 min ago" },
    { severity: "warning", message: "Slow queries detected on Orders table", time: "15 min ago" },
    { severity: "info", message: "Automated backup completed", time: "1 hour ago" },
    { severity: "success", message: "Index rebuild completed", time: "2 hours ago" }
  ];

  // Top Tables by Size
  const topTables = [
    { name: "transactions", size: "3.4 GB", rows: "12.3M", status: "critical" },
    { name: "logs", size: "2.8 GB", rows: "45.6M", status: "warning" },
    { name: "orders", size: "1.2 GB", rows: "5.2M", status: "good" },
    { name: "users", size: "456 MB", rows: "1.5M", status: "good" }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive database health check and performance analysis."
    },
    {
      step: "02",
      title: "Planning",
      description: "Create customized maintenance strategy and schedule."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute maintenance tasks with minimal downtime."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "24/7 monitoring with real-time alerts and reporting."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous performance tuning and query optimization."
    },
    {
      step: "06",
      title: "Review",
      description: "Regular health reports and strategy adjustments."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "How often should databases be maintained?",
      answer: "We recommend daily automated maintenance with weekly manual reviews for optimal performance."
    },
    {
      question: "What's included in database backup?",
      answer: "Full database backups with transaction logs, encrypted and compressed, stored in multiple locations."
    },
    {
      question: "How do you handle emergency issues?",
      answer: "Our 24/7 monitoring team responds within 5 minutes with automated failover if needed."
    },
    {
      question: "Can you optimize existing databases?",
      answer: "Yes, we analyze and optimize existing databases, often improving performance by 50-300%."
    }
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'info': return 'bg-blue-500';
      case 'success': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-sky-900 via-blue-900 to-sky-800 overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Database className="w-4 h-4 text-sky-300" />
              <span className="text-sm font-medium text-white">Enterprise Database Maintenance</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Keep Your Databases{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-300">
                Healthy & Fast
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Professional database maintenance, optimization, and 24/7 monitoring. 
              We ensure your data is secure, available, and performing at peak efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-6 shadow-xl shadow-sky-600/20 text-base"
              >
                <Link to="/contact#contact-form" className="flex items-center justify-center">
                  Start Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                <Link to="/services" className="flex items-center justify-center">
                  <Eye className="mr-2 w-5 h-5" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIVE DATABASE HEALTH DASHBOARD ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Live{' '}
                <span className="text-sky-600">Database Health</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                Real-time metrics from your production databases
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="1h">Last Hour</option>
                <option value="6h">Last 6 Hours</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
              </select>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Health Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100">
                <div className="text-sm text-gray-600 mb-2">{metric.name}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                  ${metric.status === 'good' ? 'bg-green-100 text-green-700' : 
                    metric.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-1.5
                    ${metric.status === 'good' ? 'bg-green-500' : 
                      metric.status === 'warning' ? 'bg-yellow-500' : 
                      'bg-red-500'}`} />
                  {metric.status === 'good' ? 'Healthy' : metric.status === 'warning' ? 'Warning' : 'Critical'}
                </div>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Alerts */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Bell className="w-5 h-5 text-sky-600 mr-2" />
                Recent Alerts
              </h3>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(alert.severity)}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4 text-sky-600 hover:text-sky-700 p-0">
                View All Alerts
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Largest Tables */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Database className="w-5 h-5 text-sky-600 mr-2" />
                Largest Tables
              </h3>
              <div className="space-y-3">
                {topTables.map((table, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{table.name}</p>
                      <p className="text-xs text-gray-500">{table.rows} rows</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{table.size}</p>
                      <p className={`text-xs ${getStatusColor(table.status)}`}>
                        {table.status === 'good' ? 'Healthy' : 
                         table.status === 'warning' ? 'Needs Attention' : 'Critical'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4 text-sky-600 hover:text-sky-700 p-0">
                View All Tables
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Professional{' '}
              <span className="text-sky-600">Database Maintenance?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Prevent issues before they happen with proactive monitoring and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 md:p-8 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all bg-white"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-100 transition-all">
                  <div className="text-sky-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-sky-600">Database Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive database management solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-sky-50 to-blue-50`}>
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700 text-sm md:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="text-sky-600">Process</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to database maintenance and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
                  <span className="text-4xl md:text-5xl font-bold text-sky-100 absolute top-4 right-4">
                    {phase.step}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 relative z-10">{phase.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DATABASE TYPES ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Databases We{' '}
              <span className="text-sky-600">Support</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Expertise across all major database platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {databaseTypes.map((db, index) => (
              <div
                key={index}
                className="bg-sky-50 rounded-xl p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="text-sky-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {db.icon}
                </div>
                <h4 className="font-bold text-base mb-1">{db.name}</h4>
                <div className="text-sky-600 font-bold text-sm">{db.projects}</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why{' '}
              <span className="text-sky-600">Choose Us</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              What makes us the preferred database maintenance partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                        {item.stats}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client{' '}
              <span className="text-sky-600">Success Stories</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve database excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {/* <p className="text-gray-600 text-sm">{testimonial.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="text-sky-600">Serve</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Database expertise across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all group border border-gray-200"
              >
                <div className="text-sky-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-base mb-1">{industry.name}</h4>
                <div className="text-sky-600 font-bold text-sm">{industry.projects}</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="text-sky-600">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Everything you need to know about database maintenance
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Optimize Your Databases?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Let's Ensure Your Database Health
          </h2>
          <p className="text-sm md:text-base text-sky-100 mb-6 max-w-2xl mx-auto">
            Schedule a free database health check with our experts. We'll analyze your current setup 
            and provide a detailed optimization roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-700 hover:bg-gray-100 px-6 py-4 font-bold shadow-lg text-sm"
            >
              <Link to="/contact">
                Get Free Health Check
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-4 text-sm"
            >
              <Link to="/services">
                <Eye className="w-4 h-4 mr-2" />
                View Services
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-sky-200">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" /> SLA 99.99%
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4" /> Enterprise Security
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 24/7 Support
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseMaintenance;