import React, { useState, useEffect } from "react";
import { MessageSquare, Heart, Plus, Search, Calendar, Award } from "lucide-react";
import { audioEngine } from "../utils/audio";
import { useTranslation } from "../i18n/useTranslation";

interface RequestsProps {
  theme: "light" | "dark";
}

interface IconRequest {
  id: string;
  name: string;
  category: string;
  description: string;
  votes: number;
  createdAt: string;
  voted?: boolean;
}

const DEFAULT_REQUESTS: IconRequest[] = [
  {
    id: "req_1",
    name: "DockerIcon",
    category: "brands",
    description: "A 3D whale shipping container model matching cloud orchestrator motifs.",
    votes: 142,
    createdAt: "2026-07-01T12:00:00Z"
  },
  {
    id: "req_2",
    name: "FigmaIcon",
    category: "brands",
    description: "A 3D extruded translucent layout of the Figma logo panels.",
    votes: 118,
    createdAt: "2026-07-03T14:30:00Z"
  },
  {
    id: "req_3",
    name: "KubernetesIcon",
    category: "systems",
    description: "A high-fidelity 3D Kubernetes helm steering wheel with procedural nodes.",
    votes: 95,
    createdAt: "2026-07-05T09:15:00Z"
  },
  {
    id: "req_4",
    name: "TerminalIcon",
    category: "utility",
    description: "A glassmorphic command-line shell interface container window with custom logs.",
    votes: 84,
    createdAt: "2026-07-08T16:45:00Z"
  },
  {
    id: "req_5",
    name: "CpuGpuIcon",
    category: "hardware",
    description: "A combined chip rendering showcasing both core cpu modules and gpu arrays.",
    votes: 72,
    createdAt: "2026-07-10T10:00:00Z"
  }
];

