import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UrlForm from "./components/UrlForm";
import ResultCard from "./components/ResultCard";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import AuthModal from "./components/AuthModal";

const API_BASE = import.meta.env.VITE_API_URL;

export default function App() {
  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [result, setResult] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  // Auth state
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [showAuth, setShowAuth] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername(null);
    setResult(null);
  };

  const handleAuthSuccess = (uname) => {
    setToken(localStorage.getItem("token"));
    setUsername(uname);
  };

  const shorten = async () => {
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    // If not logged in, show auth modal instead
    if (!token) {
      setShowAuth(true);
      return;
    }

    setLoading(true);
    setError("");
    setSuggestions([]);
    setAnalytics(null);

    try {
      const response = await fetch(`${API_BASE}/api/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url, customAlias }),
      });

      const data = await response.json();

      if (response.status === 401) {
        // Token expired — clear and ask to login again
        logout();
        setShowAuth(true);
        return;
      }

      if (!response.ok) {
        setError(data.message || "Unable to shorten URL.");
        setSuggestions(data.suggestions || []);
        return;
      }

      setResult(data);
      setUrl("");
      setCustomAlias("");
      setSuggestions([]);
    } catch (err) {
      console.error(err);
      setError("Server unavailable.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async () => {
    if (!result) return;
    try {
      const response = await fetch(
        `${API_BASE}/api/analytics/${result.shortCode}`
      );
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch analytics.");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />

      <Navbar
        username={username}
        onLoginClick={() => setShowAuth(true)}
        onLogout={logout}
      />

      <Hero />

      <UrlForm
        url={url}
        setUrl={setUrl}
        customAlias={customAlias}
        setCustomAlias={setCustomAlias}
        shorten={shorten}
        loading={loading}
        error={error}
        suggestions={suggestions}
      />

      {result && (
        <ResultCard
          result={result}
          analytics={analytics}
          analyticsLoading={false}
          fetchAnalytics={fetchAnalytics}
        />
      )}

      <FeatureSection />
      <Footer />

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuth && (
          <AuthModal
            onClose={() => setShowAuth(false)}
            onSuccess={handleAuthSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}