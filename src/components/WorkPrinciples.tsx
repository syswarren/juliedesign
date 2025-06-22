interface WorkPrinciple {
  title: string;
  description: string;
}

interface WorkPrinciplesProps {
  principles: WorkPrinciple[];
}

export default function WorkPrinciples({ principles }: WorkPrinciplesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {principles.map((principle, index) => (
        <div key={index} className="space-y-2">
          <h3 className="font-semibold text-white page-text">
            {principle.title}
          </h3>
          <p className="text-true-gray-300 page-text">
            {principle.description}
          </p>
        </div>
      ))}
    </div>
  );
} 