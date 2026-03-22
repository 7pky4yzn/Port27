export type GalleryItem = {
  id: string;
  aspect: string;
  src: string;
  rotation: number;
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
};

export type BookItem = GalleryItem & {
  pos: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: string;
    zIndex: number;
  };
};

export type MusicItem = GalleryItem & {};

// ==========================================
// KLIKS (Gallery Section)
// ==========================================
export const galleryItems: GalleryItem[] = [
  { id: 'klik-1', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl1/400/400', rotation: -2, title: 'Urban Exploration', description: 'Downtown at midnight.', link: 'https://instagram.com', linkText: 'View on Instagram' },
  { id: 'klik-2', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/book1/400/600', rotation: 3, title: 'Nature Walk', description: 'Finding peace in the woods.' },
  { id: 'klik-3', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl2/400/400', rotation: -1 },
  { id: 'klik-4', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/book2/400/533', rotation: 2 },
  { id: 'klik-5', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/book3/400/600', rotation: -3 },
  { id: 'klik-6', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl3/400/400', rotation: 1 },
  { id: 'klik-7', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/book4/400/533', rotation: -2 },
  { id: 'klik-8', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl4/400/400', rotation: 3 },
  { id: 'klik-9', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl5/400/400', rotation: -1 },
  { id: 'klik-10', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/book5/400/600', rotation: 2 },
  { id: 'klik-11', aspect: 'aspect-square', src: 'https://picsum.photos/seed/vinyl6/400/400', rotation: -3 },
  { id: 'klik-12', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/book6/400/533', rotation: 1 },
];

// ==========================================
// BOOKS SECTION
// ==========================================
export const bookItems: BookItem[] = [
  { id: 'book-1', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel1/400/533', rotation: -4, pos: { top: '10%', left: '12%', width: 'clamp(100px, 14%, 220px)', zIndex: 10 }, title: 'The Great Gatsby', description: 'F. Scott Fitzgerald', link: 'https://goodreads.com', linkText: 'Goodreads' },
  { id: 'book-2', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel2/400/600', rotation: 2, pos: { top: '5%', left: '28%', width: 'clamp(100px, 14%, 220px)', zIndex: 20 }, title: '1984', description: 'George Orwell' },
  { id: 'book-3', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel3/400/533', rotation: -1, pos: { top: '8%', left: '45%', width: 'clamp(100px, 14%, 220px)', zIndex: 15 } },
  { id: 'book-4', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel4/400/600', rotation: 4, pos: { top: '4%', right: '26%', width: 'clamp(100px, 14%, 220px)', zIndex: 25 } },
  { id: 'book-5', aspect: 'aspect-square', src: 'https://picsum.photos/seed/novel5/400/400', rotation: -3, pos: { top: '12%', right: '10%', width: 'clamp(100px, 14%, 220px)', zIndex: 10 } },
  { id: 'book-6', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel6/400/533', rotation: 6, pos: { top: '35%', right: '5%', width: 'clamp(100px, 14%, 220px)', zIndex: 20 } },
  { id: 'book-7', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel7/400/600', rotation: -4, pos: { bottom: '30%', right: '8%', width: 'clamp(100px, 14%, 220px)', zIndex: 15 } },
  { id: 'book-8', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel8/400/533', rotation: 3, pos: { bottom: '10%', right: '15%', width: 'clamp(100px, 14%, 220px)', zIndex: 25 } },
  { id: 'book-9', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel9/400/600', rotation: -2, pos: { bottom: '5%', right: '32%', width: 'clamp(100px, 14%, 220px)', zIndex: 10 } },
  { id: 'book-10', aspect: 'aspect-square', src: 'https://picsum.photos/seed/novel10/400/400', rotation: 1, pos: { bottom: '8%', left: '45%', width: 'clamp(100px, 14%, 220px)', zIndex: 20 } },
  { id: 'book-11', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel11/400/533', rotation: -5, pos: { bottom: '4%', left: '28%', width: 'clamp(100px, 14%, 220px)', zIndex: 15 } },
  { id: 'book-12', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel12/400/600', rotation: 4, pos: { bottom: '15%', left: '12%', width: 'clamp(100px, 14%, 220px)', zIndex: 25 } },
  { id: 'book-13', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/novel13/400/533', rotation: -3, pos: { bottom: '38%', left: '5%', width: 'clamp(100px, 14%, 220px)', zIndex: 10 } },
  { id: 'book-14', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/novel14/400/600', rotation: 2, pos: { top: '35%', left: '8%', width: 'clamp(100px, 14%, 220px)', zIndex: 20 } },
];

// ==========================================
// MUSIC SECTION
// ==========================================
export const musicItems: MusicItem[] = [
  { id: 'music-1', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album1/400/400', rotation: -2, title: 'Midnight City', description: 'M83', link: 'https://open.spotify.com/track/161NdT2X8gA2A7X1X624lB', linkText: 'Spotify' },
  { id: 'music-2', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album2/400/400', rotation: 3, title: 'The Less I Know The Better', description: 'Tame Impala', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-3', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album3/400/400', rotation: -1, title: 'Pink + White', description: 'Frank Ocean', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-4', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album4/400/400', rotation: 2, title: 'Starboy', description: 'The Weeknd', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-5', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album5/400/400', rotation: -3, title: 'Feel Good Inc.', description: 'Gorillaz', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-6', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album6/400/400', rotation: 1, title: 'Do I Wanna Know?', description: 'Arctic Monkeys', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-7', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album7/400/400', rotation: -2, title: 'Super Rich Kids', description: 'Frank Ocean', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-8', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album8/400/400', rotation: 3, title: 'Instant Crush', description: 'Daft Punk', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-9', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album9/400/400', rotation: -1, title: 'L$D', description: 'A$AP Rocky', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-10', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album10/400/400', rotation: 2, title: 'Redbone', description: 'Childish Gambino', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-11', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album11/400/400', rotation: -3, title: 'Location', description: 'Khalid', link: 'https://open.spotify.com', linkText: 'Spotify' },
  { id: 'music-12', aspect: 'aspect-square', src: 'https://picsum.photos/seed/album12/400/400', rotation: 1, title: 'Gooey', description: 'Glass Animals', link: 'https://open.spotify.com', linkText: 'Spotify' },
];

// ==========================================
// ARTWORKS SECTION
// ==========================================
export const artworksItems: GalleryItem[] = [
  { id: 'art-1', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/art1/400/533', rotation: -2, title: 'Abstract Thoughts', description: 'Digital painting.' },
  { id: 'art-2', aspect: 'aspect-square', src: 'https://picsum.photos/seed/art2/400/400', rotation: 3, title: 'Color Splash', description: 'Acrylic on canvas.' },
  { id: 'art-3', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/art3/400/600', rotation: -1 },
  { id: 'art-4', aspect: 'aspect-square', src: 'https://picsum.photos/seed/art4/400/400', rotation: 2 },
  { id: 'art-5', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/art5/400/533', rotation: -3 },
  { id: 'art-6', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/art6/400/600', rotation: 1 },
  { id: 'art-7', aspect: 'aspect-square', src: 'https://picsum.photos/seed/art7/400/400', rotation: -2 },
  { id: 'art-8', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/art8/400/533', rotation: 3 },
  { id: 'art-9', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/art9/400/600', rotation: -1 },
  { id: 'art-10', aspect: 'aspect-square', src: 'https://picsum.photos/seed/art10/400/400', rotation: 2 },
  { id: 'art-11', aspect: 'aspect-[3/4]', src: 'https://picsum.photos/seed/art11/400/533', rotation: -3 },
  { id: 'art-12', aspect: 'aspect-[2/3]', src: 'https://picsum.photos/seed/art12/400/600', rotation: 1 },
];
