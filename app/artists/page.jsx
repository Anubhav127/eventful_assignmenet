import { Suspense } from 'react';
import ArtistsPage from './_component/ArtistsPage';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<div>Loading artists...</div>}>
        <ArtistsPage />
      </Suspense>
    </div>
  );
}
