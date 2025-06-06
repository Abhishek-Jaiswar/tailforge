// ✅ This is a server component (DO NOT add "use client")
import QuestionClient from "./QuestionClient";

type Props = {
  params: {
    id: string;
  };
};

export default function QuestionPage({ params }: Props) {
  return <QuestionClient questionId={params.id} />;
}
