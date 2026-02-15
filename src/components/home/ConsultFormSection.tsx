import { Card, CardPanel } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface ConsultFormSectionProps {
  question: string;
  setQuestion: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const ConsultFormSection = ({
  question,
  setQuestion,
  onSubmit,
  isLoading,
}: ConsultFormSectionProps) => {
  return (
    <section id="consult-form" className="max-w-2xl mx-auto px-6 py-12">
      <Card>
        <CardPanel className="p-8 md:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            <Field>
              <FieldLabel className="text-[13px] text-[#A49B8B] font-medium tracking-wide">
                Votre question
              </FieldLabel>
              <Textarea
                unstyled
                className="relative inline-flex w-full rounded-2xl bg-[#111113] text-[#E6E5E0] text-[15px] transition-all duration-200 focus-within:bg-[#161618] focus-within:ring-2 focus-within:ring-violet-400/50 has-disabled:opacity-40 [&_textarea]:min-h-[130px] max-sm:[&_textarea]:min-h-[100px] [&_textarea]:field-sizing-normal [&_textarea]:resize-none [&_textarea]:px-5 [&_textarea]:py-4 [&_textarea]:placeholder:text-[#8A857E] [&_textarea]:outline-none [&_textarea]:w-full [&_textarea]:rounded-[inherit] [&_textarea]:bg-transparent"
                size="lg"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: Quel chemin dois-je emprunter pour trouver la paix ?"
                disabled={isLoading}
                maxLength={500}
              />
              <div className="flex justify-end">
                <span className="text-[#8A857E] text-[12px]">
                  {question.length}/500
                </span>
              </div>
            </Field>

            <Button
              type="submit"
              disabled={isLoading || !question.trim()}
              className="w-full h-auto py-4 rounded-2xl font-semibold text-[15px] text-white border-0 bg-transparent inset-shadow-none before:hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] disabled:opacity-40 shadow-[0_4px_16px_rgba(67,56,202,0.25),0_1px_3px_rgba(0,0,0,0.08)]"
              style={{
                background: isLoading
                  ? "#71717A"
                  : "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
              }}
            >
              {isLoading ? (
                <>
                  <Spinner className="text-white" />
                  <span>Interrogation des flux…</span>
                </>
              ) : (
                <>
                  <span>Consulter l&apos;Oracle</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </Button>
          </form>
        </CardPanel>
      </Card>
    </section>
  );
};