export const Requests: React.FC<RequestsProps> = () => {
  const { t } = useTranslation();
  const [requests, setRequests] = useState<IconRequest[]>([]);
  const [newIconName, setNewIconName] = useState("");
  const [newCategory, setNewCategory] = useState("utility");
  const [newDescription, setNewDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"votes" | "date">("votes");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load requests from localStorage or fallback to defaults
  useEffect(() => {
    try {
      const stored = localStorage.getItem("r3d_community_requests:v1");
      const votedIds = JSON.parse(localStorage.getItem("r3d_voted_requests:v1") || "[]");

      if (stored) {
        const parsed: IconRequest[] = JSON.parse(stored);
        const mapped = parsed.map((r) => ({
          ...r,
          voted: votedIds.includes(r.id)
        }));
        setRequests(mapped);
      } else {
        const mapped = DEFAULT_REQUESTS.map((r) => ({
          ...r,
          voted: votedIds.includes(r.id)
        }));
        setRequests(mapped);
        localStorage.setItem("r3d_community_requests:v1", JSON.stringify(DEFAULT_REQUESTS));
      }
    } catch (e) {
      console.error("Failed to load requests", e);
    }
  }, []);

  const handleUpvote = (id: string) => {
    audioEngine.playSnap();

    let votedIds = JSON.parse(localStorage.getItem("r3d_voted_requests:v1") || "[]");
    const isVoted = votedIds.includes(id);

    if (isVoted) {
      // Remove vote
      votedIds = votedIds.filter((vId: string) => vId !== id);
    } else {
      // Add vote
      votedIds.push(id);
    }
    localStorage.setItem("r3d_voted_requests:v1", JSON.stringify(votedIds));

    const updated = requests.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          votes: r.voted ? r.votes - 1 : r.votes + 1,
          voted: !r.voted
        };
      }
      return r;
    });

    localStorage.setItem(
      "r3d_community_requests:v1",
      JSON.stringify(updated.map(({ voted: _voted, ...rest }) => rest))
    );

    setRequests(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIconName.trim()) return;

    audioEngine.playChime();

    const newReq: IconRequest = {
      id: `req_${Date.now()}`,
      name: newIconName.trim().endsWith("Icon") ? newIconName.trim() : `${newIconName.trim()}Icon`,
      category: newCategory,
      description: newDescription.trim() || "Custom community requested 3D component model asset.",
      votes: 1,
      createdAt: new Date().toISOString()
    };

    const updated = [newReq, ...requests];
    localStorage.setItem(
      "r3d_community_requests:v1",
      JSON.stringify(updated.map(({ voted: _voted, ...rest }) => rest))
    );

    setRequests(updated.map((r) => (r.id === newReq.id ? { ...r, voted: true } : r)));

    // Mark request ID as voted in local storage
    const votedIds = JSON.parse(localStorage.getItem("r3d_voted_requests:v1") || "[]");
    votedIds.push(newReq.id);
    localStorage.setItem("r3d_voted_requests:v1", JSON.stringify(votedIds));

    setNewIconName("");
    setNewDescription("");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // Filter and sort request items
  const filteredRequests = requests
    .filter((r) => {
      const query = searchQuery.toLowerCase();
      return r.name.toLowerCase().includes(query) || r.description.toLowerCase().includes(query);
    })
    .sort((a, b) => {
      if (sortBy === "votes") {
        return b.votes - a.votes;
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-6 relative">
      {/* Background Glow */}
      <div className="absolute top-20 right-[15%] w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 relative z-10 animate-page-fade">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent uppercase">
          {t("requests_title")}
        </h1>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed uppercase tracking-wider">
          {t("requests_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start relative z-10">
        {/* Left Form: Submit Request */}
        <div className="lg:col-span-1 p-5 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl flex flex-col gap-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-500 border-b border-zinc-200/50 dark:border-white/5 pb-3">
            <Plus size={16} />
            <span>{t("requests_form_title")}</span>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                <Award size={20} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-500">
                {t("requests_success_title")}
              </span>
              <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 max-w-[180px] leading-relaxed uppercase tracking-wider">
                {t("requests_success_desc")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-zinc-450 dark:text-zinc-450">
                  {t("requests_form_name")}
                </label>
                <input
                  type="text"
                  placeholder={t("requests_form_name_placeholder")}
                  value={newIconName}
                  onChange={(e) => setNewIconName(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-black/25 focus:outline-none focus:border-indigo-500 transition text-zinc-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-zinc-450 dark:text-zinc-450">
                  {t("requests_form_category")}
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-black/25 focus:outline-none focus:border-indigo-500 transition text-zinc-700 dark:text-zinc-350"
                >
                  <option value="utility">Utility</option>
                  <option value="systems">Systems</option>
                  <option value="storage">Storage</option>
                  <option value="hardware">Hardware</option>
                  <option value="networking">Networking</option>
                  <option value="brands">Brands</option>
                  <option value="emojies">Emojis</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-wider text-zinc-450 dark:text-zinc-450">
                  {t("requests_form_desc")}
                </label>
                <textarea
                  placeholder={t("requests_form_desc_placeholder")}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-black/25 focus:outline-none focus:border-indigo-500 transition resize-none leading-relaxed text-zinc-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md shadow-purple-500/10 hover:shadow-purple-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageSquare size={14} />
                <span>{t("requests_form_submit")}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Feed: Requests List */}
        <div className="lg:col-span-2 flex flex-col gap-3.5">
          {/* Filters Bar */}
          <div className="p-3 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl shadow-sm flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                placeholder={t("requests_search_placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/30 dark:bg-black/20 border border-zinc-200/50 dark:border-white/5 rounded-xl py-1.5 pl-8 pr-3 text-xs focus:outline-none focus:border-indigo-500 text-zinc-900 dark:text-white"
              />
              <Search
                size={14}
                className="absolute left-2.5 top-2.5 text-zinc-400 pointer-events-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0 justify-end">
              <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {t("requests_sort_label")}
              </span>
              <button
                type="button"
                onClick={() => setSortBy("votes")}
                className={`px-2.5 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-wider transition cursor-pointer ${
                  sortBy === "votes"
                    ? "border-indigo-500/50 bg-indigo-50/30 dark:bg-indigo-950/20 text-indigo-500"
                    : "border-zinc-200/50 dark:border-white/5 text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-200"
                }`}
              >
                {t("requests_sort_votes")}
              </button>
              <button
                type="button"
                onClick={() => setSortBy("date")}
                className={`px-2.5 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-wider transition cursor-pointer ${
                  sortBy === "date"
                    ? "border-indigo-500/50 bg-indigo-50/30 dark:bg-indigo-950/20 text-indigo-500"
                    : "border-zinc-200/50 dark:border-white/5 text-zinc-400 hover:text-zinc-650 dark:hover:text-zinc-200"
                }`}
              >
                {t("requests_sort_date")}
              </button>
            </div>
          </div>

          {/* Cards Feed */}
          {filteredRequests.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-3 border border-dashed border-zinc-200/50 dark:border-white/5 rounded-2xl bg-white/20 dark:bg-zinc-950/5">
              <MessageSquare className="w-8 h-8 text-zinc-350 dark:text-zinc-755 animate-pulse" />
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-550 uppercase tracking-widest">
                {t("requests_empty_state")}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5 max-h-[580px] overflow-y-auto pr-2">
              {filteredRequests.map((r) => (
                <div
                  key={r.id}
                  className="p-4 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/15 backdrop-blur-2xl flex items-center justify-between gap-4 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5 transition duration-200 text-left relative overflow-hidden"
                >
                  <div className="flex flex-col gap-1.5 flex-grow min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white uppercase tracking-wider truncate">
                        {r.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex-shrink-0">
                        {t(`category_${r.category}` as any)}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                      {r.description}
                    </p>
                    <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-wider text-zinc-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(r.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Upvote Interactive Box */}
                  <button
                    type="button"
                    onClick={() => handleUpvote(r.id)}
                    className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl border transition cursor-pointer select-none flex-shrink-0 group active:scale-95 ${
                      r.voted
                        ? "border-transparent bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md shadow-pink-500/20"
                        : "border-zinc-200/50 dark:border-white/5 bg-white/30 dark:bg-zinc-950/10 hover:border-pink-500/30 hover:bg-pink-500/5 text-zinc-400 hover:text-pink-500"
                    }`}
                  >
                    <Heart
                      size={14}
                      className={`transition-transform duration-300 group-hover:scale-110 ${
                        r.voted ? "fill-current scale-105 animate-pulse" : ""
                      }`}
                    />
                    <span className="text-[9px] font-black uppercase tracking-wide mt-1 leading-none">
                      {r.votes}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
