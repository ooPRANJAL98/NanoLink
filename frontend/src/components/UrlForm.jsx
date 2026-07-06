import { ArrowRight, ClipboardPaste, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UrlForm({
  url,
  setUrl,
  customAlias,
  setCustomAlias,
  shorten,
  loading,
  error,
  suggestions,
}) {
  const pasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      console.log("Clipboard access denied.");
    }
  };

  const clearInput = () => {
    setUrl("");
    setCustomAlias("");
  };

  return (
    <section
      id="shortener"
      className="max-w-4xl mx-auto mt-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Shorten Your URL
        </h2>

        <p className="text-slate-400 mb-8">
          Paste any long URL below and optionally choose your own custom alias.
        </p>

        {/* URL Input */}

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && shorten()}
            placeholder="https://example.com/very/long/url"
            className="flex-1 rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
          />

          <button
            onClick={pasteClipboard}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 hover:border-indigo-500 transition"
          >
            <ClipboardPaste size={18} />
            Paste
          </button>

          <button
            onClick={clearInput}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 hover:border-red-500 transition"
          >
            <X size={18} />
            Clear
          </button>

        </div>

        {/* Custom Alias */}

        <div className="mt-5">

          <label className="block text-sm text-slate-400 mb-2">
            Custom Alias (Optional)
          </label>

          <input
            type="text"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            placeholder="e.g. github, portfolio, resume"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
          />

          <p className="text-xs text-slate-500 mt-2">
            Leave empty to generate a random short code.
          </p>

        </div>

        {/* Generate Button */}

        <button
          onClick={shorten}
          disabled={loading}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl px-8 py-4 flex items-center justify-center gap-2 font-semibold transition"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating...
            </>
          ) : (
            <>
              Generate Short URL
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Error */}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-5"
            >
              <p className="text-red-500 font-medium">
                {error}
              </p>

              {suggestions && suggestions.length > 0 && (
                <div className="mt-4">

                  <p className="text-slate-400 text-sm mb-3">
                    Try one of these:
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {suggestions.map((alias) => (
                      <button
                        key={alias}
                        onClick={() => setCustomAlias(alias)}
                        className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition"
                      >
                        {alias}
                      </button>
                    ))}

                  </div>

                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-slate-500 text-sm mt-5">
          Supports HTTP and HTTPS URLs. Press{" "}
          <span className="font-semibold">Enter</span> or click{" "}
          <span className="font-semibold">Generate</span>.
        </p>

      </motion.div>
    </section>
  );
}