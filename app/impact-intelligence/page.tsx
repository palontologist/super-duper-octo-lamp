import { newsletters, podcastEpisodes } from "@/lib/newsletter-data";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { NewsletterSubscribeForm } from "@/components/ui/newsletter-subscribe-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Intelligence | F^3",
  description:
    "Newsletters and podcast episodes exploring trust, impact investment, and the future of the impact economy.",
};

export default function ImpactIntelligencePage() {
  const released = newsletters.filter((n) => !n.comingSoon);
  const comingSoon = newsletters.filter((n) => n.comingSoon);

  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-widest mb-3">
            frontforumfocus
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Impact Intelligence
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Newsletters, conversations, and ideas at the intersection of impact,
            trust, and the future of investment.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">The Trust Series</h2>
          <p className="text-zinc-400 mb-10">
            A limited 3-part series exploring the changing role of trust in the
            impact economy.
          </p>

          <div className="space-y-16">
            {released.map((newsletter) => (
              <article
                key={newsletter.id}
                className="border border-white/10 rounded-xl p-6 sm:p-8 bg-white/5"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full border border-teal-500/30">
                    {newsletter.edition}
                  </span>
                  <time className="text-zinc-500 text-sm">{newsletter.date}</time>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-2 leading-snug">
                  {newsletter.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-6">
                  By {newsletter.authors}
                </p>

                {newsletter.content && (
                  <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-zinc-300 leading-relaxed space-y-4">
                    {newsletter.content.split("\n\n").map((block, i) => {
                      const trimmed = block.trim();
                      if (!trimmed) return null;

                      if (trimmed.startsWith("## ")) {
                        return (
                          <h2
                            key={i}
                            className="text-white text-xl font-bold mt-8 mb-3"
                          >
                            {trimmed.slice(3)}
                          </h2>
                        );
                      }
                      if (trimmed.startsWith("### ")) {
                        return (
                          <h3
                            key={i}
                            className="text-white text-lg font-semibold mt-6 mb-2"
                          >
                            {trimmed.slice(4)}
                          </h3>
                        );
                      }
                      if (trimmed.startsWith("---")) {
                        return (
                          <hr key={i} className="border-white/10 my-6" />
                        );
                      }
                      if (trimmed.startsWith("- ")) {
                        const items = trimmed
                          .split("\n")
                          .filter((l) => l.startsWith("- "));
                        return (
                          <ul
                            key={i}
                            className="list-disc list-inside space-y-1 text-zinc-300"
                          >
                            {items.map((item, j) => (
                              <li key={j}>{renderInline(item.slice(2))}</li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p key={i} className="text-zinc-300">
                          {renderInline(trimmed)}
                        </p>
                      );
                    })}
                  </div>
                )}

                {newsletter.substack && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href={newsletter.substack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
                    >
                      Read on Substack →
                    </a>
                  </div>
                )}
              </article>
            ))}

            {/* Coming Soon */}
            {comingSoon.map((newsletter) => (
              <article
                key={newsletter.id}
                className="border border-white/10 rounded-xl p-6 sm:p-8 bg-white/5 opacity-70"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-zinc-700 text-zinc-400 rounded-full border border-zinc-600">
                    {newsletter.edition}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    {newsletter.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 leading-snug text-zinc-300">
                  {newsletter.title}
                </h3>
                <p className="text-zinc-500 text-sm">
                  Coming {newsletter.comingSoonDate}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="py-16 px-4 sm:px-6 border-b border-white/10 bg-black/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Stay in the loop</h2>
          <p className="text-zinc-400 mb-8">
            Get new editions of The Trust Series and impact insights delivered
            to your inbox.
          </p>
          <NewsletterSubscribeForm />
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Podcast Episodes</h2>
          <p className="text-zinc-400 mb-10">
            Conversations with founders, investors, and builders shaping the
            future of impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col"
              >
                <YouTubeEmbed
                  videoId={episode.youtubeId}
                  title={episode.title}
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-white leading-snug mb-2">
                    {episode.title}
                  </h3>
                  {episode.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed flex-1">
                      {episode.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Renders inline markdown: **bold** and *italic*.
 */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const raw = match[0];
    if (raw.startsWith("**")) {
      parts.push(<strong key={match.index}>{raw.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={match.index}>{raw.slice(1, -1)}</em>);
    }
    last = match.index + raw.length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length === 1 && typeof parts[0] === "string"
    ? parts[0]
    : parts;
}
