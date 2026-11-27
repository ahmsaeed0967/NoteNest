// The shape of one note in our app.
export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  date: string; // written as "YYYY-MM-DD"
  image?: string; // optional: path to a picture in public/images
}

// The shape of one group member (used in the footer and about page).
export interface TeamMember {
  name: string;
  rollNumber: string;
  role: string;
}
