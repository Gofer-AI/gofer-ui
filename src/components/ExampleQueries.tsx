import { EXAMPLE_QUERIES } from '../constants';

interface ExampleQueriesProps {
  onSelectQuery: (query: string) => void;
}

export default function ExampleQueries({ onSelectQuery }: ExampleQueriesProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-700">Example Queries</h3>
      <div className="flex flex-wrap gap-2">
        {EXAMPLE_QUERIES.slice(0, 3).map((query) => (
          <button
            key={query}
            onClick={() => onSelectQuery(query)}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
}
