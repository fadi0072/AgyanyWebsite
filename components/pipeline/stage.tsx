import React from 'react';

interface Stage {
  label: string;
  width: string; // percentage width
}

interface ProgressProps {
  title: string;
  stages: Stage[];
  gradientFrom: string;
  gradientTo: string;
}

const ProgressBar: React.FC<ProgressProps> = ({ title, stages, gradientFrom, gradientTo }) => {
  return (
    <div className="w-full px-2 md:px-0">
      <h3 className="text-center text-[#10052F] mb-4 md:mb-5 text-xl md:text-2xl lg:text-3xl font-semibold font-['Plus_Jakarta_Sans'] uppercase leading-7 md:leading-9">
        {title}
      </h3>
      <div className="relative h-2 md:h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full rounded-full`}
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            width: stages.reduce((acc, stage) => acc + parseFloat(stage.width), 0) + '%',
          }}
        />
      </div>

      <div className="flex flex-wrap justify-between text-[#10052F] text-xs md:text-sm lg:text-[14px] xl:text-[18px] text-center font-normal font-['Roboto'] leading-4 md:leading-5 lg:leading-7 mt-2 gap-1 md:gap-0">
        {stages.map((stage, idx) => (
          <span key={idx} className="text-center flex-1 min-w-[60px] md:whitespace-nowrap">
            {stage.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProgressStages: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-[100%] md:w-[80%] mx-auto md:py-16">
      <ProgressBar
        title="AGPI"
        gradientFrom="#0C0F27"
        gradientTo="#5CC4D3"
        stages={[
          { label: 'Not Yet Recruiting', width: '20' },
          { label: 'Recruiting', width: '25' },
          { label: 'Active, Not Recruiting', width: '25' },
          { label: 'Completed', width: '0' },
        ]}
      />

      <ProgressBar
        title="AGPI2"
        gradientFrom="#0C0F27"
        gradientTo="#5CC4D3"
        stages={[
          { label: 'Basic Research/\nCustom Synthesis', width: '25' },
          { label: 'In-Vitro Efficacy', width: '20' },
          { label: 'In-Vivo Safety & Efficacy\n(animal model)', width: '0' },
          { label: 'Completed', width: '0' },
        ]}
      />
    </div>
  );
};

export default ProgressStages;
