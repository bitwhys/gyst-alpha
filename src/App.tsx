import { ContentPlaceholder } from "@/components/content-placeholder";
import { Navbar } from "@/components/navbar";

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  // More items...
];

function App() {
  return (
    <div className="py-24 sm:py-32 lg:py-40">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-2xl">
          {/* Content goes here */}
          <ul role="list" className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm"
              >
                {/* Your content */}
                <ContentPlaceholder className="h-24" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
