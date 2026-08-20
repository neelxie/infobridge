import { cn } from "@/lib/utils";

/**
 * The site's signature visual motif: a sparse network of nodes and
 * connecting lines, representing the synthesis of disciplines
 * (technology, research, policy, communications) into one practice.
 * Used with restraint — as a quiet background layer, never as decoration
 * that competes with content.
 */
export function NodeField({ className }: { className?: string }) {
  const nodes = [
    [60, 40], [220, 90], [420, 30], [640, 110], [810, 50],
    [140, 220], [340, 260], [560, 210], [760, 260],
    [40, 380], [260, 400], [480, 370], [700, 400], [880, 360],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [6, 10], [7, 11], [8, 12], [9, 10], [10, 11], [11, 12], [3, 7],
  ];

  return (
    <svg
      className={cn("pointer-events-none", className)}
      viewBox="0 0 900 440"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2.5} fill="currentColor" fillOpacity="0.55" />
      ))}
    </svg>
  );
}
