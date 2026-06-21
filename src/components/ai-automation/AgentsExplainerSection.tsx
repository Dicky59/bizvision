import { getTranslations } from "next-intl/server";
import AgentLoopDiagram from "@/components/shared/AgentLoopDiagram";

export default async function AgentsExplainerSection() {
  const t = await getTranslations("AiAutomation.agentsExplainer");

  return (
    <section className="bg-paper py-20 lg:py-28 border-b border-bone">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
              {t("eyebrow")}
            </p>
            <h2
              className="font-display font-bold text-ink leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              {t("heading")}
            </h2>
            <p className="text-base text-taupe leading-relaxed mb-4">{t("bodyP1")}</p>
            <p className="text-base text-taupe leading-relaxed">{t("bodyP2")}</p>
          </div>

          <div className="flex items-center justify-center">
            <AgentLoopDiagram ariaLabel={t("diagramLabel")} />
          </div>
        </div>
      </div>
    </section>
  );
}
